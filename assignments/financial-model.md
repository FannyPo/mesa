# Financial Model: Grocery Chain Partnership — 6-Month Projection
**BUS 395 — Venture Creation with AI | Rollins College**
**Student:** Fanny Polanco
**Date:** June 2026
**Venture:** Pre-Diabetic Family Weekly Food System

---

## How to read this model

Numbers labeled **[DATA]** come from published sources or prior validated analysis. Numbers labeled **[ASSUMPTION]** are reasoned estimates without direct validation.

Costs are drawn from the revised unit economics (unit-economics.md):
- Variable cost: $0.60/active user/month (AI inference + hosting + customer support)
- Fixed cost: $4,500/month (clinical advisor $3,000 + hosting base $200 + insurance $600 + data integration $400 + compliance $200 + QA $100)
- These are held constant across all three scenarios. The scenarios differ entirely by revenue assumptions.

Month 1 shows $0 revenue in every scenario. Even the most favorable B2B deal requires time to negotiate, get legal review, and sign — no revenue begins before Month 2 at the earliest.

---

## Scenario Assumptions

Each scenario is defined by five assumptions that reflect genuinely different realities, not just different volumes.

| Assumption | Pessimistic | Base | Optimistic |
|---|---|---|---|
| **Deal close** | Month 4 — no internal champion; procurement stalls | Month 3 — standard B2B pilot timeline | Month 2 — warm intro; chain already has a wellness initiative |
| **Chain behavior** | Background feature — one system notification, no campaign | Limited promotion — one loyalty email + one in-app push | Active campaign — email series, in-store signage, QR codes at checkout |
| **User activation** | 0.5% of 50K loyalty base = 250 max users | 1.5% of 50K loyalty base = 750 max users | 2.5% of 50K loyalty base = 1,250 users over 3 months |
| **Monthly churn** | 40% — mirrors the interview abandonment pattern (every prior tool was abandoned within months) | 20% — better than interview pattern; grocery context creates weekly touchpoint a standalone app does not | 15% — grocery habit formation holds; word of mouth adds users monthly |
| **Chain rate** | $2/user — treated as a loyalty checkbox, not a health program | $5/user — health-adjacent engagement feature pricing | $7/user — positioned as a wellness differentiator after pilot shows basket lift data |

**The churn assumptions are directly connected to your interview data.** All five interviewees abandoned every tool they tried — apps, meal kits, cookbooks, content. The pessimistic scenario says that pattern holds in this context too. The base and optimistic scenarios argue that embedding the tool in the weekly grocery trip — something the customer does anyway — changes the engagement dynamic. That argument is plausible but unproven. It is the most important behavioral assumption in the model.

---

## Pessimistic Scenario

**What this scenario says:** The chain signs the deal late, treats it as a background feature with no active promotion, and pays the minimum. Users activate at a low rate and churn quickly — the same way they abandoned every other tool in the interview data set.

**Cash required before first dollar of revenue: $13,500** (three months of fixed costs at $4,500/month)

| Month | Active Users | Revenue | Variable Cost | Fixed Cost | Net | Cumulative |
|---|---|---|---|---|---|---|
| 1 | 0 | $0 | $0 | $4,500 | ($4,500) | ($4,500) |
| 2 | 0 | $0 | $0 | $4,500 | ($4,500) | ($9,000) |
| 3 | 0 | $0 | $0 | $4,500 | ($4,500) | ($13,500) |
| 4 | 200 | $400 | $120 | $4,500 | ($4,220) | ($17,720) |
| 5 | 150 | $300 | $90 | $4,500 | ($4,290) | ($22,010) |
| 6 | 90 | $180 | $54 | $4,500 | ($4,374) | ($26,384) |
| **6-Month Total** | | **$880** | **$264** | **$27,000** | **($26,384)** | |

