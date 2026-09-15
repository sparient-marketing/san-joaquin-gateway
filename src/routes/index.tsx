import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  Users,
  Briefcase,
  BellRing,
  Globe,
  Menu,
  X,
  ChevronDown,
  CalendarDays,
  FileText,
  Bus,
  Mail,
  Coins,
  Download,
  MapPin,
  Clock,
  ArrowRight,
  ClipboardList,
  Megaphone,
  Leaf,
  Building2,
  Plane,
  Home,
  BarChart3,
  Route as RouteIcon,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
} from "lucide-react";
import logo from "@/assets/sjcog-logo.asset.json";
import heroRegion from "@/assets/hero-region.jpg";
import progRtp from "@/assets/prog-rtp.jpg";
import progConnector from "@/assets/prog-connector.jpg";
import progTransit from "@/assets/prog-transit.jpg";
import progDibs from "@/assets/prog-dibs.jpg";
import progEzhub from "@/assets/prog-ezhub.jpg";
import progFtip from "@/assets/prog-ftip.jpg";
import newsHousing from "@/assets/news-housing.jpg";
import newsRail from "@/assets/news-rail.jpg";
import newsMobility from "@/assets/news-mobility.jpg";
import newsEngagement from "@/assets/news-engagement.jpg";
import aboutBoard from "@/assets/about-board.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SJCOG — Transportation, Housing & Habitat Planning for San Joaquin",
      },
      {
        name: "description",
        content:
          "San Joaquin Council of Governments: regional planning, financing, and coordination for nine member jurisdictions — Measure K, RTP/SCS, dibs rideshare, housing, and habitat conservation.",
      },
      {
        property: "og:title",
        content: "SJCOG — Regional Planning for San Joaquin County",
      },
      {
        property: "og:description",
        content:
          "Agendas, programs, documents, and public engagement from the San Joaquin Council of Governments.",
      },
    ],
  }),
  component: Index,
});

const stop = (e: React.MouseEvent) => e.preventDefault();

const programsMenu = [
  { label: "Transportation Planning & Measure K", icon: RouteIcon },
  { label: "Regional Transportation Plan / SCS", icon: ClipboardList },
  { label: "dibs — Rideshare & Smart Travel", icon: Bus },
  { label: "Housing / SJ Regional Housing Fund", icon: Home },
  { label: "Airport Land Use Planning", icon: Plane },
  { label: "Regional Air Quality", icon: Leaf },
  { label: "Habitat Conservation (SJMSCP)", icon: Building2 },
  { label: "Demographic & Economic Data", icon: BarChart3 },
];

const navItems = [
  "About SJCOG",
  "Board & Committees",
  "Programs",
  "Public Documents Library",
  "News & Announcements",
  "Public Engagement",
  "Contact Us",
];

const quickAccess = [
  { label: "Agendas & Minutes", icon: CalendarDays },
  { label: "Measure K", icon: Coins },
  { label: "dibs Rideshare", icon: Bus },
  { label: "Careers", icon: Briefcase },
  { label: "Contact Us", icon: Mail },
  { label: "Notify Me", icon: BellRing },
];

const programs = [
  {
    title: "2022–2046 RTP/SCS",
    tag: "Long-Range Planning",
    img: progRtp,
    alt: "Regional planners reviewing a transportation map",
    body: "The Regional Transportation Plan and Sustainable Communities Strategy sets the 25-year blueprint for how people and goods move through San Joaquin County.",
  },
  {
    title: "SR 99/120 Connector Project",
    tag: "Capital Project",
    img: progConnector,
    alt: "Highway interchange under construction with cranes",
    body: "A multi-phase interchange reconstruction in Manteca improving safety, freight reliability, and daily commutes at one of the region's busiest connections.",
  },
  {
    title: "Transit Planning",
    tag: "Mobility",
    img: progTransit,
    alt: "Riders boarding a city bus at a transit stop",
    body: "Coordinated planning with local operators, including the Regional Transit Systems Plan and support for intercity and commuter rail service expansion.",
  },
  {
    title: "dibs",
    tag: "Rideshare & Smart Travel",
    img: progDibs,
    alt: "Cyclists and carpoolers at a park-and-ride lot",
    body: "SJCOG's commuter program offering carpool matching, vanpool subsidies, bike incentives, and rewards for choosing alternatives to driving alone.",
  },
  {
    title: "EZHub",
    tag: "Digital Tools",
    img: progEzhub,
    alt: "Person using an online mapping dashboard on a laptop",
    body: "A one-stop online portal for jurisdictions and consultants to submit, track, and manage regional project data and funding requests.",
  },
  {
    title: "FTIP",
    tag: "Programming",
    img: progFtip,
    alt: "Road crew repaving a street",
    body: "The Federal Transportation Improvement Program lists every federally funded surface transportation project in the region over a four-year cycle.",
  },
];

