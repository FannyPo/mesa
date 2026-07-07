export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.ANTHROPIC_API_KEY) {
    return json({ error: 'API key not configured' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const {
    conditions = [],
    familySize = 3,
    budget = 100,
    storeName = 'any grocery store',
    onSale = '',
    busyNights = [],
  } = body;

  const conditionList = conditions.length ? conditions.join(', ') : 'none';
  const busyList = busyNights.length ? busyNights.join(', ') : 'none';
  const saleInfo = onSale.trim() || 'none specified — build around budget staples';

  const prompt = `You are Mesa, a meal planning assistant for families managing health on a tight grocery budget.

Build a complete 7-day meal plan for this household:
- Health conditions: ${conditionList}
- Family size: ${familySize} people
- Weekly grocery budget: $${budget}
- Grocery store: ${storeName}
- Items on sale this week: ${saleInfo}
- Busy nights (meals must be under 20 min): ${busyList}

Rules:
1. Plan meals around WHOLE packages. If you use half a bag of green beans Monday, use the rest another day. No ingredient is bought for one meal only.
2. Pre-diabetes: all meals low-glycemic, no added sugars, emphasize vegetables, lean protein, and fiber. Limit white rice and white bread.
3. Hypertension: limit sodium, avoid processed meats, include potassium-rich foods (beans, greens, sweet potato).
4. Food allergies: strictly avoid every listed allergen in every ingredient — check sauces and condiments too.
5. Busy nights get dinners with 20 minutes or less total prep and cook time.
6. Anchor the plan around sale items when provided.
7. Total grocery cost must stay at or under the budget.
8. Every dinner gets a short recipe: 3–5 plain-English steps, no culinary jargon.
9. Breakfast and lunch need no recipe — just a name and time.

Return ONLY valid JSON. No markdown. No code fences. No explanation outside the JSON. Use exactly this structure:

{
  "week": [
    {
      "day": "Monday",
      "breakfast": { "name": "...", "prepTime": "10 min" },
      "lunch": { "name": "...", "prepTime": "5 min" },
      "dinner": { "name": "...", "prepTime": "30 min", "recipe": "1. ... 2. ... 3. ..." }
    },
    { "day": "Tuesday", "breakfast": {...}, "lunch": {...}, "dinner": {...} },
    { "day": "Wednesday", "breakfast": {...}, "lunch": {...}, "dinner": {...} },
    { "day": "Thursday", "breakfast": {...}, "lunch": {...}, "dinner": {...} },
    { "day": "Friday", "breakfast": {...}, "lunch": {...}, "dinner": {...} },
    { "day": "Saturday", "breakfast": {...}, "lunch": {...}, "dinner": {...} },
    { "day": "Sunday", "breakfast": {...}, "lunch": {...}, "dinner": {...} }
  ],
  "groceryList": [
    { "item": "...", "quantity": "...", "estimatedCost": "$0.00" }
  ],
  "totalEstimatedCost": "$0.00",
  "budgetNote": "One sentence on how the plan fits the budget.",
  "healthNote": "One sentence on how the plan addresses the health conditions, or omit this field if no conditions."
}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return json({ error: `Anthropic API error: ${response.status} ${errText}` }, 502);
    }

    const data = await response.json();
    const raw = data.content[0].text.trim();
    // Strip markdown code fences if the model adds them despite instructions
    const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
    const plan = JSON.parse(cleaned);

    return json(plan, 200);
  } catch (err) {
    return json({ error: err.message }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