**What to notice:** Revenue in Month 6 ($180) covers only 4% of that month's fixed costs. The model is not approaching break-even — it is moving away from it, because 40% monthly churn means the user base is shrinking, not growing. By Month 6, only 36% of the users who activated in Month 4 are still using the tool.

---

## Base Scenario

**What this scenario says:** The chain closes on a reasonable timeline, sends a modest promotional push to its loyalty list, and pays a mid-range per-user fee. Users retain better than the interview pattern predicts, because the tool is embedded in the grocery context they already navigate weekly — not sitting in an app drawer.

**Cash required before first dollar of revenue: $9,000** (two months of fixed costs)

| Month | Active Users | Revenue | Variable Cost | Fixed Cost | Net | Cumulative |
|---|---|---|---|---|---|---|
| 1 | 0 | $0 | $0 | $4,500 | ($4,500) | ($4,500) |
| 2 | 0 | $0 | $0 | $4,500 | ($4,500) | ($9,000) |
| 3 | 350 | $1,750 | $210 | $4,500 | ($2,960) | ($11,960) |
| 4 | 600 | $3,000 | $360 | $4,500 | ($1,860) | ($13,820) |
| 5 | 700 | $3,500 | $420 | $4,500 | ($1,420) | ($15,240) |
| 6 | 720 | $3,600 | $432 | $4,500 | ($1,332) | ($16,572) |
| **6-Month Total** | | **$11,850** | **$1,422** | **$27,000** | **($16,572)** | |

**What to notice:** The model is improving month over month — losses are shrinking from ($4,500) to ($1,332). But the base scenario does not reach break-even within 6 months. Break-even at $5/user requires 1,023 active users. The base scenario peaks at 720. The model is viable on a longer timeline; it is not self-funding within 6 months.

---

## Optimistic Scenario

**What this scenario says:** A warm intro accelerates the deal. The chain runs a genuine wellness campaign and sees early basket size data that confirms the tool's value to them. Users form a weekly grocery habit around the tool and churn at a lower rate than any standalone app would produce.

**Cash required before first dollar of revenue: $4,500** (one month of fixed costs)

| Month | Active Users | Revenue | Variable Cost | Fixed Cost | Net | Cumulative |
|---|---|---|---|---|---|---|
| 1 | 0 | $0 | $0 | $4,500 | ($4,500) | ($4,500) |
| 2 | 500 | $3,500 | $300 | $4,500 | ($1,300) | ($5,800) |
| 3 | 900 | $6,300 | $540 | $4,500 | $1,260 | ($4,540) |
| 4 | 1,050 | $7,350 | $630 | $4,500 | $2,220 | ($2,320) |
| 5 | 1,150 | $8,050 | $690 | $4,500 | $2,860 | $540 |
| 6 | 1,250 | $8,750 | $750 | $4,500 | $3,500 | $4,040 |
| **6-Month Total** | | **$33,950** | **$2,910** | **$27,000** | **$4,040** | |

**What to notice:** The model turns monthly profitable in Month 3 and cumulative profitable in Month 5. Break-even at $7/user requires 703 active users; the optimistic scenario crosses that threshold in Month 3. However, every assumption in this scenario is favorable simultaneously — warm intro, active campaign, strong retention, premium rate. The probability that all five assumptions land at their best case is low. This scenario describes what's possible, not what's likely.

---

## 6-Month Summary

| | Pessimistic | Base | Optimistic |
|---|---|---|---|
| Total revenue | $880 | $11,850 | $33,950 |
| Total variable cost | $264 | $1,422 | $2,910 |
| Total fixed cost | $27,000 | $27,000 | $27,000 |
| **6-month net** | **($26,384)** | **($16,572)** | **$4,040** |
| First profitable month | Never | Never (in range) | Month 3 |
| Month 6 active users | 90 | 720 | 1,250 |
| Month 6 net | ($4,374) | ($1,332) | $3,500 |
| Cash needed upfront | $13,500 | $9,000 | $4,500 |

