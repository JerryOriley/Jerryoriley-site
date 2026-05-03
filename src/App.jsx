export default function App() {
  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #0f172a, #111827, #1e293b)",
      color: "#f8fafc",
      padding: "60px 24px",
    },
    container: { maxWidth: "1100px", margin: "0 auto" },
    hero: {
      padding: "60px",
      borderRadius: "28px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      marginBottom: "30px",
    },
    title: { fontSize: "54px", marginBottom: "10px" },
    subtitle: { fontSize: "22px", color: "#7dd3fc", marginBottom: "20px" },
    text: { fontSize: "18px", lineHeight: "1.7", color: "#cbd5e1" },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      marginTop: "25px",
    },
    card: {
      padding: "22px",
      borderRadius: "20px",
      background: "rgba(15,23,42,0.75)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    cardTitle: { fontSize: "18px", marginBottom: "10px", color: "#7dd3fc" },
    cardText: { fontSize: "15px", color: "#cbd5e1", lineHeight: "1.6" },

    section: {
      marginTop: "35px",
      padding: "30px",
      borderRadius: "24px",
      background: "rgba(15,23,42,0.78)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    sectionTitle: { fontSize: "32px", marginBottom: "16px" },
    list: { paddingLeft: "20px", lineHeight: "1.7", color: "#cbd5e1" },

    link: { color: "#7dd3fc", fontWeight: "bold" },
  };

  const skills = [
    {
      title: "Release Ownership",
      text: "Owns release validation, readiness, and production confidence for high-impact systems.",
    },
    {
      title: "Communication",
      text: "Bridges QA, development, and business teams with clear, direct communication.",
    },
    {
      title: "Test Planning",
      text: "Turns unclear requirements into structured, testable, and executable plans.",
    },
    {
      title: "API & Payments Testing",
      text: "Deep experience validating APIs, payment flows, gateways, and integrations.",
    },
    {
      title: "Automation",
      text: "Focuses on automating high-value, repeatable validation across environments.",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Jerry O'Riley</h1>

          <h2 style={styles.subtitle}>
            Senior QA Engineer focused on release quality, system reliability, and real-world impact.
          </h2>

          <p style={styles.text}>
            I specialize in owning quality across complex systems, especially where releases,
            integrations, and production risk matter. I work closely with teams to bring clarity,
            structure, and confidence to delivery — making sure what goes out actually works the way it should.
          </p>
        </section>

        {/* SKILL CARDS */}
        <section style={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} style={styles.card}>
              <div style={styles.cardTitle}>{skill.title}</div>
              <div style={styles.cardText}>{skill.text}</div>
            </div>
          ))}
        </section>

        {/* WHAT I DO */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What I Actually Do</h2>
          <ul style={styles.list}>
            <li>Take unclear requirements and turn them into testable, structured validation paths</li>
            <li>Own release readiness and ensure production deployments are stable</li>
            <li>Catch issues before they impact customers, data, or revenue</li>
            <li>Work across teams to align expectations and reduce ambiguity</li>
            <li>Bring real-world experience into testing decisions, not just theory</li>
          </ul>
        </section>

        {/* KEY WINS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Key Wins</h2>
          <ul style={styles.list}>
            <li>
              Prevented production impact by identifying legacy code that was sending ACH files
              from a DEV environment before release
            </li>
            <li>
              Saved a critical release when OKTA policy changes broke authentication, helping
              rebuild and validate a working solution overnight
            </li>
            <li>
              Led QA validation for data center migrations across applications, ensuring stable cutovers
            </li>
            <li>
              Built API testing coverage from scratch for an acquired platform, improving integration confidence
            </li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>

          <p><strong>Payroc — Senior QA Engineer / Quality & Delivery Lead </strong></p>
          <ul style={styles.list}>
            <li>Own quality across fintech applications including payments, APIs, and internal systems</li>
            <li>Lead release validation, test planning, and production readiness</li>
            <li>Build automation and API testing coverage across environments</li>
          </ul>

          <p><strong>AT&T — QA / Defect Management</strong></p>
          <ul style={styles.list}>
            <li>Supported QA for a large-scale TV platform across multiple teams</li>
            <li>Managed defects, coordinated releases, and validated production readiness</li>
            <li>Built deep experience in enterprise QA, release cycles, and cross-team coordination</li>
          </ul>
        </section>

        {/* CONTACT */}
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