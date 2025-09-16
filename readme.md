# Morelia Taste-Router

## One-line

Occasion-based router that sends Morelia diners to the right venue fast, measures qualified intent, and charges restaurants only on verified high-intent actions.

## Objective

Maximize **verified seated covers per peso** for participating venues while generating stable, scalable margin after ad spend. The product replaces unfocused social discovery with a guided path that fits local preferences and gives smaller venues a fair shot at demand.

## Core Experience

- Six binary questions capture the diner occasion and constraints (e.g., quiet date, family Sunday, rainy-day caldo, budget band, noise tolerance, parking needs).
- Recommendation is shown in ≤7 screens with two primary calls-to-action: **Route in Maps** and **Message on WhatsApp** (Reservations appear where supported).
- Real-time context (open/close, kitchen cutoffs, wait signal) prevents dead ends.
- Micro-profiles summarize noise, seating, speed, average ticket, payments, bathrooms, parking, kid tolerance, and must-order dishes.
- Post-visit two-question ping (“Did we match your ask?” and “Would you return?”) feeds the quality loop.

## Qualified Intent (QI)

Count an interaction as QI when it reflects clear intent to visit:

- WhatsApp tap to the venue
- Phone-call tap
- Map route start
- Reservation submit

**Rules:** unique per diner per 24h, discard sub-2s taps, ignore duplicate taps within the same session.

## Merchant Value

- Deliver filled seats, not impressions; sponsored lifts never outrank poor-fit venues.
- Transparent proof-of-life dashboard: routed sessions today, last 10 verified check-ins, rolling 7-day match rate per occasion.
- Attribution via per-listing WhatsApp deep links, call-tracking numbers, arrival codes, and reservation IDs with aggressive dedupe.

## Pricing & Plans

Base price anchor remains **890 MXN/month**.

| Plan     | Monthly fee | Included QI | Overage (PPI) | Best for                                                    |
| -------- | ----------- | ----------- | ------------- | ----------------------------------------------------------- |
| **Core** | 890 MXN     | 25 QI       | 28 MXN/QI     | Venues testing the channel and needing steady intent        |
| **Plus** | 1,290 MXN   | 40 QI       | 27 MXN/QI     | Venues with richer profiles seeking more insight and volume |

**Spotlight sponsorship (add-on):**

- Occasion Spotlight card appears only when the venue fits the diner’s occasion.
- Pack = 40 incremental QI/week at 1,400 MXN/week.
- Inventory caps: ≤25% share-of-voice per sponsor per occasion and ≤25% of monthly QI from Spotlight.
- Make-good: shortfalls convert to standard QI credits; incrementality measured versus holdout baseline.

## Guardrail Economics

- **CPI = ad spend / QI**, tracked daily; maintain **spread = PPI − CPI ≥ 8 MXN** and adjust weekly if needed.
- Pause specific occasion/daypart inventory if CPI > 12 for seven consecutive days.
- Deliver included QI or roll shortfalls to the next month (no guaranteed overage).

## Ranking Governance

Composite score keeps the router trustworthy:

- 70% post-visit match rate (“Did we match your ask?”)
- 20% return intention (“Would you return?”)
- −20% complaint rate (service failures, bait-and-switch)
- +10% freshness (recent verified check-ins)

Sponsored lifts are allowed only within the same quality band and are clearly labeled.

## Data Model & Feedback Loop

- **Occasion:** {type, party_size, noise_pref, budget_band, time_window, parking_need}
- **Venue facts:** {menu_archetype, noise, seating, speed, avg_ticket, payment, bathrooms, parking, kid_tolerance}
- **Signals:** {intent_event, check_in_proof, match_result, return_intent}
- **Governance:** {sponsored_flag, quality_band, lift_amount}

Field teams and merchants maintain venue cards; diner feedback updates freshness and quality scores.

## Traffic & Acquisition

- Occasion-led ads (“Quiet date spots open now”) outperform generic cuisine ads.
- Weather/time creative shifts traffic (rain → caldo; heat → aguas frescas; Friday pm → loud/fun).
- Restaurant-side QR loops (“Stuck? Find your next spot”) capture in-market diners and compound usage citywide.
- Newcomer pool grants the first **100 routed trials** for new venues in matching occasions, funded via pooled ad budget or sponsors before reverting to quality math.

## Launch Plan

**First 30 days**

- Curate and field-audit ~40 venues across distinct occasions; capture on-site attributes.
- Launch three routers: Quiet Date, Family Sunday, Rainy-day Caldo.
- Sign 30 clients on Core/Plus; instrument links and arrival codes.
- Buy only high-intent traffic; publish live counters and weekly match rates.
- Sell two Spotlight packs per week to fund scale without distorting rankings.

**Day 60–90**

- Reach 50 clients; add Workday Lunch and Birthday 6–10 occasions.
- Re-weight ranking using post-visit data; prune low-fit venues.
- Expand Spotlight to four packs per week while honoring inventory caps.

## Unit Economics Snapshot (CPI = 9 MXN)

Assume delivered QI: Core 45, Plus 60.

- **Core:** Revenue 890 + 20×28 = 1,450; Ad 45×9 = 405 → **Margin 1,045 MXN**
- **Plus:** Revenue 1,290 + 20×27 = 1,830; Ad 60×9 = 540 → **Margin 1,290 MXN**

Spotlights: +11,200 MXN revenue and +8,320 MXN margin per two weekly packs; double for four packs.

Founder income check (no Spotlights):

- 30 Core clients → Margin ~31,350; −3,000 ops = **28,350 MXN** (~14,175 per founder)
- 50 Core clients → Margin ~52,250; −4,000 ops = **48,250 MXN** (~24,125 per founder)

## Operating Rules

- Keep included QI below expected delivery; never sell “unlimited.”
- Maintain spread ≥ 8 MXN; raise PPI or pause routes if violated.
- Remove venues that refuse post-visit pings—lack of feedback poisons rankings.
- Limit the flow to six questions and ≤7 screens from landing to recommendation.
- Focus the roster so every venue receives meaningful traffic; expand only when metrics hold.

## Example Application

For Costa Coral (seafood buffet, family-friendly, rainy-day caldo, talk-friendly before 2 pm):

- Route “try something new” seekers to Taco Trio; “safe and abundant” seekers to Buffet Completo.
- Use WhatsApp deep links with pre-filled booking text; verify arrival via code at cashier; measure seated parties per QI.

## Compliance Notes

- Clear ad disclosures for Spotlight placements.
- Minimal PII; dedupe per diner per 24h using device/session keys without storing sensitive identifiers.
- Opt-in for post-visit pings with one-tap opt-out.
