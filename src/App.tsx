import { useEffect, useState } from "react";
import "./App.css";
import { useCountUp, useScrollProgress } from "./hooks";
import {
  Reveal,
  SpotlightCard,
  Magnetic,
  RotatingWord,
  HeroStage,
} from "./components";

const EMAIL = "rosanarosal1994@gmail.com";
const PHONE_DISPLAY = "0978 445 3552";
const PHONE_TEL = "+639784453552";

const competencies = [
  {
    icon: "✉",
    title: "Email & Calendar Management",
    desc: "Inbox triage, scheduling, reminders, and meeting coordination so nothing slips through the cracks.",
  },
  {
    icon: "▦",
    title: "Data Entry & Records",
    desc: "Accurate filing, spreadsheets, and database upkeep — organized with obsessive attention to detail.",
  },
  {
    icon: "✦",
    title: "Graphic Design & Copy",
    desc: "Canva-ready visuals, light copywriting, and polished branded documents that look the part.",
  },
  {
    icon: "✈",
    title: "Travel Management",
    desc: "Itineraries, bookings, and logistics handled start to finish, so your trips run effortlessly.",
  },
  {
    icon: "❡",
    title: "Documents & Spreadsheets",
    desc: "Reports, correspondence, and tidy files across Google Workspace or Microsoft Office.",
  },
  {
    icon: "◎",
    title: "Task Prioritization",
    desc: "Smart daily planning so you and your executives focus on the high-impact work first.",
  },
];

const tools = [
  "Google Workspace",
  "Microsoft Office",
  "Canva",
  "CapCut",
  "Trello",
  "Asana",
  "Slack",
  "Buffer",
];

const skills = [
  "Communication",
  "Time Management",
  "Organization",
  "Attention to Detail",
  "Problem Solving",
  "Adaptability",
  "Proactiveness",
  "Confidentiality",
  "Customer Service",
];

const process = [
  {
    no: "01",
    title: "Discovery call",
    desc: "We talk through your day-to-day, the tasks draining your time, and what success looks like for you.",
  },
  {
    no: "02",
    title: "Tailored plan",
    desc: "I map out which work to take off your plate first and the tools and rhythm we'll use to stay in sync.",
  },
  {
    no: "03",
    title: "Hands-off delivery",
    desc: "I get to work — inbox, calendar, docs, logistics — with clear updates so you can focus on growth.",
  },
];

const experience = [
  {
    role: "Administrative Clerk",
    org: "Pasig Local Government",
    period: "2023 – 2024",
    points: [
      "Managed filing, record keeping, and data entry to keep office operations running smoothly.",
      "Assisted customers and staff with inquiries in a professional, government-grade setting.",
      "Prepared and processed documents, reports, and correspondence.",
      "Maintained supply inventory and improved day-to-day office efficiency.",
    ],
  },
  {
    role: "Technical Support Representative",
    org: "Sterling Global Call Center",
    period: "2022",
    points: [
      "Troubleshot internet, software, and device issues over inbound support calls.",
      "Resolved technical concerns with a calm, customer-focused approach.",
      "Logged and tracked cases in CRM and ticketing systems.",
      "Consistently met or exceeded CSAT, resolution-time, and quality metrics.",
    ],
  },
];

