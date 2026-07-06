import {
  ArrowDown,
  ArrowRight,
  Bike,
  Bot,
  Boxes,
  BrainCircuit,
  Car,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Globe2,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trees,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

const capabilities = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality Strategy",
    text: "Building test strategies that reduce risk, expose uncertainty, and improve release confidence.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Release Ownership",
    text: "Guiding high-impact releases from planning through production validation.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Test Automation",
    text: "Automating repeatable validation across APIs, integrations, and critical user flows.",
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "AI-Assisted Engineering",
    text: "Using AI to increase coverage, accelerate investigation, and improve engineering velocity.",
  },
];

const metrics = [
  { value: "18+", label: "Years in technology", icon: Cpu },
  { value: "10K+", label: "Users on supported platforms", icon: Network },
  { value: "300+", label: "Deployed instances", icon: Boxes },
  { value: "E2E", label: "Release ownership from requirements to production", icon: Zap },
];

const experience = [
  {
    company: "AT&T",
    years: "2008 — 2020",
    role: "QA / Defect Management",
    points: [
      "Firmware and multi-browser validation",
      "Automation tasks and requirements analysis",
      "Defect management and release coordination",
      "Field training in copper splicing and home installation",
    ],
  },
  {
    company: "Payroc",
    years: "2020 — Present",
    role: "Senior QA Engineer",
    points: [
      "Manual and exploratory testing across payment workflows",
      "API, gateway, merchant, and integration validation",
      "Release ownership across DEV, UAT, and production",
      "Automation strategy and repeatable regression coverage",
      "Requirements analysis and cross-team delivery leadership",
    ],
  },
];

const interests = [
  { icon: Car, title: "Automotive", text: "Building a 1JZ GS300 with an 8HP transmission and an EcoBoost/CD009 240SX, plus competing with a drift team at grassroots events and track days." },
  { icon: CircuitBoard, title: "Electronics", text: "ESP boards, CAN bus, custom dashboards, sensors, and embedded problem-solving." },
  { icon: Wrench, title: "Fabrication", text: "Welding, CAD, 3D printing, and building practical solutions that last." },
  { icon: Hammer, title: "Home + DIY", text: "Woodworking, smart-home tech, networking, and full kitchen, bathroom, and flooring renovations." },
  { icon: Bike, title: "BMX", text: "Street, park, and dirt riding, plus hands-on work helping build a bike park." },
  { icon: Trees, title: "Home + Land", text: "Maintaining and improving the property inside and out, from repairs and renovations to landscaping and ongoing outdoor projects." },
];

const projects = [
  {
    id: "P-01",
    title: "Automotive Builds",
    text: "A 1JZ-powered Lexus GS300 with an 8HP transmission, plus a 240SX EcoBoost build with a CD009 gearbox.",
    icon: Car,
    status: "IN PROGRESS",
  },
  {
    id: "P-02",
    title: "ESP Dash Display",
    text: "A custom ESP32 dashboard with CAN integration and real-time telemetry data.",
    icon: CircuitBoard,
    status: "PROTOTYPING",
  },
  {
    id: "P-03",
    title: "Shed / Theater Lab",
    text: "Designing and building a small multifunctional space from the ground up.",
    icon: Boxes,
    status: "BUILDING",
  },
  {
    id: "P-04",
    title: "Network Lab",
    text: "Home network design, troubleshooting, segmentation, and constant optimization.",
    icon: Network,
    status: "ALWAYS ON",
  },
];