const news = [
  {
    title: "SJCOG, partners win major award for SR 99/120 Connector",
    date: "August 28, 2026",
    category: "Awards",
    excerpt:
      "The regional partnership behind the SR 99/120 Connector was recognized for innovative project delivery and interagency collaboration.",
    img: progConnector,
    alt: "SR 99/120 Connector interchange construction",
  },
  {
    title: "Nearly $12 million to be used to unlock 421 affordable homes across San Joaquin County",
    date: "August 12, 2026",
    category: "Housing",
    excerpt:
      "Regional Early Action Planning funds will support infrastructure and predevelopment work for affordable housing in five jurisdictions.",
    img: newsHousing,
    alt: "Newly built homes on a California residential street",
  },
  {
    title: "SJCOG Board OKs $10 million investment in Valley Link to expand transportation options",
    date: "July 30, 2026",
    category: "Board Action",
    excerpt:
      "The Board approved a funding commitment advancing passenger rail service between the Tri-Valley and San Joaquin County.",
    img: newsRail,
    alt: "Passenger train at a station platform",
  },
  {
    title: "Coming soon: San Joaquin's first clean mobility hub",
    date: "July 9, 2026",
    category: "Air Quality",
    excerpt:
      "The hub will combine EV charging, e-bike access, and transit connections at a single neighborhood-scale location.",
    img: newsMobility,
    alt: "EV charging station with bikes and a bus shelter",
  },
  {
    title: "Help SJCOG plan for region's transportation future",
    date: "June 24, 2026",
    category: "Public Engagement",
    excerpt:
      "Residents are invited to share priorities for the next Regional Transportation Plan through an online survey and open houses.",
    img: newsEngagement,
    alt: "Residents at a community planning workshop",
  },
];

const documents = [
  {
    title: "Board of Directors Agenda Packet",
    date: "September 3, 2026",
    dept: "Board & Committees",
  },
  {
    title: "2022–2046 RTP/SCS Final Report",
    date: "June 2, 2026",
    dept: "Regional Planning",
  },
  {
    title: "SJ Regional Housing Fund Annual Allocation",
    date: "May 14, 2026",
    dept: "Housing",
  },
  {
    title: "SR 99/120 Connector Environmental Notice",
    date: "April 22, 2026",
    dept: "Public Notices",
  },
];

const meetings = [
  {
    name: "Technical Advisory Committee",
    day: 14,
    date: "Mon, Sep 14, 2026",
    time: "1:30 PM",
  },
  {
    name: "Management & Finance Committee",
    day: 17,
    date: "Thu, Sep 17, 2026",
    time: "10:00 AM",
  },
  {
    name: "Citizens Advisory Committee",
    day: 21,
    date: "Mon, Sep 21, 2026",
    time: "6:00 PM",
  },
  { name: "Executive Committee", day: 24, date: "Thu, Sep 24, 2026", time: "8:30 AM" },
  {
    name: "Special Board of Directors Meeting",
    day: 28,
    date: "Mon, Sep 28, 2026",
    time: "4:00 PM",
  },
];

const memberAgencies = [
  "Escalon",
  "Lathrop",
  "Lodi",
  "Manteca",
  "Mountain House",
  "Ripon",
  "San Joaquin County",
  "Stockton",
  "Tracy",
];