const stats = [
  { value: 1, suffix: "+", label: "Years admin experience" },
  { value: 2, suffix: "", label: "Industries: Gov & BPO" },
  { value: 100, suffix: "%", label: "Remote-ready & confidential" },
  { value: 24, suffix: "h", label: "Response time" },
];

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <li>
      <strong ref={ref as React.RefObject<HTMLElement>}>
        {Math.round(animated)}
        {suffix}
      </strong>
      <span>{label}</span>
    </li>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${
          menuOpen ? " is-open" : ""
        }`}
      >
        <div className="container header-inner">
          <a
            href="#top"
            className="logo"
            aria-label="Rosana Rosal — Home"
            onClick={closeMenu}
          >
            <span className="logo-mark">R</span>
            <span className="logo-text">
              Rosana Rosal
              <small>Executive VA</small>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#process" onClick={closeMenu}>
              Process
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <Magnetic href="#contact" className="nav-cta" onClick={closeMenu}>
              Hire me
            </Magnetic>
          </nav>
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <button
          type="button"
          className="nav-scrim"
          aria-hidden={!menuOpen}
          tabIndex={-1}
          onClick={closeMenu}
        />
      </header>

      <main id="main">
        <span id="top" />

        {/* ---------- HERO ---------- */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-bg" aria-hidden="true">
            <span className="blob blob-1" />
            <span className="blob blob-2" />
            <div className="hero-noise" />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal-pop">
                <span className="pulse-dot" /> Available for new clients · Metro
                Manila
              </p>
              <h1 id="hero-heading">
                <span className="line">I keep your</span>
                <span className="line">
                  <em>
                    <RotatingWord
                      words={[
                        "inbox",
                        "calendar",
                        "schedule",
                        "operations",
                        "whole day",
                      ]}
                    />
                  </em>
                </span>
                <span className="line">beautifully organized.</span>
              </h1>
              <p className="hero-lead">
                I'm Rosana — an executive virtual assistant who handles the
                admin, scheduling, and operations behind the scenes, so you get
                your time back and focus on growth.
              </p>
              <div className="hero-actions">
                <Magnetic href="#contact" className="btn btn-primary">
                  Book a free consult
                </Magnetic>
                <a href="#services" className="btn btn-ghost">
                  View services
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <ul className="hero-stats" aria-label="Highlights">
                {stats.map((s) => (
                  <Stat key={s.label} {...s} />
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <HeroStage />
            </div>
          </div>

          <a href="#services" className="scroll-cue" aria-label="Scroll down">
            <span className="scroll-cue-track">
              <span className="scroll-cue-dot" />
            </span>
          </a>
        </section>

        {/* ---------- TOOLS MARQUEE ---------- */}
        <section className="marquee-section" aria-label="Tools I use">
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...tools, ...tools].map((tool, i) => (
                <span className="marquee-item" key={`${tool}-${i}`}>
                  {tool}
                  <span className="marquee-dot" aria-hidden="true">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
          <ul className="sr-only">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="section" aria-labelledby="services-heading">
          <div className="container">
            <header className="section-head">
              <Reveal as="p" className="eyebrow">
                <span className="eyebrow-line" /> What I do
              </Reveal>
              <Reveal as="h2" delay={80}>
                <span id="services-heading">
                  Core competencies clients hire me for
                </span>
              </Reveal>
              <Reveal as="p" delay={140} className="section-desc">
                Structured support across admin, creative, and operations —
                delivered with the professionalism you can trust with your
                business.
              </Reveal>
            </header>
            <ul className="card-grid">
              {competencies.map((item, i) => (
                <SpotlightCard key={item.title} delay={i * 70} className="card-li">
                  <span className="card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </SpotlightCard>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- PROCESS ---------- */}
        <section id="process" className="section section-alt" aria-labelledby="process-heading">
          <div className="container">
            <header className="section-head center">
              <Reveal as="p" className="eyebrow center">
                <span className="eyebrow-line" /> How it works
              </Reveal>
              <Reveal as="h2" delay={80} className="center">
                <span id="process-heading">How we'll work together</span>
              </Reveal>
              <Reveal as="p" delay={140} className="section-desc center">
                Getting started is simple. Three steps from first hello to a
                lighter workload.
              </Reveal>
            </header>
            <ol className="process-grid">
              {process.map((step, i) => (
                <Reveal as="li" key={step.no} delay={i * 90} className="process-step">
                  <span className="process-no" aria-hidden="true">
                    {step.no}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="section" aria-labelledby="exp-heading">
          <div className="container">
            <header className="section-head">
              <Reveal as="p" className="eyebrow">
                <span className="eyebrow-line" /> Track record
              </Reveal>
              <Reveal as="h2" delay={80}>
                <span id="exp-heading">Professional experience</span>
              </Reveal>
            </header>
            <ol className="timeline">
              {experience.map((job) => (
                <Reveal as="li" key={job.org} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true">
                    <span />
                  </div>
                  <div className="timeline-body">
                    <span className="timeline-period">{job.period}</span>
                    <h3>{job.role}</h3>
                    <p className="timeline-org">{job.org}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="section section-alt" aria-labelledby="about-heading">
          <div className="container about-grid">
            <div className="about-main">
              <Reveal as="p" className="eyebrow">
                <span className="eyebrow-line" /> About me
              </Reveal>
              <Reveal as="h2" delay={80}>
                <span id="about-heading">
                  Detail-oriented. Reliable. Executive-ready.
                </span>
              </Reveal>
              <Reveal as="div" delay={140} className="about-copy">
                <p>
                  I'm a detail-oriented and reliable virtual assistant with over
                  a year of administrative experience and a strong background in
                  customer service. My time in a local government office and as a
                  call center agent taught me to stay calm under pressure,
                  communicate clearly, and protect sensitive information.
                </p>
                <p>
                  I love helping business owners stay organized, respond
                  quickly, and feel supported — whether that means managing
                  calendars, preparing documents, or coordinating behind-the-
                  scenes logistics. My goal is to save you time and energy so you
                  can grow your business.
                </p>
              </Reveal>
            </div>
            <Reveal as="aside" delay={120} variant="scale" className="skills-panel">
              <h3 id="skills-heading">Soft skills</h3>
              <ul className="skills-list">
                {skills.map((skill, i) => (
                  <li key={skill} style={{ transitionDelay: `${i * 50}ms` }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- CONTACT CTA ---------- */}
        <section id="contact" className="section cta-section" aria-labelledby="contact-heading">
          <div className="container">
            <Reveal variant="scale" className="cta-card">
              <div className="cta-bg" aria-hidden="true">
                <span className="blob blob-cta" />
                <div className="hero-noise" />
              </div>
              <div className="cta-inner">
                <div className="cta-text">
                  <p className="eyebrow light">
                    <span className="eyebrow-line light" /> Work with me
                  </p>
                  <h2 id="contact-heading">Let's streamline your week.</h2>
                  <p>
                    Tell me what you'd like off your plate — admin, scheduling,
                    content, or operations support. I respond within one business
                    day.
                  </p>
                </div>
                <div className="cta-actions">
                  <Magnetic
                    href={`mailto:${EMAIL}`}
                    className="btn btn-light btn-lg"
                  >
                    Email Rosana
                  </Magnetic>
                  <a href={`tel:${PHONE_TEL}`} className="btn btn-outline btn-lg">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="cta-meta">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <span>Metro Manila, Philippines</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#top" className="logo logo-foot">
            <span className="logo-mark">R</span>
            <span className="logo-text">Rosana Rosal</span>
          </a>
          <p>
            © {new Date().getFullYear()} Rosana Rosal · Executive Virtual
            Assistant
          </p>
          <a href={`mailto:${EMAIL}`} className="footer-link">
            Get in touch →
          </a>
        </div>
      </footer>
    </>
  );
}
