# Unit Economics: Grocery Chain Partnership Revenue Model
**BUS 395 — Venture Creation with AI | Rollins College**
**Student:** Fanny Polanco
**Date:** June 2026
**Venture:** Pre-Diabetic Family Weekly Food System

---

## How to read this document

Every number is labeled:

- **[DATA]** — grounded in interview evidence, published competitive research, or public API/market pricing
- **[ASSUMPTION]** — a reasoned estimate with no direct validation; must be tested before this model can be treated as real

A unit economics model built on unvalidated assumptions is a hypothesis, not a plan. This document identifies exactly which assumptions need to be tested and in what order.

**Version note:** The first version of this model produced a 95% gross margin. The professor flagged that margins above 80% signal missing costs. This version corrects three undercounting errors and adds five cost categories that were missing entirely. The revised gross margin is 64%. The revised break-even is 1,071 active users, not 264.

---

## Who pays whom in this model

The grocery chain pays a licensing fee. The end user (pre-diabetic shopper) pays nothing.

```
[Pre-Diabetic Shopper] ──uses──▶ [Weekly Food System]
                                         │
                                    generates
                                         │
                                         ▼
[Grocery Chain] ──pays licensing fee──▶ [You]
```

This means there are two "customers" with different economics:
- The **end user** is the person whose behavior is changed. She is not the payer.
- The **grocery chain** is the paying customer. Its willingness to pay, and the contract size, determine whether the model works.

The unit economics below are calculated per end user (the atomic unit of value delivered), then rolled up to what the chain must pay for the model to be viable.

---

## 1. Revenue Per Customer

### What the chain pays — the key unknown

No grocery chain has been approached. No licensing fee has been quoted or negotiated. Every number in this section is an assumption derived from comparable B2B shopper engagement programs.

**Comparable benchmarks:**
- Grocery loyalty program technology (Yotpo, LoyaltyLion tier for retailers): $3–15/active member/month **[ASSUMPTION — comparable market rates, not quotes]**
- PlateJoy's institutional pricing for health plans: $30–50/member/month **[DATA — documented in competitive research]**. This is a healthcare channel with clinical compliance requirements; a grocery channel would price lower.
- Digital circular/engagement apps (Flipp, Flashfood): retailer fees are not publicly disclosed **[DATA — confirmed absence of public pricing]**

**Working estimate: $5.00/active user/month** **[ASSUMPTION]**

Rationale: Below the $30–50 PlateJoy charged healthcare payers (no HIPAA burden, lower clinical stakes), above the $1–2 range of basic loyalty punch-card tech. The $5 figure is not supported by a real quote. It is a testable hypothesis.

**Range to stress-test:**

| Scenario | Chain Pays | Notes |
|---|---|---|
| Low | $2/user/month | Treated as a loyalty feature, not a health program |
| Base | $5/user/month | Working estimate |
| High | $10/user/month | Positioned as a diabetes prevention benefit |

### The chain's own ROI argument (why $5 might be low)

