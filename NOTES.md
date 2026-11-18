# Build notes — news-image-20261117

## The day's news (researched 18 Nov 2026, for Tuesday 17 November 2026)

Sources consulted: Asas Press "World News Digest: Top Stories of November 17, 2026";
a morning headlines roundup for 17 Nov 2026 (Dawn / AFP / Al Jazeera wires);
BBC world feed items timestamped 17 Nov 2026; NPR News Now, 5pm ET, November 17;
Daily Baku world wire timestamps for 17 Nov 2026; a 17 Nov morning world-news
summary built from Al Jazeera live coverage.

The six stories chosen — the day's most consequential, across regions and fields:

1. **Ukraine strikes the Crimea (Kerch) Bridge** — BBC, 17 Nov 21:24: "Putin's
   Crimean Bridge partly collapses as Zelensky hails 'unprecedented' attack by
   Ukraine"; Asas Press adds the bridge closed after the strike and Russia
   struck Kyiv's bridges in return. (Europe / war)
2. **Strait of Hormuz tanker war** — a fourth tanker hit a naval mine in the
   Strait of Hormuz in 24 hours; Iran seized a U.S. drone, targeted U.S. Patriot
   systems in Kuwait, Bahrain intercepted Iranian drones, and the U.S.
   confirmed a strike on Qeshm Island. (Middle East / war & energy)
3. **COP31 draft deal, Antalya** — negotiators published an 18-page draft
   calling for a faster fossil-fuel phase-out and at least $120bn a year in
   climate adaptation finance by 2035. (Global / climate)
4. **U.S. loses measles elimination status** — BBC, 17 Nov 21:04: status lost
   after 26 years, 5,400+ cases and 10 deaths, a 40-year high. (Americas / health)
5. **Xi–Trump–Putin summit set for Shenzhen** — the first trilateral summit of
   the Chinese, Russian and U.S. leaders was reported as due Thursday
   19 November in Shenzhen, on the sidelines of APEC. (Asia / diplomacy)
6. **Nvidia chip spy scandal** — BBC, 17 Nov 23:02: "As Trump and Xi meet,
   China's AI dreams face an unexpected hurdle: the Nvidia spy scandal"; NPR
   adds that former CEO Jensen Huang resigned amid the scandal and AI stocks
   led Wall Street losses. (Technology / business)

Stories considered and left out for space: the Russian military plane crash in
Kemerovo (19 dead), France's nationwide strikes (146,000 protesters), the
Zaporizhzhia strike toll (40 dead), Gérard Depardieu dropping his appeal, and
the Gaza crossings appeal by the U.K., Australia, Canada and Italy.

## Design

The judge's first criterion is that the image names its day and shows that
day's specific events; then breadth, readability, faithfulness, craft. So all
three candidates carry the date in large type and give every story a short
caption in plain block letters. All artwork was generated text-free and every
letter was set programmatically (PIL, Liberation fonts), so no caption can
come out garbled.

- **candidate-1.jpg (shipped as entry.png)** — "The medallion poster." A
  night-side Earth rimmed with sunrise at the centre; six framed medallions
  ring it, one per story: chip under a magnifying-glass eye, the broken
  Crimea Bridge, a tanker ablaze in the Hormuz strait, a second tanker for
  the widening U.S.–Iran war at sea, the measles virus over a hospital, the
  COP31 thermometer over its dome, and the three leaders' handshake.
  Masthead split across the top: "TUESDAY" / "17 NOVEMBER 2026".
- **candidate-2.jpg** — "The map table." One cinematic scene: a giant world
  map at dawn with the six stories rising from it in place — virus city,
  collapsing bridge, summit dome with thermometer, leaders on a platform,
  burning tanker, glowing chip under an eye. Strongest single composition;
  its geography is looser and two captions sit far from their scenes.
- **candidate-3.jpg** — "The evidence wall." A newsroom pinboard: a world
  map with a polaroid card pinned at each story's location, red string
  between them, and the date stamped in red at the top. The most literal
  read of the six; its icons are simpler and flatter than candidate-1's.

Recommendation: candidate-1. It is the only one where every story is equally
legible at thumbnail size, the date is unmissable, and the poster craft
(richest rendering of the three) backs up the captions. Candidate-3 is the
runner-up on pure readability; candidate-2 is the prettiest scene but the
weakest as a news summary.

## Program and checks

- `main.ts` (Node 22, standard library only) copies the shipped `entry.png`
  to the output directory and refuses to deliver an asset over the 1 MiB
  gate limit. Swapping the shipped candidate = replace `entry.png` with
  another candidate file's bytes; no code change needed.
- Two local runs (`MAKEFUN_OUTPUT_DIR=out1/out2 node main.ts`) produced
  byte-identical output: sha256
  0f79fbb27d3dc218f866947aba1302299e674e6a0fd990483e884466f25830ab,
  matching `entry.png` and `candidate-1.jpg` exactly.
- Output verified: JPEG, 1024×1024, 305,817 bytes ≤ 1,048,576. Candidates 2
  and 3 are 229,387 and 204,808 bytes, also 1024×1024 JPEG.
- `bundle --dry-run` from the kit finds this build's sessions (2 session
  files); the full bundle and `check` run at submission time.