The spread between pessimistic and optimistic over 6 months is $30,424. Fixed costs are identical across all three scenarios ($27,000). The entire difference is revenue — driven by the combination of when the deal closes, what the chain pays, and how well users retain.

---

## The Single Variable That Swings the Model Most

**Within the 6-month window: when the deal closes.**

Every month without a signed chain deal costs $4,500 in fixed costs against $0 revenue. In the pessimistic scenario, $13,500 of the $26,384 total loss — 51% — comes from three months of pre-revenue fixed costs before the first user ever activates. Moving the deal close from Month 4 to Month 2 would reduce total losses by $9,000 without changing a single assumption about users, churn, or rate. That is the single largest lever available in the first 6 months.

**For long-term viability beyond 6 months: the chain rate.**

At $2/user, break-even requires 3,214 active users. A regional chain pilot with 50,000 loyalty members and 0.5% activation produces 250 users. Even with zero churn, 250 users at $2/user generates $500/month against $4,500/month in fixed costs. The model loses $4,000/month indefinitely. It cannot recover. Adding more chains at $2/user does not solve the problem — it creates the same deficit at every chain.

At $5/user, break-even requires 1,023 users. That is achievable with 2% activation of one regional chain and requires the chain to actively promote the tool, but it is within reach.

**The chain rate is therefore binary, not continuous.** Below approximately $4/user, the model cannot sustain itself at realistic user counts from a single regional deal. Above $4/user, it can — given enough time and activation. The negotiation floor with any grocery chain partner is not a preference; it is a mathematical requirement.

---

## What Breaks the Model

There are two failure conditions that are individually survivable but terminal when they occur together.

**Failure condition 1: Chain pays $2/user and does not actively promote.**
Low rate and low activation reinforce each other. At $2/user with 0.5% activation (250 users), monthly revenue peaks at $500. Fixed costs are $4,500. The monthly deficit is $4,000 regardless of how long the tool runs. This is not a cash flow problem that resolves over time — it is a structural problem that requires either renegotiating the rate or ending the partnership.

**Failure condition 2: Churn follows the interview-pattern rate (40%+/month).**
At 40% monthly churn, a user cohort of 1,000 people looks like this:
- Month 1: 1,000 users
- Month 2: 600 users
- Month 3: 360 users
- Month 4: 216 users
- Month 5: 130 users
- Month 6: 78 users

Even at $5/user, 78 users generates $390/month in revenue against $4,500/month in fixed costs. High churn means you are constantly re-acquiring users to maintain any revenue level — and in the grocery chain model, you are dependent on the chain to re-activate users because you have no direct acquisition channel of your own.

**The combination that is terminal:** $2/user AND 40% monthly churn AND deal closes in Month 4 or later. Under these three conditions simultaneously: $13,500 in pre-revenue losses, a peak user count that generates $500/month in revenue, and a user base that shrinks by 40% every month. There is no path to recovery in this scenario without renegotiating the partnership from scratch.

**The one number that reveals which failure mode you're in:** Month 5 active users compared to Month 4. If Month 5 is lower than Month 4, churn is outpacing activation and you are in failure condition 2. If Month 5 is lower AND the chain is not planning a second promotional push, both failure conditions are active simultaneously. That is the signal to renegotiate or exit the partnership before accumulating further losses.

---

## What This Model Does Not Include

- **Founder time valued at $0.** The model assigns no cost to the 22–34 hours/month of founder time required to run the product (product iteration, data integration, account management, support). At a future market rate of $50–75/hour, founder time adds $1,100–$2,550/month to every row. Including it makes the base scenario cumulative losses reach ($31,000–$42,000) at Month 6.
- **Second chain deal.** All scenarios assume one chain partnership. A second chain deal, signed in Month 4–5 of the first, would compound revenue but also compound fixed costs (an additional data integration pipeline per chain). Not modeled here.
- **Product development costs.** Building the MVP and integration is not included; this model covers operating economics only.