If the planning system drives a 10% basket size lift for a pre-diabetic shopper who currently spends $60/week on groceries **[DATA — Grace's stated grocery budget]**:
- Incremental revenue per user: $6/week × 52 weeks = $312/year
- At grocery industry gross margins of 25–30%: $78–94/year incremental gross profit per user **[ASSUMPTION — general industry range, not chain-specific]**
- At $5/user/month = $60/year, the chain's ROI is approximately 1.3:1 to 1.6:1

This math supports the chain's willingness to pay, but it rests on the basket size lift assumption, which has zero validation in this data set.

---

## 2. Cost to Serve One Customer Per Month

### What was wrong in the first version

The original model undercounted three costs and omitted five entirely.

**Undercounted:**
1. AI inference tokens — original estimate was 3× too low for a real personalized plan
2. Clinical advisor hours — 8 hours/month covers reviewing fewer than 1% of plans at scale; 20 hours is the minimum for an active, evolving health-adjacent product
3. Insurance — budgeted as a general business, not a product making dietary recommendations for people with a diagnosed medical condition

**Missing entirely:**
4. Data integration maintenance — the chain's circular data is not a clean structured feed; building and maintaining the weekly ingestion pipeline is real ongoing work
5. Customer support — even a low-friction product generates support contacts; this is not $0
6. Compliance tooling — CCPA and data privacy obligations apply to health-adjacent personal data
7. Cyber/data breach insurance — separate from E&O; required when handling health-adjacent user data
8. QA automation — automated validation that plans actually fit the budget and avoid flagged foods; a health-adjacent product cannot rely solely on spot-check review

---

### 2a. AI Inference Cost

**[DATA — calculated from published API pricing, revised token count]**

**Why the original estimate was wrong:** The original model assumed 3,000 input tokens and 1,500 output tokens. A real personalized weekly plan for this product requires:

| Input component | Tokens |
|---|---|
| System prompt: blood sugar rules, product instructions | ~2,000 |
| User profile: family size, food preferences, schedule | ~500 |
| Weekly budget constraint and pantry inventory | ~600 |
| Curated grocery circular excerpt (100 items at ~30 tokens each) | ~3,000 |
| Prior week's plan (to prevent repetition) | ~800 |
| **Total input per plan** | **~6,900 tokens** |

| Output component | Tokens |
|---|---|
| 21 meals (name + ingredients + quantities + blood sugar rationale) | ~1,800 |
| Grocery list with quantities and estimated prices | ~500 |
| Prep notes and perishability sequence | ~200 |
| **Total output per plan** | **~2,500 tokens** |

At Claude Sonnet pricing ($3.00/million input, $15.00/million output):
- Input cost: 6,900 / 1,000,000 × $3.00 = **$0.021 per plan**
- Output cost: 2,500 / 1,000,000 × $15.00 = **$0.038 per plan**
- Cost per plan: **$0.059**
- Cost per month (4 plans): **$0.234/user**

Users will also interact mid-week — swapping an ingredient, requesting an alternative meal, asking what to do with leftover produce. Conservative estimate: 4 interactions/month, averaging 2,000 input + 500 output tokens each:
- Monthly interaction cost: 4 × [(2,000 × $3/1M) + (500 × $15/1M)] = 4 × ($0.006 + $0.008) = **$0.054/user/month**

Subtotal before regeneration buffer: $0.234 + $0.054 = $0.288
With 20% buffer for errors, format failures, and re-generation: **$0.35/user/month**

*Original estimate: $0.17/user/month. Revised: $0.35/user/month. Difference: +$0.18.*

---

### 2b. Hosting and Infrastructure

**[ASSUMPTION — revised upward for health-adjacent data requirements]**

A product handling health-adjacent personal data (pre-diabetes status, family composition, dietary restrictions) cannot run on the lightest-tier cloud infrastructure. CCPA compliance and data security best practices require encrypted storage, access controls, and audit logging. This upgrades the base hosting tier.

- Fixed infrastructure base: **$200/month** (revised from $100; security-grade tier)
- Variable per-user cost (compute, storage): $0.10/user/month (unchanged)

Variable portion used in gross margin calculation: **$0.10/user/month**
Fixed base treated as a fixed cost: **$200/month** (see Section 4)

---

### 2c. Data Integration Maintenance

**[ASSUMPTION — new; was $0 in original]**

**Why it was missing:** The original model assumed the grocery chain supplies its circular data "as part of the partnership" at zero cost to you. This conflates two different things: the chain sharing data, and you being able to use it. Grocery circulars arrive as PDFs, proprietary formats, or flat files. Building and maintaining the weekly ingestion pipeline — parsing the circular, normalizing prices, matching SKUs to your ingredient database, handling format changes when the chain updates their systems — is real ongoing engineering work.

- Initial integration build: one-time cost, absorbed in founder time at $0 (but real hours)
- Ongoing monthly maintenance: 4–6 hours/month to handle format issues, new product categories, and data quality problems
- At $0 (founder time): invisible in the model
- At a future contractor rate of $75/hour: $300–450/month

**Fixed cost estimate: $400/month** **[ASSUMPTION]**

This cost exists regardless of how many users are active. It is a per-chain fixed cost.

---

### 2d. Clinical Advisor / Nutritional Validation

**[ASSUMPTION — revised upward significantly]**

**Why the original estimate was wrong:** The original model estimated 5–10 hours/month at $1,000/month. At 500 users generating 4 plans/month, the product produces 2,000 plans per month. At 8 hours of review time, the clinical advisor can spot-check approximately 16–24 plans — fewer than 1.5% of output. That is insufficient oversight for a product making dietary recommendations to people managing a diagnosed medical condition.

A realistic scope for an actively evolving product:

| Task | Hours/month |
|---|---|
| Spot-check plan sample (1.5% of plans at 500 users) | ~5 |
| Review prompt/logic changes when AI model updates | ~3 |
| Validate new food categories or seasonal changes | ~3 |
| Update glycemic logic when ADA guidelines change | ~2 |
| Review flagged user concerns or reported plan errors | ~3 |
| Quarterly deep audit of recommendation accuracy | ~4 amortized |
| **Total** | **~20 hours/month** |

At $150/hour (low end of published RD/CDE consulting range **[DATA]**):
**Fixed cost: $3,000/month** (revised from $1,000)

*Original estimate: $1,000/month. Revised: $3,000/month. Difference: +$2,000.*

---

### 2e. Insurance

**[ASSUMPTION — revised significantly upward; category expanded]**

**Why the original estimate was wrong:** The original model allocated $150/month for "legal/liability." That covers a basic business license, a template privacy policy review, and perhaps a contract template. It does not cover the insurance obligations triggered by a product that:
- Makes dietary recommendations for people managing a diagnosed medical condition
- Handles personal health-adjacent data (pre-diabetes status, family dietary restrictions)
- Could cause a blood sugar event if a recommendation is wrong

Three distinct insurance products are required:

| Coverage | Why required | Estimated monthly cost |
|---|---|---|
| E&O (Errors & Omissions) | Professional/technical liability for incorrect recommendations | $200/month |
| Product liability | If a user acts on a plan and experiences a health event | $150/month |
| Cyber/data breach | Health-adjacent personal data; CCPA obligations | $150/month |
| General business liability | Standard for any operating business | $100/month |
| **Total** | | **$600/month** |

These are startup-tier estimates for a company under $1M revenue. Rates are based on general market ranges for health-adjacent software companies; actual quotes will vary. **[ASSUMPTION — no insurance quotes obtained]**

*Original estimate: $150/month. Revised: $600/month. Difference: +$450.*

---

### 2f. Compliance Tooling

**[ASSUMPTION — new; was $0 in original]**

The product collects and stores: pre-diabetes or high-risk health status, family composition, dietary restrictions, grocery spending behavior, and weekly location-linked grocery data. Under CCPA (California Consumer Privacy Act), this triggers privacy obligations regardless of company size if any California residents use the product. Florida (where Rollins is based) is developing similar requirements.

| Cost | Monthly |
|---|---|
| Privacy policy and ToS legal maintenance (annual review amortized) | $100 |
| Compliance tooling (Osano, Termly, or similar — privacy consent management) | $100 |
| **Total** | **$200/month** |

**[ASSUMPTION — no vendor quotes obtained]**

---

### 2g. Customer Support

**[ASSUMPTION — new; was $0 in original]**

Even a pull-based, low-friction product generates support contacts. Users who cannot access their plan, receive a plan that conflicts with a specific allergy, or have a question about a recommendation will reach out. At 500 users, a conservative 3% monthly contact rate = 15 contacts/month. At 15 minutes each, fully founder-handled: 3.75 hours/month at $0. If contracted to a part-time assistant at $20/hour: ~$75/month.

For the model, this is treated as variable: **$0.15/user/month** — small per unit, but real.

**[ASSUMPTION]**

---

### 2h. QA Automation

**[ASSUMPTION — new; was $0 in original]**

The clinical advisor's spot-check review covers fewer than 2% of plans. The remaining 98% go to users with no human review. A health-adjacent product requires automated validation as a backstop:
- Budget validation: does the plan's ingredient list actually fit within the user's stated weekly budget?
- Flagged food check: does the plan avoid the user's known bad foods and dietary restrictions?
- Nutritional logic check: does each day's carbohydrate load stay within blood-sugar-safe parameters?

This is an engineering build (one-time, founder time) plus ongoing maintenance:

**Fixed cost: $100/month** for tooling and maintenance once built. **[ASSUMPTION]**

---

### 2i. Your Time

**$0.00/hour by assignment instruction.**

Real hours consumed per month (tracked, not valued):
- Product iteration and prompt engineering: 8–12 hours
- Data integration maintenance: 4–6 hours
- Account management (chain reporting, QA review): 5–8 hours
- Customer support: 3–5 hours
- Clinical advisor coordination: 2–3 hours
- **Estimated total: 22–34 hours/month**

At a future market rate of $50–75/hour, founder time represents $1,100–$2,550/month in uncompensated cost. This number needs to be part of any viability assessment when the founder has an opportunity cost.

---

## 3. Revised Cost Summary

### Variable costs per user per month

| Cost | Original | Revised | Label |
|---|---|---|---|
| AI inference (plan generation + interactions + buffer) | $0.17 | $0.35 | DATA (API pricing, revised tokens) |
| Hosting (variable compute per user) | $0.10 | $0.10 | ASSUMPTION |
| Customer support (~3% contact rate) | — | $0.15 | ASSUMPTION |
| **Total variable** | **$0.27** | **$0.60** | |

### Fixed costs per month

| Cost | Original | Revised | Label |
|---|---|---|---|
| Clinical advisor | $1,000 | $3,000 | ASSUMPTION |
| Hosting base (security-grade) | $100 | $200 | ASSUMPTION |
| Insurance (E&O + product + cyber + general) | $150 | $600 | ASSUMPTION |
| Data integration maintenance | — | $400 | ASSUMPTION |
| Compliance tooling | — | $200 | ASSUMPTION |
| QA automation maintenance | — | $100 | ASSUMPTION |
| Founder time | $0 | $0 | per assignment |
| **Total fixed** | **$1,250** | **$4,500** | |

---

## 4. Gross Margin Per Customer — Revised

**How gross margin is calculated here:** Gross margin includes all costs directly required to deliver the product to one user. For a SaaS product, that means variable costs plus the fixed infrastructure costs allocated per user (hosting base and data integration — costs that exist specifically to run the product, not to run the business generally). Clinical advisor, insurance, and compliance are treated as operating expenses.

### Gross margin per user at 500 active users

| | Low | Base | High |
|---|---|---|---|
| Revenue (chain pays) | $2.00 | $5.00 | $10.00 |
| AI inference | ($0.35) | ($0.35) | ($0.35) |
| Hosting (all: $200 base ÷ 500 + $0.10 variable) | ($0.50) | ($0.50) | ($0.50) |
| Data integration ($400 ÷ 500 users) | ($0.80) | ($0.80) | ($0.80) |
| Customer support | ($0.15) | ($0.15) | ($0.15) |
| **Gross margin per user** | **$0.20** | **$3.20** | **$8.20** |
| **Gross margin %** | **10%** | **64%** | **82%** |

**64% gross margin at the base rate is in the realistic range for an AI-native, health-adjacent SaaS product.** Standard benchmarks: traditional SaaS 70–80%, AI-heavy SaaS 60–75%, compliance-burdened health SaaS 55–70%. At 64%, this product sits within that range.

At the low rate ($2/user/month), gross margin collapses to 10%. The model cannot sustain operating expenses at that rate. This is the clearest evidence that $2/user/month is not a viable contract price — not because margins are uncomfortable, but because the product loses money on every user before fixed operating costs are applied at all.

---

## 5. Fixed Costs and Break-Even — Revised

### Monthly operating expenses (not in gross margin above)

| Cost | Amount | Label |
|---|---|---|
| Clinical advisor (20 hrs/month) | $3,000 | ASSUMPTION |
| Insurance (E&O + product + cyber + general) | $600 | ASSUMPTION |
| Compliance tooling | $200 | ASSUMPTION |
| QA automation maintenance | $100 | ASSUMPTION |
| **Total operating expenses** | **$3,900/month** | |

### Break-even active users

Break-even = Operating expenses ÷ Gross margin per user

At the base rate ($5/user/month, $3.20 gross margin per user):
**Break-even = $3,900 ÷ $3.20 = 1,219 users**

Rounded conservatively: **~1,200 active users to cover fixed operating costs.**

*Original break-even: 264 users. Revised break-even: ~1,200 users. Difference: 4.5×.*

| Scenario | Gross margin/user | Break-even users |
|---|---|---|
| Low ($2/user/month) | $0.20 | **19,500 users — not achievable in one chain deal** |
| Base ($5/user/month) | $3.20 | **~1,200 users** |
| High ($10/user/month) | $8.20 | **~476 users** |

### What reaching 1,200 users requires

A regional grocery chain with 50,000 loyalty members needs to activate **2.4%** of its base on the planning tool. That sits at the lower end of the 2–8% range for grocery app add-on feature activation **[ASSUMPTION — general digital loyalty industry range]**. It is achievable, but only if the chain actively promotes the tool. If the chain treats it as a background feature with no marketing push, 2.4% is optimistic.

This changes the partnership negotiation: the chain's willingness to actively promote the tool is as important as the per-user rate it pays.

---

## 6. Lifetime Value vs. CAC — Revised

At the base scenario ($5/user/month, $3.20 gross margin per user):

**LTV per user** = Gross margin × Retention months

| Retention | LTV per user |
|---|---|
| 6 months | $19.20 |
| 12 months | $38.40 |
| 24 months | $76.80 |

*Original LTV at 24 months: $113.52. Revised: $76.80. Difference: -32%.*

**LTV per chain deal** (at 1,200 active users, 24-month retention):
= 1,200 × $76.80 = **$92,160**

**Out-of-pocket CAC per chain deal:** $700–2,500 **[ASSUMPTION — unchanged]**

**LTV:CAC ratio per chain:** $92,160 ÷ $1,600 (midpoint) = **~58:1** **[ASSUMPTION]**

This ratio is still extremely high. The reason: CAC in this model is nearly zero in out-of-pocket terms because the chain acquires users through its own loyalty program, and your sales cost is mostly founder time valued at $0. When founder time is priced at market rate (~$6,000 to close a deal), LTV:CAC drops to ~11:1 — still favorable but not suspicious.

The bigger problem with LTV is the retention assumption. Every prior tool in the interview data was abandoned. If users churn at the same rate they abandoned free apps, TikTok recipes, and meal kits — which the data says is within months, not years — the 24-month retention scenario is fiction. A realistic worst-case retention of 4–6 months produces:
- LTV of $12.80–$19.20 per user
- LTV:CAC per chain (at 4 months): $12.80 × 1,200 = $15,360 ÷ $1,600 = ~9.6:1

Still positive, but the model's profitability depends entirely on solving the abandonment problem the interviews document.

---

## 7. The Model at a Glance — Original vs. Revised

| Metric | Original | Revised | What changed |
|---|---|---|---|
| AI inference/user/month | $0.17 | $0.35 | Token count was 3× too low |
| Total variable cost/user/month | $0.27 | $0.60 | Added support; revised inference |
| Total fixed costs/month | $1,250 | $4,500 | Clinical advisor, insurance, integration, compliance |
| Gross margin per user (base) | $4.73 (95%) | $3.20 (64%) | Hosting + integration allocated to COGS |
| Break-even active users | 264 | ~1,200 | 4.5× higher |
| LTV per user (24 months) | $113.52 | $76.80 | Lower gross margin per user |

---

## 8. What Has to Be True for This to Work — Updated

| Assumption | What you're betting on | Validation method |
|---|---|---|
| Chain pays $5/user/month | A grocery chain sees shopper engagement value worth that fee | Approach one regional chain; ask what they pay for comparable loyalty tech |
| 2.4% of loyalty base activates | Chain actively promotes the tool; not a background feature | Pilot activation data; negotiate promotion commitment into contract |
| Users retain for 12+ months | Abandonment pattern from interviews does not apply when the tool is embedded in the grocery context | Measure plan follow-through in first pilot cohort |
| Chain supplies circular data in machine-readable format | The data pipeline can be built and maintained | Due diligence with chain IT before signing |
| Clinical advisor is findable at $150/hr for 20 hrs/month | An RD or CDE will consult at this rate for an early-stage venture | Contact 3–5 RDs; get real quotes |
| Insurance costs ~$600/month | Standard market rates apply to this product category | Get actual quotes from 2–3 brokers who cover health-adjacent software |
| $2/user/month is not viable | The model needs the chain to pay at least $4–5/user to work | Single most important negotiation point |

---

## 9. The Revised Bottom Line

**The model is viable at the base rate ($5/user/month) only if:**
1. One chain deal produces at least 1,200 active users — requiring the chain to actively promote the tool
2. Users retain for at least 12 months — which the interview data actively argues against
3. The clinical advisor, insurance, and data integration costs land near the estimates above

**The model does not work at $2/user/month under any realistic user count from a single regional chain.** The break-even of 19,500 users at $2 is not achievable in a pilot. This means the floor of the negotiation with any chain is approximately $4–5/user/month, and the contract needs to include a promotion commitment, not just a license fee.

**The one finding that most improves the picture:** If the chain pays $10/user/month (positioned as a diabetes prevention benefit), break-even drops to ~476 users — achievable at under 1% activation of a 50,000-member loyalty base. But $10/user requires positioning the product as a clinical health program, which reintroduces the outcomes-measurement burden and compliance exposure that caused PlateJoy's institutional model to fail.

**Next validation actions, in priority order:**
1. Get real insurance quotes from two brokers who cover health-adjacent software. The $600/month estimate may be significantly off and is the largest single assumption in the fixed cost structure.
2. Contact one regional grocery chain's loyalty or shopper engagement team. Ask what they currently pay for add-on engagement tools. One conversation converts the highest-risk revenue assumption.
3. Get three real quotes from registered dietitians or certified diabetes educators for a 20-hour/month consulting scope. The $3,000/month figure is based on published rate ranges, not an actual offer.
4. Ask Tere, Grace, or Mary: "If your grocery store offered a free weekly meal plan built around its sales this week and your budget, would you open it before your next trip?" This tests the activation assumption at zero cost.