const filters = [
  "All",
  "Agendas & Minutes",
  "Reports & Plans",
  "Public Notices",
  "Forms & Applications",
  "Maps & GIS",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-civic focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [newsTab, setNewsTab] = useState<"news" | "notices">("news");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDay, setSelectedDay] = useState(17);

  const meetingDays = meetings.map((m) => m.day);
  const lead = news[0]!;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-civic focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white ${focusRing}`}
      >
        Skip to main content
      </a>

      {/* Utility bar */}
      <div className="bg-civic-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-x-6 gap-y-1 px-4 py-2 text-xs sm:px-6">
          {[
            { label: "Search", icon: Search },
            { label: "Member Agencies", icon: Users },
            { label: "Careers", icon: Briefcase },
            { label: "Notify Me / Subscribe", icon: BellRing },
          ].map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              onClick={stop}
              className={`inline-flex items-center gap-1.5 rounded-sm text-white/85 transition-colors hover:text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic-dark`}
            >
              <Icon className="size-3.5" aria-hidden="true" />
              {label}
            </a>
          ))}
          <div className="inline-flex items-center gap-1.5 text-white/85">
            <Globe className="size-3.5" aria-hidden="true" />
            <a
              href="#"
              onClick={stop}
              aria-current="true"
              className={`rounded-sm font-semibold text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic-dark`}
            >
              EN
            </a>
            <span aria-hidden="true" className="text-white/40">
              /
            </span>
            <a
              href="#"
              onClick={stop}
              className={`rounded-sm hover:text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic-dark`}
            >
              ES
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <a
            href="#"
            onClick={stop}
            className={`flex items-center gap-3 rounded-md ${focusRing}`}
          >
            <img
              src={logo.url}
              alt="San Joaquin Council of Governments seal"
              width={56}
              height={56}
              className="size-12 rounded-full sm:size-14"
            />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-civic sm:text-xl">
                SJCOG
              </span>
              <span className="block max-w-[13rem] text-[11px] font-medium uppercase tracking-wide text-foreground/65 sm:max-w-none sm:text-xs">
                San Joaquin Council of Governments
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="ml-auto hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) =>
                item === "Programs" ? (
                  <li
                    key={item}
                    className="relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={programsOpen}
                      aria-haspopup="true"
                      aria-controls="programs-menu"
                      onClick={() => setProgramsOpen((o) => !o)}
                      className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-civic/8 hover:text-civic ${focusRing}`}
                    >
                      Programs
                      <ChevronDown
                        className={`size-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {programsOpen && (
                      <div
                        id="programs-menu"
                        role="menu"
                        aria-label="Programs"
                        className="absolute right-0 top-full w-[26rem] rounded-2xl border border-line bg-white/95 p-2 shadow-float backdrop-blur-xl"
                      >
                        {programsMenu.map(({ label, icon: Icon }) => (
                          <a
                            key={label}
                            role="menuitem"
                            href="#"
                            onClick={stop}
                            className={`flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-sand hover:text-civic ${focusRing}`}
                          >
                            <Icon className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={stop}
                      className={`inline-block rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-civic/8 hover:text-civic ${focusRing}`}
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className={`ml-auto inline-flex size-11 items-center justify-center rounded-md border border-civic/20 text-civic xl:hidden ${focusRing}`}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-black/10 bg-white px-4 pb-4 pt-2 xl:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={stop}
                    className={`block rounded-md px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-sand hover:text-civic ${focusRing}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className={`mt-3 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-civic ${focusRing}`}
            >
              <X className="size-4" aria-hidden="true" /> Close menu
            </button>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroRegion}
            alt="Aerial view of a San Joaquin County highway interchange and farmland at sunset"
            width={1920}
            height={1080}
            className="absolute inset-0 size-full scale-105 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(115%_120%_at_12%_8%,rgba(6,57,90,0.96)_0%,rgba(9,78,119,0.9)_38%,rgba(75,59,120,0.72)_68%,rgba(217,120,45,0.5)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(6,57,90,0.9),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:pb-32 lg:pt-14">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-sunset-amber" />
                Regional Planning Agency · Est. 1968
              </p>
              <h1 className="animate-fade-in text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
                Planning transportation, housing, and habitat for the{" "}
                <span className="bg-[linear-gradient(100deg,#E8A33D,#D9782D_60%,#f5d7a8)] bg-clip-text text-transparent">
                  San Joaquin region.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl animate-fade-in text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                SJCOG is the planning, financing, and coordinating agency for the San Joaquin
                region — a joint-powers authority representing Escalon, Lathrop, Lodi, Manteca,
                Mountain House, Ripon, San Joaquin County, Stockton, and Tracy.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  onClick={stop}
                  className={`group inline-flex min-h-12 items-center gap-2 rounded-full bg-sunset-amber px-7 text-sm font-bold text-civic-dark shadow-float transition-all hover:-translate-y-0.5 hover:bg-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                >
                  <CalendarDays className="size-4" aria-hidden="true" />
                  View Agendas &amp; Minutes
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  onClick={stop}
                  className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-civic ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                >
                  <Coins className="size-4" aria-hidden="true" />
                  Explore Measure K
                </a>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                role="search"
                className="mt-10 flex max-w-2xl items-center gap-2 rounded-2xl border border-white/25 bg-white/12 p-2 shadow-float backdrop-blur-xl"
              >
                <label htmlFor="hero-search" className="sr-only">
                  Search programs, board agendas, documents, or projects
                </label>
                <Search className="ml-3 size-5 shrink-0 text-white/70" aria-hidden="true" />
                <input
                  id="hero-search"
                  type="search"
                  placeholder="Search programs, board agendas, documents, or projects..."
                  className={`min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white placeholder:text-white/65 ${focusRing} focus-visible:ring-white focus-visible:ring-offset-0`}
                />
                <button
                  type="submit"
                  className={`inline-flex min-h-11 items-center rounded-xl bg-white px-5 text-sm font-bold text-civic transition-colors hover:bg-sunset-amber hover:text-civic-dark ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Quick access */}
        <section aria-labelledby="quick-access" className="relative z-10 -mt-20 lg:-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 id="quick-access" className="sr-only">
              Quick access
            </h2>
            <ul className="grid grid-cols-2 gap-2 rounded-3xl border border-line bg-white/95 p-3 shadow-float backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-6">
              {quickAccess.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={stop}
                    className={`group flex h-full flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-all hover:-translate-y-0.5 hover:bg-sand ${focusRing}`}
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,rgba(9,78,119,0.10),rgba(44,124,156,0.16))] text-civic transition-all group-hover:bg-[linear-gradient(140deg,#094E77,#2C7C9C)] group-hover:text-white group-hover:shadow-lift">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-foreground/85">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* Featured programs */}
        <section aria-labelledby="programs-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-14">
          <SectionHeading
            id="programs-heading"
            eyebrow="What we do"
            title="Featured Programs & Projects"
            sub="From long-range planning to shovel-ready capital projects, SJCOG coordinates the region's transportation, housing, and environmental work."
            action="View All Programs"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#D9782D,#E8A33D,#4B3B78)] transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,57,90,0.5),transparent_55%)]"
                    />
                    <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-civic backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-civic">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{p.body}</p>
                    <a
                      href="#"
                      onClick={stop}
                      className={`mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-civic hover:text-sunset-orange ${focusRing}`}
                    >
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* News */}
        <section aria-labelledby="news-heading" className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <SectionHeading
              id="news-heading"
              eyebrow="Newsroom"
              title="News & Announcements"
              sub="Board actions, funding awards, and project milestones from across the region."
              action="View All News"
            />

            <div role="tablist" aria-label="Newsroom categories" className="mt-8 flex gap-2 border-b border-black/10">
              {[
                { id: "news", label: "News & Announcements" },
                { id: "notices", label: "Public Notices" },
              ].map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={newsTab === t.id}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setNewsTab(t.id as "news" | "notices")}
                  className={`-mb-px rounded-t-md border-b-[3px] px-4 py-3 text-sm font-semibold transition-colors ${focusRing} ${
                    newsTab === t.id
                      ? "border-sunset-orange text-civic"
                      : "border-transparent text-foreground/55 hover:text-civic"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {newsTab === "news" ? (
              <div
                role="tabpanel"
                id="panel-news"
                aria-labelledby="tab-news"
                className="mt-8 grid gap-6 lg:grid-cols-3"
              >
                <article className="group overflow-hidden rounded-3xl border border-line bg-sand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:col-span-2 lg:row-span-2">
                  <div className="overflow-hidden">
                    <img
                      src={lead.img}
                      alt={lead.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-72"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                      <span className="rounded-full bg-civic/10 px-3 py-1 text-civic">{lead.category}</span>
                      <span className="text-foreground/55">{lead.date}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-snug text-civic">{lead.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">{lead.excerpt}</p>
                    <a
                      href="#"
                      onClick={stop}
                      className={`mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-civic hover:text-sunset-orange ${focusRing}`}
                    >
                      Read more <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>

                {news.slice(1).map((n) => (
                  <article
                    key={n.title}
                    className="group flex gap-4 rounded-3xl border border-line bg-sand p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                  >
                    <img
                      src={n.img}
                      alt={n.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="hidden size-20 shrink-0 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 sm:block"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                        <span className="rounded-full bg-civic/10 px-2.5 py-0.5 text-civic">{n.category}</span>
                        <span className="text-foreground/55">{n.date}</span>
                      </div>
                      <h3 className="mt-2 text-sm font-bold leading-snug text-civic">{n.title}</h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-foreground/65">{n.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                role="tabpanel"
                id="panel-notices"
                aria-labelledby="tab-notices"
                className="mt-8 rounded-2xl border border-dashed border-civic/25 bg-sand px-6 py-16 text-center"
              >
                <Megaphone className="mx-auto size-8 text-civic/40" aria-hidden="true" />
                <p className="mt-4 text-base font-semibold text-civic">No public notices at this time</p>
                <p className="mt-1 text-sm text-foreground/60">
                  New notices are posted here and distributed through Notify Me.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Documents */}
        <section aria-labelledby="docs-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHeading
            id="docs-heading"
            eyebrow="Transparency"
            title="Public Documents Library"
            sub="Agendas, plans, reports, notices, and forms in one searchable place."
            action="View All Documents"
          />
          <form
            onSubmit={(e) => e.preventDefault()}
            role="search"
            className="mt-8 rounded-3xl border border-line bg-white p-4 shadow-soft"
          >
            <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-sand px-3">
              <Search className="size-4 shrink-0 text-civic/60" aria-hidden="true" />
              <label htmlFor="doc-search" className="sr-only">
                Search documents
              </label>
              <input
                id="doc-search"
                type="search"
                placeholder="Search documents by title, department, or keyword..."
                className={`min-w-0 flex-1 bg-transparent py-3 text-sm placeholder:text-foreground/45 ${focusRing} focus-visible:ring-offset-0`}
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={activeFilter === f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${focusRing} ${
                    activeFilter === f
                      ? "border-civic bg-civic text-white"
                      : "border-black/12 bg-white text-foreground/70 hover:border-civic/40 hover:text-civic"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </form>

          <ul className="mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            {documents.map((d) => (
              <li key={d.title} className="flex flex-wrap items-center gap-4 px-5 py-4 transition-colors hover:bg-sand">

                <span className="inline-flex items-center gap-2 rounded-md bg-sunset-orange/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-sunset-orange">
                  <FileText className="size-3.5" aria-hidden="true" /> PDF
                </span>
                <div className="min-w-[14rem] flex-1">
                  <p className="text-sm font-semibold text-civic">{d.title}</p>
                  <p className="mt-0.5 text-xs text-foreground/60">
                    {d.date} · {d.dept}
                  </p>
                </div>
                <a
                  href="#"
                  onClick={stop}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-md border border-civic/25 px-4 text-sm font-semibold text-civic hover:bg-civic hover:text-white ${focusRing}`}
                >
                  <Download className="size-4" aria-hidden="true" /> Download
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Meetings & events */}
        <section aria-labelledby="meetings-heading" className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <SectionHeading
              id="meetings-heading"
              eyebrow="Get the agenda"
              title="Meetings & Events"
              sub="Board and committee meetings are open to the public, in person and via Zoom."
              action="View Full Calendar"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[20rem_1fr]">
              <div className="h-fit rounded-3xl border border-line bg-sand p-5 shadow-soft lg:sticky lg:top-28">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-civic">September 2026</p>
                  <CalendarDays className="size-4 text-civic/60" aria-hidden="true" />
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-foreground/50">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
                <div className="mt-1 grid grid-cols-7 gap-1">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={`pad-${i}`} />
                  ))}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1;
                    const hasMeeting = meetingDays.includes(day);
                    const selected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        aria-pressed={selected}
                        aria-label={`September ${day}${hasMeeting ? ", has a meeting" : ""}`}
                        onClick={() => setSelectedDay(day)}
                        className={`relative aspect-square rounded-md text-xs font-medium transition-colors ${focusRing} ${
                          selected
                            ? "bg-civic text-white"
                            : hasMeeting
                              ? "bg-white text-civic ring-1 ring-civic/25 hover:bg-civic/10"
                              : "text-foreground/60 hover:bg-black/5"
                        }`}
                      >
                        {day}
                        {hasMeeting && !selected && (
                          <span className="absolute inset-x-0 bottom-1 mx-auto block size-1 rounded-full bg-sunset-orange" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-foreground/60">
                  <span className="mr-1 inline-block size-1.5 rounded-full bg-sunset-orange align-middle" />
                  Days with scheduled meetings
                </p>
              </div>

              <ul className="space-y-4">
                {meetings.map((m) => (
                  <li
                    key={m.name}
                    className="group flex flex-wrap items-center gap-5 rounded-3xl border border-line bg-sand p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                  >
                    <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-[linear-gradient(150deg,#094E77,#2C7C9C)] text-white shadow-soft">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Sep</span>
                      <span className="text-xl font-extrabold leading-none">{m.day}</span>

                    </div>
                    <div className="min-w-[14rem] flex-1">
                      <h3 className="text-base font-bold text-civic">{m.name}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/65">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5" aria-hidden="true" /> {m.date} · {m.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" aria-hidden="true" /> 555 E Weber Ave &amp; Zoom
                        </span>
                      </p>
                    </div>
                    <a
                      href="#"
                      onClick={stop}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-civic ring-1 ring-civic/25 hover:bg-civic hover:text-white ${focusRing}`}
                    >
                      <FileText className="size-4" aria-hidden="true" /> Agenda &amp; Packet
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Engagement banner */}
        <section aria-labelledby="engage-heading" className="relative overflow-hidden bg-[linear-gradient(110deg,#4B3B78_0%,#094E77_30%,#D9782D_78%,#E8A33D_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <h2 id="engage-heading" className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get Involved in Regional Decision-Making
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Public input shapes how billions in regional transportation and housing dollars are
              invested. Here are three ways to take part.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: ClipboardList,
                  title: "Take Active Surveys",
                  body: "Share your priorities for the next Regional Transportation Plan and Measure K renewal.",
                  cta: "Open surveys",
                },
                {
                  icon: Users,
                  title: "Attend a Public Hearing",
                  body: "Comment in person at 555 E Weber Ave or join any Board or committee meeting via Zoom.",
                  cta: "See schedule",
                },
                {
                  icon: BellRing,
                  title: "Subscribe via Notify Me",
                  body: "Get agendas, notices, and project updates delivered by email or text message.",
                  cta: "Sign up",
                },
              ].map(({ icon: Icon, title, body, cta }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/25 bg-white/12 p-6 shadow-float backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <Icon className="size-6 text-white" aria-hidden="true" />

                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{body}</p>
                  <a
                    href="#"
                    onClick={stop}
                    className={`mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-bold text-white underline underline-offset-4 ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                  >
                    {cta} <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sunset-orange">
                About SJCOG
              </p>
              <h2 id="about-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-civic sm:text-4xl">
                A joint-powers authority serving nine jurisdictions
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
                SJCOG serves as the region's Metropolitan Planning Organization, Regional
                Transportation Planning Agency, and Local Transportation Authority. The agency
                administers the Measure K half-cent transportation sales tax, coordinates regional
                air quality conformity, allocates housing need through the RHNA process, and
                implements the San Joaquin Multi-Species Habitat Conservation and Open Space Plan.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
                A Board of Directors made up of elected officials from each member jurisdiction
                sets policy, supported by technical, management, and citizens advisory committees
                that meet in public every month.
              </p>
              <a
                href="#"
                onClick={stop}
                className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-civic px-5 text-sm font-semibold text-white hover:bg-civic-dark ${focusRing}`}
              >
                Learn about our governance <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="space-y-4">
            <img
              src={aboutBoard}
              alt="SJCOG Board of Directors meeting in a civic council chamber"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-64 w-full rounded-3xl object-cover shadow-lift sm:h-72"
            />
            <dl className="grid grid-cols-2 gap-4">
              {[
                { k: "9", v: "Member jurisdictions" },
                { k: "1990", v: "Measure K first approved" },
                { k: "800K+", v: "Residents served" },
                { k: "25-yr", v: "RTP/SCS planning horizon" },
              ].map((s) => (
                <div key={s.v} className="rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <dt className="bg-[linear-gradient(120deg,#094E77,#2C7C9C)] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground/65">{s.v}</dd>
                </div>
              ))}

            </dl>
            </div>
          </div>
        </section>

        {/* Member agencies */}
        <section aria-labelledby="members-heading" className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 id="members-heading" className="text-center text-sm font-bold uppercase tracking-[0.16em] text-foreground/55">
              Our Member Agencies
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
              {memberAgencies.map((a) => (
                <li key={a} className="group flex flex-col items-center gap-3 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-line bg-sand text-xs font-extrabold text-civic transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[linear-gradient(150deg,#094E77,#2C7C9C)] group-hover:text-white group-hover:shadow-lift">

                    {a
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)}
                  </span>
                  <span className="text-xs font-semibold text-foreground/70">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-civic text-white">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#D9782D,#E8A33D,#4B3B78)]"
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" aria-hidden="true" className="size-12 rounded-full" />
              <span className="text-lg font-extrabold">SJCOG</span>
            </div>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                555 E Weber Ave
                <br />
                Stockton, CA 95202-2804
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href="#" onClick={stop} className={`rounded-sm hover:text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}>
                  209-235-0600
                </a>
              </p>
            </address>
          </div>

          <FooterColumn
            title="Quick Links"
            items={[
              "Agendas & Minutes",
              "Board & Committees",
              "Public Documents Library",
              "Careers",
              "Contact Us",
            ]}
          />
          <FooterColumn title="Programs" items={programsMenu.map((p) => p.label)} />

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h2>
            <ul className="mt-4 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={stop}
                    aria-label={["Facebook", "Instagram", "YouTube", "LinkedIn"][i]}
                    className={`inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-civic ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <label htmlFor="notify" className="text-sm font-semibold text-white">
                Notify Me
              </label>
              <p className="mt-1 text-xs text-white/70">
                Email updates on agendas, notices, and projects.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  id="notify"
                  type="email"
                  placeholder="you@email.com"
                  className={`min-w-0 flex-1 rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/55 ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                />
                <button
                  type="submit"
                  className={`rounded-md bg-sunset-amber px-4 py-2.5 text-sm font-bold text-civic-dark hover:bg-sunset-orange hover:text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-xs text-white/70 sm:px-6">
            <p>© 2026 San Joaquin Council of Governments. All rights reserved.</p>
            <ul className="flex flex-wrap gap-5">
              {["Site Map", "Accessibility Statement", "Privacy Policy", "Copyright Notices"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      onClick={stop}
                      className={`rounded-sm hover:text-white hover:underline ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub: string;
  action: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-sunset-orange">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[linear-gradient(90deg,#D9782D,#E8A33D)]"
          />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-civic sm:text-[2.6rem] sm:leading-[1.06]">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">{sub}</p>
      </div>
      <a
        href="#"
        onClick={stop}
        className={`group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2.5 text-sm font-bold text-civic transition-all hover:-translate-y-0.5 hover:bg-civic hover:text-white ${focusRing}`}
      >
        {action}{" "}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>

    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-white/80">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              onClick={stop}
              className={`rounded-sm hover:text-white hover:underline ${focusRing} focus-visible:ring-white focus-visible:ring-offset-civic`}
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`h-full transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
