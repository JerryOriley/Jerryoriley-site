import { useState } from "react";

export default function App() {
  const [hoveredCard, setHoveredCard] = useState({ title: null, x: 0, y: 0 });

  const styles = {
    page: {
      position: "relative",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background:
        "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 30%), linear-gradient(135deg, #0f172a, #111827, #1e293b)",
      color: "#f8fafc",
      padding: "60px 24px",
      overflow: "hidden",
    },
    container: { maxWidth: "1120px", margin: "0 auto" },
    hero: {
      padding: "60px",
      borderRadius: "30px",
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.14)",
      marginBottom: "30px",
      boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
    },
    badge: {
      display: "inline-block",
      padding: "9px 14px",
      borderRadius: "999px",
      background: "rgba(253,224,71,0.16)",
      border: "1px solid rgba(253,224,71,0.35)",
      color: "#fef08a",
      marginBottom: "18px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    title: { fontSize: "56px", margin: "0 0 10px" },
    subtitle: { fontSize: "23px", color: "#7dd3fc", marginBottom: "20px" },
    text: { fontSize: "18px", lineHeight: "1.7", color: "#cbd5e1" },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "22px",
      marginTop: "25px",
    },
    note: {
      padding: "24px",
      borderRadius: "18px",
      minHeight: "150px",
      color: "#172033",
      boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
      transition: "transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease",
      transform: "rotate(-1deg)",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(12px)",
      cursor: "pointer",
      overflow: "hidden",
    },
    noteTitle: {
      fontSize: "19px",
      marginBottom: "10px",
      fontWeight: "800",
    },
    noteText: {
      fontSize: "15px",
      lineHeight: "1.55",
      color: "#1e293b",
    },

    section: {
      marginTop: "35px",
      padding: "32px",
      borderRadius: "26px",
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(255,255,255,0.12)",
    },
    sectionTitle: { fontSize: "32px", marginBottom: "16px" },
    list: { paddingLeft: "20px", lineHeight: "1.75", color: "#cbd5e1" },
    toolGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "14px",
      marginTop: "20px",
    },
    toolPill: {
      padding: "14px 16px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      color: "#e2e8f0",
      fontSize: "15px",
      fontWeight: "700",
      textAlign: "center",
    },
    winGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    link: { color: "#7dd3fc", fontWeight: "bold" },
  };

  const getCardStyle = (skill) => {
    const active = hoveredCard.title === skill.title;
    const rotateX = active ? hoveredCard.y * 18 : 0;
    const rotateY = active ? hoveredCard.x * 18 : 0;

    return {
      ...styles.note,
      background: `radial-gradient(circle at top left, rgba(255,255,255,0.22), transparent 28%), ${skill.color}`,
      transform: `perspective(900px) rotate(${skill.rotate}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: active
        ? "0 35px 110px rgba(15, 23, 42, 0.42)"
        : "0 18px 40px rgba(0,0,0,0.28)",
      filter: active ? "saturate(1.05)" : "none",
    };
  };

  const handleCardMove = (event, title) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;

    setHoveredCard({ title, x, y });
  };

  const resetCard = () => setHoveredCard({ title: null, x: 0, y: 0 });

  const skills = [
    {
      title: "Release Ownership",
      text: "Owns release validation, readiness, and production confidence for high-impact systems.",
      color: "#fde68a",
      rotate: "-1.5deg",
    },
    {
      title: "Test Planning",
      text: "Turns unclear requirements into structured, testable, and executable validation paths.",
      color: "#bbf7d0",
      rotate: "-0.5deg",
    },
    {
      title: "API & Payments Testing",
      text: "Deep experience validating APIs, payment flows, gateways, merchant workflows, and integrations.",
      color: "#fecdd3",
      rotate: "1.5deg",
    },
    {
      title: "Automation",
      text: "Focuses automation on high-value, repeatable testing across Dev, UAT, and Production environments.",
      color: "#ddd6fe",
      rotate: "-1deg",
    },
  ];

  const wins = [
    {
      title: "Caught Production Risk Early",
      text: "Identified legacy code that was sending ACH files from a DEV environment before it reached production.",
      color: "#fed7aa",
      rotate: "1deg",
    },
    {
      title: "Data Center Migration QA",
      text: "Led QA validation across application migrations, helping ensure stable cutovers and release confidence.",
      color: "#a7f3d0",
      rotate: "-1deg",
    },
    {
      title: "API Testing From Scratch",
      text: "Built API testing coverage for an acquired platform, improving integration and payment workflow confidence.",
      color: "#bae6fd",
      rotate: "1.3deg",
    },
  ];

  const tools = [
    "API Testing",
    "Postman",
    "Swagger / OpenAPI",
    "SQL Validation",
    "Payments & ACH",
    "Gateway Integrations",
    "Jira",
    "Azure DevOps",
    "UAT / PROD Validation",
    "Release Readiness",
    "Defect Management",
    "Regression Planning",
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero} className="hero-section">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-ring" aria-hidden="true" />
          <div style={styles.badge}>Senior QA Engineer · Release Quality · FinTech · Telecom</div>

          <h1 style={styles.title}>Jerry O'Riley</h1>

          <h2 style={styles.subtitle}>
            Senior QA Engineer specializing in release quality, payments systems,
            API testing, and production risk reduction.
          </h2>

          <p style={styles.text}>
            I specialize in owning quality across complex systems, especially where releases,
            integrations, and production risk matter. I work closely with teams to bring clarity,
            structure, and confidence to delivery, making sure what goes out actually works the way it should.
          </p>
        </section>

        <section style={styles.grid}>
          {skills.map((skill) => (
            <div
              key={skill.title}
              style={getCardStyle(skill)}
              className="interactive-card"
              onMouseMove={(event) => handleCardMove(event, skill.title)}
              onMouseLeave={resetCard}
            >
              <div style={styles.noteTitle}>{skill.title}</div>
              <div style={styles.noteText}>{skill.text}</div>
            </div>
          ))}
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What I Actually Do</h2>
          <ul style={styles.list}>
            <li>Take unclear requirements and turn them into testable, structured validation paths</li>
            <li>Own release readiness and help ensure production deployments are stable</li>
            <li>Catch issues before they impact customers, data, or revenue</li>
            <li>Work across teams to align expectations and reduce ambiguity</li>
            <li>Bring product knowledge, release experience, and practical judgment into testing decisions</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tools & Focus Areas</h2>

          <p style={styles.text}>
            Practical testing experience across financial systems, integrations, releases,
            and the tools teams use to ship with confidence.
          </p>

          <div style={styles.toolGrid}>
            {tools.map((tool) => (
              <div key={tool} style={styles.toolPill}>
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Key Wins</h2>

          <div style={styles.winGrid}>
            {wins.map((win) => (
              <div
                key={win.title}
                style={getCardStyle(win)}
                className="interactive-card"
                onMouseMove={(event) => handleCardMove(event, win.title)}
                onMouseLeave={resetCard}
              >
                <div style={styles.noteTitle}>{win.title}</div>
                <div style={styles.noteText}>{win.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>

          <p>
            <strong>Payroc — Senior QA Engineer / Quality & Delivery Lead</strong>
          </p>
          <ul style={styles.list}>
            <li>Own quality across fintech applications including payments, APIs, gateways, and internal systems</li>
            <li>Lead release validation, test planning, and production readiness</li>
            <li>Build automation and API testing coverage across environments</li>
            <li>Partner with product, development, and business teams to reduce ambiguity and improve release confidence</li>
          </ul>

          <p>
            <strong>AT&T — QA / Defect Management</strong>
          </p>
          <ul style={styles.list}>
            <li>Supported QA for a large-scale TV platform across multiple teams</li>
            <li>Managed defects, coordinated releases, and validated production readiness</li>
            <li>Built deep experience in enterprise QA, release cycles, and cross-team coordination</li>
            <li>Worked with teams to understand product behavior, reproduce issues, validate fixes, and keep delivery moving</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <p style={styles.text}>
            Open to Senior QA Engineer, Quality Engineering, and QA leadership roles.
          </p>

          <p>
            Resume:{" "}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>
              View / Download
            </a>
          </p>

          <p>
            Email:{" "}
            <span style={styles.link}>
              {"jerr" + ".oriley" + "@" + "gmail" + "." + "com"}
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