const navItems = [
  ["About", "hero"],
  ["Experience", "journey"],
  ["Beyond QA", "beyond"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const sceneIds = ["hero", "capabilities", "impact", "journey", "beyond", "projects", "contact"];

function SectionHeading({ number, eyebrow, title, copy }) {
  return (
    <header className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </header>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyMode, setStoryMode] = useState(() => window.matchMedia("(min-width: 1001px)").matches);
  const [activeScene, setActiveScene] = useState(() => {
    const hashScene = sceneIds.indexOf(window.location.hash.replace("#", ""));
    return hashScene >= 0 ? hashScene : 0;
  });
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);
  const goToScene = (id) => {
    const targetIndex = sceneIds.indexOf(id);

    if (targetIndex < 0) return;

    window.history.replaceState(null, "", `#${id}`);

    if (storyMode) {
      setActiveScene(targetIndex);
      closeMenu();
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const scenes = Array.from(document.querySelectorAll(".scroll-scene"));
    const targetTop = scenes
      .slice(0, targetIndex)
      .reduce((total, scene) => total + scene.offsetHeight, 0);

    window.scrollTo({
      top: Math.max(0, targetTop - (targetIndex > 0 ? (window.innerWidth <= 760 ? 62 : 72) : 0)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
    closeMenu();
  };

  const scrollToScene = (event, id) => {
    event.preventDefault();
    goToScene(id);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1001px)");
    const updateMode = (event) => setStoryMode(event.matches);

    mediaQuery.addEventListener("change", updateMode);

    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("story-mode", storyMode);
    return () => document.body.classList.remove("story-mode");
  }, [storyMode]);

  useEffect(() => {
    if (!storyMode) return undefined;

    let lastWheelEvent = 0;
    let keyLocked = false;
    let keyTimer;
    const moveScene = (direction) => {
      setActiveScene((current) => Math.max(0, Math.min(sceneIds.length - 1, current + direction)));
    };
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 12) return;
      event.preventDefault();
      const newGesture = event.timeStamp - lastWheelEvent > 80;
      lastWheelEvent = event.timeStamp;
      if (!newGesture) return;
      moveScene(event.deltaY > 0 ? 1 : -1);
    };
    const handleKeyDown = (event) => {
      const nextKeys = ["ArrowDown", "PageDown", " "];
      const previousKeys = ["ArrowUp", "PageUp"];
      if (!nextKeys.includes(event.key) && !previousKeys.includes(event.key)) return;
      event.preventDefault();
      if (keyLocked) return;
      keyLocked = true;
      moveScene(nextKeys.includes(event.key) ? 1 : -1);
      window.clearTimeout(keyTimer);
      keyTimer = window.setTimeout(() => { keyLocked = false; }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(keyTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [storyMode]);

  useEffect(() => {
    if (!storyMode) return;
    window.history.replaceState(null, "", `#${sceneIds[activeScene]}`);
  }, [activeScene, storyMode]);

  const sceneMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0.35, y: 64, scale: 0.99 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { amount: 0.1, once: false },
        transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
      };
  const sceneMotionFor = (index) => storyMode
    ? {
        initial: false,
        animate: activeScene === index
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: activeScene > index ? -90 : 90, scale: 0.97 },
        transition: { duration: reduceMotion ? 0 : 0.56, ease: [0.22, 1, 0.36, 1] },
        "aria-hidden": activeScene !== index,
        style: { pointerEvents: activeScene === index ? "auto" : "none" },
      }
    : sceneMotion;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#hero">Skip to content</a>

      <header className="topbar">
        <a className="brand-mark" href="#hero" onClick={(event) => scrollToScene(event, "hero")} aria-label="Jerry O'Riley home">
          JO<span className="brand-dot" />
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(event) => scrollToScene(event, id)}>{label}</a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume <Download size={14} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main className={storyMode ? "story-stage" : undefined}>
        <motion.section className="hero-section scroll-scene" id="hero" {...sceneMotionFor(0)}>
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span /> Senior QA Engineer</p>
            <h1>Jerry<br />O’Riley</h1>
            <p className="hero-statement">I bring clarity to complex systems. And build better ways forward.</p>
            <p className="hero-summary">
              Quality strategist, automation builder, and practical problem solver working across payments,
              APIs, complex releases, and the systems behind them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey" onClick={(event) => scrollToScene(event, "journey")}>View experience <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="#contact" onClick={(event) => scrollToScene(event, "contact")}>Contact me <Mail size={17} /></a>
            </div>
          </div>

          <div className="hero-system" aria-hidden="true">
            <div className="system-label label-top">SYS.QA / ACTIVE</div>
            <div className="orbit orbit-one"><span /></div>
            <div className="orbit orbit-two"><span /></div>
            <div className="orbit orbit-three"><span /></div>
            <div className="system-core"><CheckCircle2 size={30} /></div>
            <div className="node node-a" />
            <div className="node node-b" />
            <div className="node node-c" />
            <div className="node node-d" />
            <div className="connector connector-a" />
            <div className="connector connector-b" />
            <div className="system-label label-bottom">RELEASE CONFIDENCE: 99.9%</div>
          </div>

          <a className="scroll-cue" href="#capabilities" onClick={(event) => scrollToScene(event, "capabilities")} aria-label="Scroll to capabilities">
            <span>Scroll</span><ArrowDown size={16} />
          </a>
        </motion.section>

        <motion.section className="content-section scroll-scene" id="capabilities" {...sceneMotionFor(1)}>
          <SectionHeading
            number="02"
            eyebrow="What I do"
            title="Quality that moves delivery forward."
            copy="I work where product knowledge, technical testing, and release judgment overlap."
          />
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text }) => (
              <article className="capability-card" key={title}>
                <div className="card-topline"><span>{number}</span><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowRight className="card-arrow" size={18} />
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="content-section metrics-section scroll-scene" id="impact" {...sceneMotionFor(2)}>
          <SectionHeading number="03" eyebrow="Impact / numbers" title="Experience measured in real systems." />
          <div className="metrics-grid">
            {metrics.map(({ value, label, icon: Icon }) => (
              <article className="metric" key={label}>
                <Icon size={22} />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="content-section journey-section scroll-scene" id="journey" {...sceneMotionFor(3)}>
          <SectionHeading
            number="04"
            eyebrow="Career journey"
            title="Built through ownership."
            copy="From large-scale telecom platforms to high-stakes payment systems."
          />
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-card" key={job.company}>
                <div className="timeline-node" />
                <div className="timeline-meta"><span>{job.years}</span><span>EMPLOYMENT.LOG</span></div>
                <h3>{job.company}</h3>
                <p className="timeline-role">{job.role}</p>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
            <article className="timeline-card next-card">
              <div className="timeline-node" />
              <div className="timeline-meta"><span>FOUNDER / OPERATOR</span><span>OWNER-BUILT</span></div>
              <Sparkles size={30} />
              <h3>Rough Break LLC</h3>
              <p>Started and run an independent LLC, owning the work from planning and customer communication through hands-on execution and delivery.</p>
              <a href="#contact" onClick={(event) => scrollToScene(event, "contact")}>Built from the ground up <ArrowRight size={15} /></a>
            </article>
          </div>
        </motion.section>

        <motion.section className="content-section beyond-section scroll-scene" id="beyond" {...sceneMotionFor(4)}>
          <SectionHeading
            number="05"
            eyebrow="Beyond QA"
            title="Always building something."
            copy="The same curiosity I bring to software follows me into machines, electronics, fabrication, homes, and land."
          />
          <div className="interest-strip">
            {interests.map(({ icon: Icon, title, text }) => (
              <article className="interest-card" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="content-section projects-section scroll-scene" id="projects" {...sceneMotionFor(5)}>
          <SectionHeading
            number="06"
            eyebrow="Currently building"
            title="Projects from the workbench."
            copy="A few active builds where software, hardware, and stubborn persistence meet."
          />
          <div className="projects-grid">
            {projects.map(({ id, title, text, icon: Icon, status }) => (
              <article className="project-card" key={title}>
                <div className="project-visual">
                  <span className="project-id">{id}</span>
                  <Icon size={58} strokeWidth={1.1} />
                  <div className="scan-line" />
                </div>
                <div className="project-body">
                  <span className="project-status">{status}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="contact-section scroll-scene" id="contact" {...sceneMotionFor(6)}>
          <div className="contact-copy">
            <p className="eyebrow"><span /> Let’s connect</p>
            <h2>Have a complex system that needs clarity?</h2>
            <p>I’m open to Senior QA, Quality Engineering, release leadership, and hands-on technical roles.</p>
            <div className="contact-list">
              <a href="mailto:jerr.oriley@gmail.com"><Mail size={18} /> jerr.oriley@gmail.com</a>
              <span><MapPin size={18} /> Chicago area / Remote</span>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={18} /> Download resume</a>
            </div>
          </div>
          <div className="contact-panel">
            <div className="availability"><span /> AVAILABLE FOR THE RIGHT ROLE</div>
            <Bot size={42} />
            <p>Release quality. Production confidence. Better systems.</p>
            <a className="button button-primary" href="mailto:jerr.oriley@gmail.com">Start a conversation <ArrowRight size={17} /></a>
            <div className="social-links">
              <a href="https://github.com/JerryOriley" target="_blank" rel="noreferrer" aria-label="GitHub"><Globe2 size={18} /></a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume"><Download size={18} /></a>
              <a href="mailto:jerr.oriley@gmail.com" aria-label="Email"><ExternalLink size={18} /></a>
            </div>
          </div>
        </motion.section>
      </main>

      {storyMode && (
        <aside className="scene-progress" aria-label="Page sections">
          {sceneIds.map((id, index) => (
            <button
              key={id}
              type="button"
              className={activeScene === index ? "is-active" : ""}
              aria-label={`Go to section ${index + 1}`}
              aria-current={activeScene === index ? "step" : undefined}
              onClick={() => goToScene(id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </aside>
      )}

      <footer>
        <span>© 2026 Jerry O’Riley</span>
        <span>DESIGNED / BUILT / ITERATING</span>
        <a href="#hero" onClick={(event) => scrollToScene(event, "hero")}>Back to top <ArrowDown className="up-arrow" size={14} /></a>
      </footer>
    </div>
  );
}

export default App;
