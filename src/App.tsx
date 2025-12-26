import { useEffect, useState } from "react";

const sections = [
  {
    title: "Webpage Development",
    subtitle: "Frontend, backend, full stack",
    stack: ["React", "TypeScript", "Rust", "Go", "Python", "PostgreSQL"],
    projects: [
      {
        title: "Flight booking app",
        summary: "Placeholder description for a booking platform project.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/flight-booking",
        screenshots: ["/placeholders/flight-booking-1.png"]
      },
      {
        title: "Hospital booking management website",
        summary: "Placeholder description for healthcare scheduling software.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/hospital-booking",
        screenshots: ["/placeholders/hospital-booking-1.png"]
      },
      {
        title: "Class ring sale website",
        summary: "Placeholder description for a commerce storefront.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/class-ring",
        screenshots: ["/placeholders/class-ring-1.png"]
      },
      {
        title: "Profile websites",
        summary: "Placeholder description for personal branding sites.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/profile-sites",
        screenshots: ["/placeholders/profile-sites-1.png"]
      }
    ]
  },
  {
    title: "THREE.JS · WebGL · GLSL",
    subtitle: "Interactive 2D/3D experiences",
    stack: ["Three.js", "WebGL", "GLSL"],
    projects: [
      {
        title: "Online 3D ring configurator",
        summary: "Placeholder description for a real-time configurator.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://www.fischer-trauringe.de/konfischerator/configurator",
        screenshots: ["/placeholders/ring-configurator-1.png"]
      },
      {
        title: "2D animation editor",
        summary: "Placeholder description for a timeline-based editor.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/2d-animation-editor",
        screenshots: ["/placeholders/2d-animation-1.png"]
      },
      {
        title: "3D clothes configurator",
        summary: "Placeholder description for a garment configurator.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/3d-clothes",
        screenshots: ["/placeholders/3d-clothes-1.png"]
      },
      {
        title: "3D dental orthodontist tool",
        summary: "Placeholder description for a dental visualization tool.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://www.archform.com/",
        screenshots: ["/placeholders/dental-tool-1.png"]
      },
      {
        title: "2D games",
        summary: "Placeholder description for interactive 2D games.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/2d-games",
        screenshots: ["/placeholders/2d-games-1.png"]
      }
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
      {
        title: "RAG (Retrieval Augmented Generation)",
        summary: "Placeholder description for RAG workflows.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/rag",
        screenshots: ["/placeholders/rag-1.png"]
      },
      {
        title: "Image generation using Stable Diffusion",
        summary: "Placeholder description for generative imaging.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/stable-diffusion",
        screenshots: ["/placeholders/stable-diffusion-1.png"]
      }
    ]
  },
  {
    title: "Blockchain Development",
    subtitle: "Smart contracts and ZKP research",
    stack: ["Rust", "Solidity", "JavaScript"],
    projects: [
      {
        title: "Smart contract development",
        summary: "Placeholder description for contract development work.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/smart-contracts",
        screenshots: ["/placeholders/smart-contracts-1.png"]
      },
      {
        title: "ZKP (zero-knowledge proof) research and development",
        summary: "Placeholder description for ZKP research.",
        details: [
          "Role: Placeholder role description.",
          "Scope: Placeholder scope and responsibilities.",
          "Outcome: Placeholder measurable outcome."
        ],
        link: "https://example.com/zkp-research",
        screenshots: ["/placeholders/zkp-1.png"]
      }
    ]
  }
];

const highlights = [
  { label: "Focus", value: "Product-ready web experiences" },
  { label: "Specialties", value: "3D configurators, WebGL tooling" },
  { label: "AI/ML", value: "RAG systems + generative media" },
  { label: "Blockchain", value: "Rust & Solidity smart contracts" }
];

const videos = [
  {
    title: "RNA Editing Demonstration",
    url: "https://www.youtube.com/watch?v=TUOdb776q5U"
  },
  {
    title: "Digital Dentistry Tool",
    url: "https://www.youtube.com/watch?v=ftvtHm5kJ2c"
  },
  {
    title: "Table Design Tool",
    url: "https://www.youtube.com/watch?v=SIEU4Sq0U4I"
  },
  {
    title: "Area calculation on 2D map",
    url: "https://www.youtube.com/watch?v=_uhLyZuNyOI"
  },
  {
    title: "Digital Orthodontic Treatment Tool",
    url: "https://www.youtube.com/watch?v=47NOPCFJKGI"
  },
  {
    title: "Table Design Tool",
    url: "https://www.youtube.com/watch?v=SIEU4Sq0U4I"
  },
];

export default function App() {
  const [activeProject, setActiveProject] = useState<{
    title: string;
    summary: string;
    details: string[];
    link: string;
    screenshots: string[];
  } | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject]);
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">GDU041</p>
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
              <div className="project-list">
                {section.projects.map((project) => {
                  return (
                    <div key={project.title} className="project-item">
                      <button
                        className="project-toggle"
                        type="button"
                        onClick={() => setActiveProject(project)}
                      >
                        <span>{project.title}</span>
                        <span className="project-toggle__icon">+</span>
                      </button>
                    </div>
                  );
                })}
              </div>
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

      <section className="section section--videos" id="videos">
        <div className="section__header">
          <h2>Video Highlights</h2>
          <p>
            Short demos and walkthroughs of recent product and technical work.
          </p>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <article key={video.title} className="video-card">
              <div className="video-frame">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3>{video.title}</h3>
            </article>
          ))}
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
            <a className="button" href="mailto:hmh2175377@gmail.com">
              hmh2175377@gmail.com
            </a>
            <a className="button button--ghost" href="https://github.com/gdu041">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Gdu041</span>
        <span>Built with React + TypeScript</span>
      </footer>
      {activeProject && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} details`}
        >
          <button
            className="modal__backdrop"
            type="button"
            onClick={() => setActiveProject(null)}
            aria-label="Close project details"
          />
          <div className="modal__content">
            <header className="modal__header">
              <div>
                <p className="eyebrow">Project Detail</p>
                <h2>{activeProject.title}</h2>
              </div>
              <button
                className="modal__close"
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                ×
              </button>
            </header>
            <p className="modal__summary">{activeProject.summary}</p>
            <ul className="modal__list">
              {activeProject.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="modal__meta">
              <a href={activeProject.link} target="_blank" rel="noreferrer">
                Visit project
              </a>
            </div>
            <div className="project-screens">
              {/* {activeProject.screenshots.map((shot) => (
                <div key={shot} className="project-shot">
                  <span>Screenshot placeholder</span>
                  <small>{shot}</small>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
