# Pricing Test Design
**BUS 395 — Venture Creation with AI | Rollins College**
**Student:** Fanny Polanco
**Date:** June 2026
**Venture:** Pre-Diabetic Family Weekly Food System

---

## Important framing before the hypothesis

Your revenue model has two customers: the grocery chain pays, the pre-diabetic shopper uses. That means "pricing" this week has two distinct questions that cannot be collapsed into one:

**Question A (testable this week):** Will Tere, Mary, and Grace actually use a ready-to-execute plan before their next grocery trip? This is the user adoption question — and the chain will only pay if the answer is yes.

**Question B (testable this week, after Question A):** If it weren't free from the store, what would they pay directly? This is the DTC price floor — the number that tells you whether your fallback model works if the chain deal falls through.

This test runs both in sequence. Question B is only asked after Question A has been answered behaviorally, because a stated price means nothing until the person has experienced the value.

---

## 1. Pricing Hypothesis

**User adoption hypothesis (the chain's investment thesis):**

"Tere, Mary, and Grace will open a ready-to-execute weekly meal plan and use it before their next grocery trip — buying at least three items from it they wouldn't have bought otherwise — because the problem they described is not a lack of information but a lack of a complete, ready-to-act output. A plan built around this week's sales at their actual store, with specific quantities and a grocery list, removes the decision they consistently fail to make at the store."

**Evidence behind it:**

The five-interview data set documents that every interviewee has tried some version of food planning — TikTok recipes, YouTube, a cookbook, a meal kit, a dedicated app — and abandoned all of it. But the failure mode documented most clearly is ingredient mismatch: Mary — "I think I have all the ingredients and then I'm always missing a couple of them." Tere — "They use ingredients I don't have." The plan they receive this week will be built around what is already affordable and available at their store that specific week, with a grocery list that closes the gap those sources always left open.

The test is directly challenging the most dangerous finding in the data set: Nelsy's mother gives her trusted, personalized, healthy recipes and she still doesn't cook them. If Tere, Mary, and Grace receive a complete plan and also don't act on it, the Nelsy problem applies to this product and pricing is irrelevant.

**DTC price floor hypothesis (the fallback):**

"After experiencing a plan that changed what they bought or cooked this week, Tere and Mary will state a willingness to pay at least $5/month — and Grace will state a number between $0 and $5/month constrained by her $60 grocery ceiling, not by skepticism about value."

**Evidence behind it:**

Mary overspends every grocery trip without a plan. A plan that demonstrably saves her $15–20 in a single week has an observable ROI she can name. Tere described weekly guilt about throwing food away — $10–15 in weekly waste is a cost she is already paying. Grace's constraint is not skepticism; it is a hard ceiling. The hypothesis is that after experiencing the value, Tere and Mary will articulate a price anchored to what they saved, not to what apps generically cost.

---

## 2. Test Method: Wizard of Oz

**Why this method and not the others:**

- **Smoke test (landing page with price):** Tests whether someone will click a button. Does not test whether they will use the thing or change behavior. Premature for a product with zero users and an abandonment problem confirmed across five interviews.
- **Direct ask (show price in interview):** Gets a stated preference in the abstract. "I'd probably pay $8" means nothing from someone who abandoned a free app. Asking about price before they've experienced value produces the wrong answer for the wrong reason.
- **Pre-sale:** Requires a landing page, a product description, and a payment link. Too much infrastructure for this week. Also tests purchase intent, not use behavior.
- **Wizard of Oz:** You manually build and deliver the output the product would generate. They experience the real value at full fidelity. Then you ask about price. Behavioral evidence before stated preference. This is the right sequencing.

**What makes this Wizard of Oz and not just texting recipes:**

The plan must include:
1. Meals built around what is on sale at their actual store this specific week — not generic recipes
2. Specific quantities calibrated to their household size and the recipe count
3. A total estimated grocery cost that fits their budget
4. Meals sequenced by perishability (most perishable ingredient used on Monday, sturdier items later in the week)
5. A grocery list formatted as a checklist, not a paragraph

This is the exact output the product would generate. If it works at this fidelity, that validates the product concept. If it doesn't work even done manually, the product has a deeper problem.

---

## 3. Step-by-Step Plan

### Who to contact and who to skip

**Include:**
- **Tere** — Pre-diabetic, confirmed target customer. Kids who won't eat certain foods is the hardest constraint. If the plan works for her household, it works for the most constrained version of the customer.
- **Mary** — Pre-diabetic, shops Sunday, overspends without a plan. Clean test of whether a plan changes her cart. She mentioned Publix by name.
- **Grace** — $60 hard budget ceiling. Best test of budget adherence. If the plan keeps her at $60 and adds blood-sugar-safer options, that is the value proposition in one week.

**Do not include:**
- **Veronica** — Does not like vegetables. A plan built around vegetables will fail for reasons that have nothing to do with pricing or the product.
- **Nelsy** — High blood pressure, not pre-diabetic. Different dietary logic. Her data is already the cautionary case (trusted advice that doesn't convert). She is not the target customer for this test.

---

### Day-by-Day Schedule

**Monday, June 22 — Contact and confirm**

Send one message to each of Tere, Mary, and Grace. Use whatever channel you normally use with them — text, WhatsApp, iMessage. Do not call. A short message they can respond to in 10 seconds gets a faster yes than a long explanation.

Suggested message (adjust for how you talk to each of them):

> "Hey! I'm working on my class project this week and want to test something quick with you. I'm going to build you a real meal plan for the week — based on what's actually on sale at [their store] right now and your budget. Takes you zero effort. Can I send it to you before your next grocery trip? Just want to know if it's actually useful."

Do not explain the full venture. Do not say "I'm testing whether people will pay for this." Just get permission to send the plan.

You need their confirmation before you build the plans — building three full plans without confirming they're reachable this week wastes 3 hours.

---

**Monday, June 22 — Build the plans (after confirmations)**

Go to publix.com/weekly-ad (or the weekly circular for the store they use — Publix was mentioned by Mary; confirm with Tere and Grace if they use a different store).

The current Publix weekly circular runs Thursday–Wednesday. As of this week, pull the current circular and identify:
- 5–8 proteins on sale (chicken, fish, lean beef, eggs, canned beans)
- 4–6 produce items on sale or currently inexpensive
- Any whole-grain staples (brown rice, oats, whole wheat bread if relevant)

Build one plan per person. Each plan has three sections:

**Section 1: The week's dinners (7 meals)**
Format: Day → Meal name → 3-line description (main protein, main vegetable, preparation method). Keep it to what they can make in under 30 minutes. No exotic ingredients. No more than one new technique per plan.

For Tere specifically: at least 4 of the 7 dinners must be things children will eat. The plan cannot be rice every night — but it also cannot be quinoa-and-spinach dishes her kids will refuse. Think: chicken tacos with lettuce instead of flour tortillas, stir-fry with rice but smaller portion supplemented by extra vegetables, bean-and-vegetable soup that kids accept. The blood-sugar improvement needs to come from adding vegetables and reducing portion size on the rice, not from eliminating what the kids will eat entirely.

For Grace specifically: show the budget math. Write the estimated total at the top — "Estimated total this week at Publix: approximately $57." If you can get it under $60 with blood-sugar-safer substitutions than her current ramen-and-frozen-meal baseline, that is the whole value proposition in one line.

For Mary specifically: include one brief correction on oatmeal. She said she eats it because it's "healthy" but isn't sure about the sugar. Old-fashioned rolled oats (not instant) are a reasonable breakfast for pre-diabetic adults. One sentence, not a lecture: "Old-fashioned oats (not the instant packets) are fine for blood sugar — the fiber slows down absorption. Instant oatmeal with added sugar is the one to avoid." Do not turn the plan into a nutrition class. One corrective note, nothing more.

**Section 2: The grocery list**
A checklist organized by store section (produce, meat, dairy, pantry). Exact quantities. Not "chicken" — "2 lbs boneless chicken breast (on sale this week at Publix, approximately $X/lb)." Not "spinach" — "one 5-oz bag baby spinach."

**Section 3: One note about the sequence**
One sentence explaining why you put things in this order: "I put the fish on Monday and the chicken on Thursday because fish goes bad faster — this way nothing sits in your fridge too long."

Time per plan: 30–45 minutes if you pull the circular first, then build. Do not build all three from scratch — find a base plan that works for all three and customize the constraints (family size, budget, specific foods to avoid, kids' preferences) for each person.

---

**Tuesday, June 23 — Send the plans**

Send each plan as a plain text message or simple photo. Not a PDF. Not a shared Google Doc. A format they can open in one tap without creating an account.

Message when sending:

> "Here's your plan! I built it around what's on sale at Publix this week and it should come in around [$X]. I added a grocery list at the bottom so you don't have to think about quantities. Two things I'd love to know after your trip: did you use it, and did anything not work? That's it."

Do not send it the morning of their grocery trip — they need it at least one day in advance so they can glance at it before leaving for the store. Mary shops Sunday; if you're running this the week of June 22, she may have already shopped. Confirm her next trip day before sending.

**If any of the three shops on Tuesday:** send Monday evening.
**If they shop Wednesday or later:** send Tuesday morning.

---

**Thursday or Friday, June 25–26 — Follow-up conversation**

Wait until after their grocery trip. Do not message them the morning of — they are managing their lives.

Send a follow-up message, not a formal interview request:

> "Hey! How did it go? Did you use the plan at all?"

Let them respond naturally. Then ask three follow-up questions, one at a time, not as a list:

**Question 1 (behavioral):** "What did you actually end up buying / making this week?"

Wait for their answer. You want to know: did the plan change anything, or did they buy the same cart they always buy?

**Question 2 (friction):** "Was there anything in the plan you couldn't use or decided to skip?"

This catches palatability problems (Tere's kids), budget problems (Grace), or complexity problems (Mary abandoned a cookbook for being too complicated).

**Question 3 (adoption channel):** "If your grocery store built something like this into their app and sent it to you automatically before every trip — free, already knowing your budget — would you use it every week?"

Wait for their answer. Then: "What would have to be true for you to still be using it three months from now?"

This is the retention question. The financial model shows the model breaks if churn follows the interview pattern. This answer tells you whether grocery-embedded delivery changes the retention logic.

**Question 4 (price — only ask after questions 1–3, only if they used the plan):**

> "Separate question: if this wasn't free from the store — if it was its own app and you had to pay for it directly — knowing what it did for you this week, what would feel like a fair monthly price?"

Do not anchor them with a number first. Do not say "would you pay $5?" Let them name a number unprompted. If they say "I don't know," try: "What's the most you'd pay before you'd just skip it?"

If they didn't use the plan (didn't open it or bought the same cart): skip Question 4. A price answer from someone who didn't use the product is noise, not signal.

---

## 4. Yes Signal vs. No Signal

### Yes signals

**Behavioral (strong evidence):**
- They report opening the plan before their grocery trip, not after
- Their cart or receipt includes at least three items from the planned meals that weren't in their normal cart
- They cooked at least two of the planned dinners before the follow-up
- Unprompted: "Can you send me one next week?" — this is pull, not push. It is the strongest signal in the test.

**Adoption channel (supports the grocery chain model):**
- "Yes, I'd use it if the store sent it" — without hesitation or conditions
- "I'd use it if it remembered what I normally buy" — openness with one specific condition

**Price (supports the DTC fallback):**
- Tere or Mary name a number ≥ $5/month unprompted
- Grace names any number — even $2–3 — because her constraint is the grocery ceiling, not the value signal
- Any interviewee connects the price to what they saved: "I'd pay $X because I probably saved about $Y this week"

### No signals

**Behavioral (the Nelsy problem):**
- They opened it but bought the same things they always buy
- They found it "helpful" but changed nothing — this is the most dangerous no signal because it sounds positive
- They didn't look at it before the trip ("Oh I was going to but then forgot")
- They looked at it after the trip

**The specific no that breaks the venture:**
> "I looked at it. It was really good. I just didn't get around to using it."

That sentence is Nelsy's mother's recipes. It means trusted, complete, personalized information still does not bridge to action. If all three say a version of this, the product has the Nelsy problem and pricing is the wrong thing to test.

**Price (weak signal):**
- "I wouldn't pay anything — I thought it would just be free"
- A number below $3/month from Tere or Mary (not Grace — her constraint is real, not a value judgment)
- "Maybe like $1 a month?" — this is not anchoring on value, it is anchoring on what apps cost

---

## 5. What to Do If the Test Fails

### Failure Mode A: No one uses the plan (the Nelsy problem)

**What it means:** The output doesn't bridge to action even when it's free, complete, personalized, and delivered before the decision point. The problem is not the information — it is the implementation gap between receiving a plan and doing the grocery trip. This is confirmed by the Nelsy data point and now confirmed by two additional people. The product as currently conceived cannot solve it through better planning alone.

**Plan B:** Shift the intervention point from before the trip to during it.

The grocery chain model has a version of this that works: a tool embedded in the store's app that activates when the shopper arrives at the store — not a plan sent Sunday night but a notification that appears in the parking lot. "Here's what to grab this week, in order of the store layout, based on what's on sale right now." The grocery chain has location data and app infrastructure to do this; a standalone product does not. This failure mode actually strengthens the argument for the grocery chain partnership over DTC and changes which feature of the chain's platform matters most: not the loyalty email list, but the in-store app experience.

### Failure Mode B: The plan is used but only partially (1 of 3 interviewees)

**What it means:** The product works for some customers but not all three of your target profiles. This is a targeting finding, not a product failure.

**Plan B:** Do a deeper follow-up specifically with the person who used it. Find out what made them different. Was it the format? Their specific failure mode (ingredient mismatch vs. exhaustion vs. forgetting)? Their household structure? Use that profile to narrow the target customer from "pre-diabetic family managers" to the specific sub-profile that converts.

The interviewee most likely to use the plan, based on their stated failure mode, is Mary: she failed because of ingredient mismatch and overspending, and this test directly closes both gaps. If only one person uses it, and it's Mary, that is a meaningful data point about which customer the product actually serves.

### Failure Mode C: Plan is used but price signals are weak (< $3/month stated)

**What it means:** The user sees value but does not see it as something they should pay for. They want it free. This is consistent with a customer segment that has abandoned paid tools and expects food content to be free (YouTube, TikTok, Pinterest — all free, all used, all abandoned).

**Plan B:** This failure confirms the grocery chain model rather than refuting it. The user will not pay; the chain will. The test has validated that the product delivers value (they used the plan). The revenue capture needs to happen at the B2B level, not the consumer level. This is not a bad outcome — it is validation that the revenue model you chose in Step 2 is the right one.

Do not pivot to DTC in this scenario. Pivot energy toward the chain-side of the pricing test instead (see below).

### Failure Mode D: Tere's kids won't eat the plan

**What it means:** The household compatibility problem documented in the interviews is real and is not solved by better planning alone. The plan for a pre-diabetic adult needs to be a plan for a family, and the family's preferences override the adult's health needs when she is exhausted.

**Plan B:** The next plan for Tere specifically needs to be built around what the kids already eat, modified for blood sugar impact — not a replacement plan, but a modification plan. Beans and rice can stay; reduce the white rice portion and add a vegetable the kids will tolerate. Chicken can stay; change the preparation to reduce sodium and increase fiber on the side. The product framing shifts from "here's a better meal plan" to "here's how to make your current meals safer for your blood sugar without replacing them." This is a different value proposition than the one currently in the business model canvas.

---

## The Chain-Side Pricing Test (Parallel Track This Week)

You cannot test what a grocery chain will pay by talking to Tere, Mary, and Grace. But you can start the chain-side test this week in parallel.

**Monday, June 22:**
Go to LinkedIn and search: "Publix" + "shopper engagement" OR "loyalty" OR "health and wellness" OR "digital marketing." You are looking for one person whose job involves how Publix reaches and retains shoppers. A manager of loyalty programs, a director of shopper health initiatives, or a digital marketing lead.

Alternatively, search for "Southeastern Grocers" (operates Winn-Dixie, Harveys, Fresco y Más in Florida) or "Sedano's" (Hispanic-owned chain in South Florida — potential cultural fit with your customer profile).

**One LinkedIn message or email this week:**

> "Hi [Name], I'm a student at Rollins College building a food planning tool for pre-diabetic shoppers, designed to increase basket size and weekly loyalty by helping them plan meals around a store's current sales circular. I'd love 15 minutes to learn how [chain] thinks about shopper health programs and whether what I'm building might fit. Would you be open to a quick call?"

Do not send a deck. Do not explain unit economics. The goal of this message is one response. If you get a meeting, the chain-side pricing test happens in that meeting — you ask what they currently pay for comparable loyalty or engagement tools, and you listen.

**Why this week:** The financial model shows the base scenario does not break even within 6 months. The chain deal timeline is the single largest lever in the first six months. Starting the outreach this week instead of next month is the difference between a Month 3 deal close and a Month 4 or 5 deal close — and in the financial model, that difference is $4,500 in fixed costs per month with no revenue.

---

## What This Test Measures vs. What It Does Not

**Measures:**
- Whether a ready-to-execute plan changes grocery behavior in the same week
- Whether the product's core claim (complete output bridges to action) is true or is another version of the Nelsy problem
- A price floor for the DTC fallback model
- Whether household compatibility (Tere's kids) is a solvable design problem or a fundamental constraint

**Does not measure:**
- Whether a grocery chain will pay $5/user/month — that requires a chain conversation
- Retention at 6 months — one grocery trip is one data point
- Whether the tool works for customers who didn't participate in your original interviews
- Whether AI-generated plans are trusted differently than manually built ones — this test uses Wizard of Oz (manual), not AI output

The single most important thing this test can tell you: whether the behavioral gap documented in the Nelsy finding applies to your primary interviewees or whether a complete, immediate, store-specific plan is different enough to close it. Everything else is secondary.
