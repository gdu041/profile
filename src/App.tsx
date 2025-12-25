const sections = [
  {
    title: "Webpage Development",
    subtitle: "Frontend, backend, full stack",
    stack: ["React", "TypeScript", "Rust", "Go", "Python", "PostgreSQL"],
    projects: [
      "Flight booking app",
      "Hospital booking management website",
      "Class ring sale website",
      "Profile websites"
    ]
  },
  {
    title: "THREE.JS · WebGL · GLSL",
    subtitle: "Interactive 2D/3D experiences",
    stack: ["Three.js", "WebGL", "GLSL"],
    projects: [
      "Online 3D ring configurator",
      "2D animation editor",
      "3D clothes configurator",
      "3D dental orthodontist tool",
      "2D games"
    ],
    links: [
      {
        label: "Ring configurator",
        href: "https://www.fischer-trauringe.de/konfischerator/configurator"
      },
      { label: "Archform", href: "https://www.archform.com/" }
    ]
  },
  {
    title: "AI/ML",
    subtitle: "Applied ML for product teams",
    stack: ["RAG", "Stable Diffusion"],
    projects: [
      "RAG (Retrieval Augmented Generation)",
      "Image generation using Stable Diffusion"
    ]
  },
  {
    title: "Blockchain Development",
    subtitle: "Smart contracts and ZKP research",
    stack: ["Rust", "Solidity", "JavaScript"],
    projects: [
      "Smart contract development",
      "ZKP (zero-knowledge proof) research and development"
    ]
  }
];

const highlights = [
  { label: "Focus", value: "Product-ready web experiences" },
  { label: "Specialties", value: "3D configurators, WebGL tooling" },
  { label: "AI/ML", value: "RAG systems + generative media" },
  { label: "Blockchain", value: "Rust & Solidity smart contracts" }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">GDUO41</p>
          <h1>Experiences &amp; Selected Work</h1>
          <p className="lead">
            Building user-focused web products, interactive 3D tooling, and
            applied AI/ML systems for modern teams.
          </p>
          <div className="hero__actions">
            <a className="button" href="#work">
              View work
            </a>
            <a className="button button--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero__card">
          {highlights.map((item) => (
            <div key={item.label} className="hero__stat">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </header>

      <section className="section section--grid" id="work">
        <div className="section__header">
          <h2>Experience Areas</h2>
          <p>
            A focused list of domains, stacks, and the projects that shaped my
            recent work.
          </p>
        </div>
        <div className="cards">
          {sections.map((section) => (
            <article key={section.title} className="card">
              <div className="card__title">
                <h3>{section.title}</h3>
                <span>{section.subtitle}</span>
              </div>
              <div className="card__stack">
                {section.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul>
                {section.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
              {section.links && (
                <div className="card__links">
                  {section.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <h2>What I deliver</h2>
          <p>
            From rapid prototypes to production-grade platforms, I align design,
            engineering, and performance so that launches feel crisp and reliable.
          </p>
        </div>
        <div className="pillars">
          <div>
            <h4>Product build</h4>
            <p>
              Hands-on engineering across UI, backend services, and deployment
              pipelines.
            </p>
          </div>
          <div>
            <h4>3D &amp; WebGL</h4>
            <p>
              Complex configurators and visualization tools with optimized WebGL
              pipelines.
            </p>
          </div>
          <div>
            <h4>Research to MVP</h4>
            <p>
              Translating AI/ML research into shippable workflows with measurable
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="contact__card">
          <h2>Let’s build together</h2>
          <p>
            Share a brief about your product or research and I’ll respond with an
            actionable plan.
          </p>
          <div className="contact__actions">
            <a className="button" href="mailto:hello@gduo41.com">
              hello@gduo41.com
            </a>
            <a className="button button--ghost" href="https://github.com/gduo41">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Gduo41</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  );
}
