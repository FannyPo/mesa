# Mesa — Project Plan

**Goal:** Build and validate a weekly meal planning system for families managing health conditions on a tight grocery budget, with a live MVP demonstrated by Week 9.

**Product model:** AI generation stays manual — Fanny writes every plan using her Claude subscription. What is deferred is the live API call from inside the app. The app's job is to be the front door: collect a complete household profile and send it to Fanny so she can build the plan without a follow-up loop.

---

## Task 1 — Validate the problem
*Depends on: nothing — this is the starting point*

- [x] Recruit interviewees matching target profile (pre-diabetic, working parent, tight budget)
- [x] Complete interviews 1–5
- [x] Write customer discovery synthesis
- [x] Confirm the core pattern across all five: produce spoils weekly, no grocery list, inspiration never converts to meals, every prior tool was tried and abandoned
- [x] Identify the insight that frames the product: "I have the intention, but not a good system" (Tere)

**Done when:** At least 5 interviews complete, synthesis written, core problem confirmed in interviewees' own words across all five conversations.

---

## Task 2 — Build and deploy the landing page
*Depends on: Task 1 (need validated problem framing before writing copy)*

- [x] Write landing page copy: problem, how it works, pricing, CTA
- [x] Build index.html with bilingual support (EN/ES toggle)
- [x] Add email capture via Web3Forms (notifications go to Fanny)
- [x] Add social proof (anonymized quotes from WoZ testers)
- [x] Add logo and brand guide
- [x] Deploy to Cloudflare Pages via GitHub (FannyPo/mesa → mesa-bm3.pages.dev)
- [x] Test email capture: submit form → Fanny receives notification
- [x] Remove real interviewee names from page (privacy)
- [x] Rewrite pricing for honest WoZ framing: free now / $1.99 first plan at launch / $3.99/month after

**Done when:** Page is live at mesa-bm3.pages.dev, loads correctly in EN and ES, email capture sends Fanny a notification, no real names appear, pricing is honest about the testing phase.

---

## Task 3 — Wizard of Oz validation
*Depends on: Task 1 (need target customers), Task 2 (landing page up so testers can sign up)*
*Note: second-plan outreach runs before Task 4 code work begins this week*

- [x] Build manual meal plan for Tere
- [x] Build manual meal plan for Mary
- [x] Build manual meal plan for Susana (Aldi low-carb Dominican, 7-day)
- [x] Build manual meal plan for Cindy (Cindy/Susana side-by-side comparison)
- [ ] **Second-plan outreach — do this before any code this week:**
  - [ ] Contact Grace, Cindy, Martha, Roberto, and Susana
  - [ ] Tell each household that Mesa is a weekly system — the first plan was week one
  - [ ] Deliver a second plan to each household that confirms
  - [ ] Ask directly: did you use the first plan at the store? What did you change?
- [ ] Follow up with each WoZ household on the first plan:
  - [ ] Confirm whether Susana followed the plan at the store
  - [ ] Confirm whether Cindy followed the plan at the store
  - [ ] Confirm whether Tere and Mary followed their plans
- [ ] Document WoZ results in VENTURE.md: who followed it, who didn't, and why

**Done when:** Second-plan outreach complete with all five households. First-plan follow-up documented. Results logged in VENTURE.md.

**Fanny's loop metric:** At least one household requests week two on their own — without Fanny initiating — after the second-plan outreach establishes the weekly cadence. This is the signal that the loop works.

---

## Task 4 — Wire app.html as the front door
*Depends on: Task 2 (Cloudflare Pages project already exists and deploys from GitHub)*

app.html already collects the right fields (health conditions, family size, budget, store, on-sale items, busy nights). The mock data generator replaced what should be an intake form. This task wires the existing form to Web3Forms so that submitting it emails Fanny a complete household profile — no follow-up loop required.

- [x] Build app.html: profile form → loading state → results view (fields correct, mock data showing)
- [x] **Delete `functions/api/plan.js`** — this file was throwing "API key not configured" to live visitors; it is dead code now that the app does not call the Anthropic API
- [x] Replace mock data response with Web3Forms submission
  - [x] Reuse the access key already in index.html: `a7c00847-c5ad-4457-bc04-e010d1197846`
  - [x] Set the Web3Forms `subject` field to "Mesa Plan Request" so it is distinguishable from landing page signups in Fanny's inbox
  - [x] On submit, POST all profile fields to `https://api.web3forms.com/submit` with that key
  - [x] Replace the entire `#step-results` section with a `#step-confirm` section — this removes the mock plan render, regenerate button, and start-over button as part of the replacement, not as a separate step
