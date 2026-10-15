# San Joaquin Gateway

Build a single, production-grade homepage for the San Joaquin Council of Governments (SJCOG) redesign concept for an RFP proposal.

STRICT CONSTRAINTS:
- Build ONLY a single homepage view — one route, one scrollable page. Do NOT set up multiple page routes or separate views for About, Programs, Board & Committees, etc. All links, dropdown items, 'Read more', and 'View All' links must be non-functional visual placeholders (href="#" or e.preventDefault()).
- Use the attached SJCOG logo file in the header and branding.

DESIGN & BRAND IDENTITY:
- Primary brand color: Deep civic blue #094E77.
- Accent motif: Sunset-over-mountains gradient (burnt orange #D9782D → amber gold #E8A33D → dusk indigo #4B3B78) echoing the logo, used thoughtfully for hero wash, engagement banner, and section accents.
- Supporting accent: Muted teal (#2C7C9C).
- Background: Warm off-white (#F8FAFC / #F9F8F6) with charcoal-navy body text for high WCAG 2.2 AA contrast.
- Typography: Clean civic sans-serif (Inter / Public Sans feel), confident headers, restrained body.
- Icons: Crisp, professional civic/duotone line icons (Lucide). No cartoon or startup emoji styling.
- Accessibility: Skip-to-content link, semantic HTML landmarks (<header>, <nav>, <main>, <section>, <footer>), visible keyboard focus rings (ring-2 ring-offset-2), ARIA attributes on dropdowns and tabs.

STRUCTURE & SECTIONS:
1. Utility Bar & Header:
   - Utility bar (top): Search, Member Agencies, Careers, Notify Me / Subscribe, Language Toggle (EN / ES).
   - Main Header (sticky): Uploaded SJCOG circular logo + wordmark ("San Joaquin Council of Governments"). Primary nav: About SJCOG | Board & Committees | Programs (hover/click dropdown previewing the 7 programs: Transportation Planning & Measure K, RTP/SCS, dibs — Rideshare & Smart Travel, Housing/SJRHF, Airport Land Use Planning, Regional Air Quality, Habitat Conservation SJMSCP) | Public Documents Library | News & Announcements | Public Engagement | Contact Us. Mobile hamburger menu.

2. Hero Section:
   - Subtle sunset gradient wash.
   - Headline: "Planning transportation, housing, and habitat for the San Joaquin region."
   - Subhead: "SJCOG is the planning, financing, and coordinating agency for the San Joaquin region — a joint-powers authority representing Escalon, Lathrop, Lodi, Manteca, Mountain House, Ripon, San Joaquin County, Stockton, and Tracy."
   - CTAs: "View Agendas & Minutes" (primary solid) & "Explore Measure K" (secondary outline).
   - Prominent integrated search bar ("Search programs, board agendas, documents, or projects...").

3. Quick Access Strip:
   - 6 compact icon tiles: Agendas & Minutes, Measure K, dibs Rideshare, Careers, Contact Us, Notify Me.

4. Featured Programs & Projects:
   - Clean card grid showcasing the 6 real programs with authentic descriptions: RTP/SCS, SR 99/120 Connector Project, Transit Planning, dibs, EZHub, and FTIP.

5. News & Announcements:
   - Tab switcher: "News & Announcements" and "Public Notices".
   - News tab: 5 real headlines with dates, categories, excerpts, and realistic civic photography/placeholders:
     * "SJCOG, partners win major award for SR 99/120 Connector"
     * "Nearly $12 million to be used to unlock 421 affordable homes across San Joaquin County"
     * "SJCOG Board OKs $10 million investment in Valley Link to expand transportation options"
     * "Coming soon: San Joaquin's first clean mobility hub"
     * "Help SJCOG plan for region's transportation future"
   - Public Notices tab: Clean empty state ("No public notices at this time").
   - "View All News" link.

6. Public Documents Library Preview:
   - Unified document search & filter bar with filter pills (All, Agendas & Minutes, Reports & Plans, Public Notices, Forms & Applications, Maps & GIS).
   - 4 sample document entries with file badge (PDF), date, department, and download button (Board Agenda Packet, 2022-2046 RTP/SCS Final Report, SJ Regional Housing Fund Annual Allocation, SR 99/120 Environmental Notice).

7. Meetings & Events:
   - Split view: Mini interactive month calendar + upcoming meeting agenda cards (Technical Advisory Committee, Management & Finance Committee, Citizens Advisory Committee, Executive Committee, Special Board of Directors Meeting) with dates, times, location (555 E Weber Ave & Zoom), and "Agenda & Packet" action.

8. Public Engagement Strip:
   - Full-width banner in warm sunset gradient: "Get Involved in Regional Decision-Making" with 3 distinct pathways: Take Active Surveys, Attend a Public Hearing, Subscribe via Notify Me.

9. About SJCOG Summary:
   - Agency overview highlighting JPA governance across 9 jurisdictions, Measure K sales tax administration, regional air quality, and RHNA housing allocation. Key agency stat callouts.

10. Member Agencies Band:
    - Elegant civic seal/logo band honoring all 9 member agencies: Escalon, Lathrop, Lodi, Manteca, Mountain House, Ripon, San Joaquin County, Stockton, Tracy.

11. Footer:
    - Deep navy background (#094E77). Columns: Contact Info (555 E Weber Ave, Stockton, CA 95202-2804, 209-235-0600), Quick Links, Programs list, Connect (Facebook, Instagram, YouTube, LinkedIn + Notify Me newsletter input).
    - Sub-footer: Copyright, Site Map, Accessibility Statement, Privacy Policy, Copyright Notices.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b049b4a3-06e0-4133-85ea-033a7b182b95).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
