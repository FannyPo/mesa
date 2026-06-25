# Venture Direction Decision
BUS 395 | Fanny Polanco | Summer 2026
Informed by: 5 customer discovery interviews, competitive analysis, systems analysis, assumption scorecard

---

## Refined Problem Statement

Pre-diabetic adults managing work, school, and family caregiving have enough awareness that certain foods worsen their condition but no practical system to act on that awareness consistently. Every week they buy produce with good intentions that spoils before it is used, shop without a list, spend more than they planned, and default to meals the family will accept rather than meals safe for their blood sugar. The barrier is not motivation — every interviewee demonstrated intent. It is the absence of a system that connects grocery budget, weekly schedule, family food preferences, and blood sugar logic into something repeatable that does not require starting from scratch each week.

**What changed from the original:** The original statement said "the problem is not a lack of nutritional knowledge." That claim is not supported by the interview data. Mary did not know whether oatmeal was safe for her blood sugar. Grace knew ramen was bad and could not apply the same logic to bread and rice bought on the same trip. The knowledge gap is real and coexists with the system gap. The refined statement acknowledges both without making the product responsible for fixing both.

---

## Target Customer

A pre-diabetic adult, 35 or older, who has been told by a doctor they are pre-diabetic or at high risk of Type 2 diabetes. They work full time, are a primary caregiver for a family, and operate on a grocery budget tight enough that $60 is a ceiling, not a preference. They know one or two foods that affect blood sugar — rice, ramen, "carbs" — but cannot apply that logic consistently across unfamiliar situations or their own weekly habits. They have tried at least one structured resource: an app, a cookbook, a meal kit, or diet content on social media. They stopped using it. They are not looking for more information. They are looking for something that works on a Tuesday night when they are exhausted.

This customer is Tere, Grace, and Mary from the interview set. It is not Nelsy, whose condition is high blood pressure and whose dietary framework is sodium, not blood sugar. It is not Veronica, who has no blood sugar framework and who stated directly that she does not like vegetables — a behavioral starting point the product cannot solve.

**Evidence floor:** Three interviews. That is a small sample. The profile is directionally consistent but not statistically validated. The description above reflects what Tere, Grace, and Mary shared in common, not a proven segment.

---

## What I Am Building and Why

An AI-powered weekly food system that generates blood-sugar-safe meal plans built around a family's real grocery budget, that week's available ingredients, and the family's weekly schedule. The core logic is ingredient-first: plan three meals around one bag of green beans before buying it, not after. This breaks the waste loop at the source. Built-in variety — same ingredient, different preparation across the week — prevents the fatigue that drives abandonment.

**Why this and not something else:**

The inspiration-to-execution gap was confirmed across all five interviews without exception. Tere watches YouTube recipes that use ingredients she does not have. Mary sees TikTok recipes and is always missing a couple of ingredients. Grace batch-cooks vegetables and they get soggy by day three. Veronica saves Pinterest recipes she never makes. The content, the ideas, and the information exist. The bridge to a real meal on a real night does not. That gap is what this system closes.

The competitive research confirmed there is no direct-to-consumer product built specifically for this customer. PlateJoy came closest and failed — not because the need was wrong but because it routed through insurance reimbursement, which made it inaccessible to the exact customer who needed it and created a revenue structure dependent on behavior it could not control. Every other tool either targets clinical channels or applies a diabetes-friendly label to a general wellness product.

The technology argument is real but should be stated carefully: AI can now reason across budget, perishability, schedule, and blood sugar constraints simultaneously in a way that was not practical before. That is the reason the gap still exists and the reason it can be closed now. It is not a sufficient reason on its own — the product still has to be trusted, affordable, and low-friction enough to use.

**One design constraint the interviews added:** Recommendations need to surface their reasoning in brief, legible terms. Because the target customer has partial blood sugar knowledge, not zero, they will spot-check the plan against what they already believe. If the system puts oatmeal on Tuesday and the customer is not sure oatmeal is safe, she needs enough context to understand why — not a nutrition course, but one line. If she cannot evaluate the output at all, she will either override it when it conflicts with her intuitions or follow it blindly. Both create problems.

---

## What Changed from My Original Thinking and Why

**The market is not saturated.**
The original assumption was that the pre-diabetic tool space would be crowded. The competitive research disproved this completely. At the direct-to-consumer level, the space is almost entirely empty. PlateJoy validated the need and failed reaching it. Every other tool targets institutions or labels itself broadly. The absence of competition is not an open lane — it is a signal that serving this customer well is harder than it looks — but the saturation assumption was wrong.

**Pricing is not a differentiator. It is a gate.**
The original framing treated pricing as something to decide after the product was built. Three of five interviewees surfaced cost as a direct constraint on their food decisions. Nelsy canceled a meal kit because it was too expensive. Grace shops on a hard $60 budget. Mary overspends without a plan. The competitive analysis confirmed that subscription pricing at $5–15 per month is a structural barrier for this customer before any grocery or delivery cost is added. Pricing must be a design constraint from the start, not a positioning decision made later. The business model — who actually pays — is unresolved and is a real problem.

**The knowledge gap is real.**
The original problem statement said the problem was not a lack of nutritional knowledge. The interviews do not support that claim. Two interviewees can name one bad food each. Neither can apply the logic consistently. One does not know whether a common breakfast food is safe for her condition. The system gap is primary. The knowledge gap is secondary. But secondary does not mean absent, and the product needs to account for it.

**The target customer is narrower than the original framing.**
Five interviews were conducted. Two are outside or on the edge of the target: Nelsy is not pre-diabetic, and Veronica has no blood sugar awareness and dislikes vegetables. The actual evidence base for the target profile is three interviews. That is honest, and it means the next round of interviews must deliberately recruit people who match the refined profile — diagnosed pre-diabetic, working, caregiving, budget-constrained — rather than adjacent contacts.

---

## Biggest Remaining Risk

**Whether the target customer will trust an AI system to make food decisions for a medically sensitive condition.**

This was flagged as a critical open question in the competitive analysis. It was not tested in any of the five interviews. No interviewee was asked about AI directly.

What the interviews do show is that trust in digital tools is low across the board. Every tool tried was abandoned. The one interviewee who named a trusted source named her mother. Grace found a diabetes app that felt irrelevant to her demographically. Veronica found a free app felt like homework. The baseline is skepticism toward apps, not openness.

Whether AI specifically changes that calculus — because it is more personalized, because it adapts, because it does not feel generic — or makes it worse — because it is opaque, because it is making health recommendations, because it is not a person — is unknown.

This risk is the highest priority for the next round of interviews because the entire product depends on it. A system the customer does not trust will not be followed, and a plan not followed does not solve the problem regardless of how technically correct it is.

**Validation plan:**
Bring this question directly to the next interviews. The specific question from the Week 3 competitive analysis: "If someone handed you a complete weekly plan tonight — groceries listed, quantities right, fits your budget and schedule — what would have to be true for you to actually follow it?" Follow with: "If that plan was built by an AI that learned your budget, your schedule, and what is safe for your blood sugar, what changes about your answer?"

The goal is not to pitch the product. It is to let the interviewee describe the conditions under which trust becomes possible — or to learn that no conditions exist for this customer, which is equally important to know before building.

**Secondary risks not yet addressed:**
- Willingness to pay: no interviewee was asked directly what they would pay. Budget constraints are confirmed but a specific price point is not.
- Family food preferences as a constraint: Tere eats rice every night because the kids will eat it. The system has to work for a household, not just an individual managing blood sugar. This was surfaced once and not probed.
- Whether three confirming interviews are enough to build on: they are enough to continue. They are not enough to stop testing.