- [x] Update loading screen copy — current text said "Building your plan... About 15 seconds" (written for an API call); updated to accurately reflect that the profile is being submitted, not generated
- [x] Update page title, subtitle, and submit button to honestly communicate that a real person builds the plan and it arrives by email — no turnaround time commitment; frame it as a trust feature ("a real person builds your plan"), not an apology
- [x] Add "Send me next week's plan too" checkbox to the form
  - [x] Field appears at the bottom, before submit
  - [x] Included in the Web3Forms email so Fanny knows to set up a recurring delivery
- [x] Add a food dislikes / ingredients to avoid field (free text)
- [x] Confirm Web3Forms email arrives labeled "Mesa Plan Request" with all fields labeled and readable
- [x] Update index.html CTAs to link to app.html (already done — verified correct)
- [x] Test on mobile (iPhone or Android, real device)
  - [x] Form inputs are usable without zooming
  - [x] Confirmation screen is readable
  - [x] No layout overflow
- [x] ~~Set ANTHROPIC_API_KEY in Cloudflare dashboard~~ — **Deferred per professor guidance. Manual delivery continues until further notice.**

**Done when:** Any visitor can go to mesa-bm3.pages.dev/app.html, fill in a complete household profile, submit, and Fanny receives a Web3Forms email labeled "Mesa Plan Request" with every field she needs to build the plan — no follow-up messages required. Verified on live site and mobile on 2026-07-12.

---

## Task 5 — Run channel experiments
*Depends on: Task 4 fully complete (form submits and emails Fanny — visitors who click the link must reach a working intake form)*

### Channel 1 — Instagram
- [ ] Notify WoZ households before posting so they don't miss the 24-hour window (Tere, Mary, Grace, Susana, Cindy) — their comments are their choice, just give them the heads-up
- [ ] Post feed post with Susana plan image (or Cindy/Susana side-by-side) and final caption
  - [ ] Post between 7–9 PM on a weekday or Sunday morning
  - [ ] No hashtags (can flag new accounts as spam)
- [ ] Post Story with link sticker (mesa-bm3.pages.dev/?ref=ig) within 5 minutes of feed post
  - [ ] Slide 1: screenshot of feed post + "just posted ↓" text sticker
  - [ ] Slide 2: "Want one for your family?" / "free while I'm still testing" / link sticker / "2 minutes"
- [ ] Check Cloudflare analytics at 2 hours (zero clicks at hour 2 = Story link may be broken)
- [ ] Check Story analytics at 24 hours: Story views vs. link taps
- [ ] Log in channel-tracker.csv: date, views, clicks (ref=ig), sign-ups, DMs, replies, time spent

**Done when:** 8+ link clicks (ref=ig in Cloudflare) AND 1+ sign-up. Failure signal: under 3 clicks and zero engagement (no comments, no DMs) after 24 hours.

### Channel 2 — WhatsApp (Individual DMs)
*Depends on: Channel 1 Story has expired (wait at least 24 hours after Instagram post so results don't blur)*

- [ ] Write the list of 3–5 family members to message before sending anything (both filters: they cook + they forward things) — knowing who you messaged is how you identify a forward
- [ ] Send individual DMs with Susana plan image (image first, message second) using final Spanish/Spanglish copy
- [ ] After 48 hours: ask each person directly "¿Se lo mandaste a alguien?" — this surfaces forwards that happened without a link click
- [ ] Check sign-up names: any name Fanny doesn't recognize = confirmed forward
- [ ] Log in channel-tracker.csv: date, clicks (ref=wa), sign-ups, replies, DMs, forwards confirmed

**Done when:** 1+ sign-up from someone Fanny did NOT directly message, OR 1+ reply asking for a plan. Failure: no forwards and no replies after 48 hours.

### Channel 3 — Facebook (Happenings in Casselberry FL)
*Depends on: Group membership approved, Monday July 13 (group rules restrict promotional posts to Mondays). Next eligible date if missed: Monday July 20.*

- [ ] Confirm group membership is approved before July 13
- [ ] Check group pinned post for required Monday post format — follow it if one exists
- [ ] Post caption first (no link in the caption body)
- [ ] Post link as first comment within 30 seconds: `👉 mesa-bm3.pages.dev/?ref=fb`
- [ ] Answer every comment publicly within the hour — each response is visible to all readers and extends algorithmic reach
- [ ] Check Cloudflare at 2 hours and again at 24 hours (filter ref=fb)
- [ ] Log in channel-tracker.csv: date, clicks (ref=fb), sign-ups, comments, post status (up/removed)

**Done when:** 5+ link clicks (ref=fb) AND (1+ sign-up OR 1+ comment asking to share the template). Failure: zero engagement or post removed by a moderator.

---

## Task 6 — Analyze experiment results and document findings
*Depends on: Task 5 (all three channels have run and results are logged)*

- [ ] Complete channel-tracker.csv with real data for all 3 channels
- [ ] Identify which channel produced the most sign-ups per hour of effort
- [ ] Identify whether any plan was forwarded without Fanny's involvement (word-of-mouth signal)
- [ ] Update VENTURE.md with a "What the experiments showed" section:
  - [ ] Which channel hypothesis was confirmed, which was not
  - [ ] Whether cold strangers (Facebook) responded differently from warm network (Instagram, WhatsApp)
  - [ ] Which channel to scale and which to pause
- [ ] Make a clear decision: which channel runs again next week?

**Done when:** channel-tracker.csv complete with real numbers for all 3 channels. VENTURE.md updated with findings. One channel identified as the primary acquisition path going forward.

---

## Task 7 — Validate the intake-to-delivery loop
*Depends on: Task 4 (Web3Forms wiring complete)*

This task validates that the full manual loop works end-to-end before channel experiments drive real sign-ups through it. If any field turns out to be missing or ambiguous, this task reopens Task 4 to add it — that iteration is expected, not a failure.

- [x] Submit a test profile through app.html using a real household scenario (pre-diabetes, family of 3, Aldi, $100/week, chicken thighs on sale)
- [x] Confirm Web3Forms email arrives labeled "Mesa Plan Request" with all fields labeled and complete — no missing data, no follow-up required
- [x] Build the plan from the email alone (do not reference any prior knowledge of the household)
- [x] Deliver the plan and note how long the full cycle took (form submission → plan in hands)
- [x] If any field was missing or ambiguous: add it to the form in app.html and retest before marking this task done

**Validated with real user Ruben (2026-07-19).** Ruben came in via Instagram bio link → landing page → "Get my first plan" → app.html. Web3Forms email arrived with complete profile. Plan built and delivered from email alone. Gap exposed: form captured his conditions but not what his doctor was prioritizing — doctor's main concerns were blood pressure and cholesterol, with a note to watch blood sugar. Required a follow-up to rework the plan. Add doctor-priority field and High cholesterol checkbox before marking this task done (see Task 4 re-open).

**Done when:** A complete household profile submitted through app.html produces a Web3Forms email with everything needed to build a plan, with no follow-up messages. Total cycle time documented.

---

## Task 8 — Week 9 Live MVP gate
*Depends on: Task 4 (app live and wired), Task 5 (at least Instagram and WhatsApp complete), Task 6 (results documented), Task 7 (loop validated)*

- [ ] Confirm live site is up and app.html loads at mesa-bm3.pages.dev
- [ ] Do a full dry-run demo the day before: submit a profile, confirm the Web3Forms email arrives, time it
- [ ] Have a sample profile ready to submit in class (pre-diabetes, family of 3, Aldi, $100, chicken thighs on sale) — do not type during the demo
- [ ] Have channel-tracker.csv open with real results to show
- [ ] Have VENTURE.md open with the updated channel findings section
- [ ] Prepare a 2–3 sentence verbal summary: what the experiments proved about how Mesa acquires users

**Done when:** In class, any visitor can go to mesa-bm3.pages.dev, click "Get my first plan," fill in a real household profile, submit, and the form delivers a complete intake to Fanny — live, no manual follow-up required. Channel results are ready to present.

---

## Dependency map (quick reference)

```
Task 1 (validate problem)
  └── Task 2 (landing page)
        └── Task 3 (WoZ validation + second-plan outreach)  ← runs before Task 4 code work this week
        └── Task 4 (wire app.html as front door)
              └── Task 5 (channel experiments)
                    └── Task 6 (analyze results)
              └── Task 7 (validate intake-to-delivery loop)  ← may reopen Task 4 if fields are missing
                    └── Task 8 (Week 9 gate)
                          ↑ also needs Task 5 partial (IG + WA done) and Task 6
```

## Status summary

| Task | Status |
|---|---|
| 1 — Validate problem | Complete |
| 2 — Landing page | Complete |
| 3 — WoZ validation + second-plan outreach | In progress — second-plan outreach not yet done |
| 4 — Wire app.html as front door | Complete |
| 5 — Channel experiments | Not started |
| 6 — Analyze results | Not started |
| 7 — Validate intake-to-delivery loop | Complete — Ruben test 2026-07-19; doctor-priority field added and retested 2026-07-20 |
| 8 — Week 9 gate | Not started |
