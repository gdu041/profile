import { useEffect, useState } from "react";

const sections = [
  {
    title: "Webpage Development",
    subtitle: "Frontend, backend, full stack",
    stack: ["React", "TypeScript", "Rust", "Go", "Python", "PostgreSQL", "NodeJS", "Express", "JAVA", "ASP.NET", "MySQL", "Spring boot", "Flask", "Laravel", "PHP", "NginX", "MongoDB", "Angular", "Django"],
    projects: [
      {
        title: "Flight booking app",
        summary: "Book the best flights quickly and easily with just a few clicks.",
        details: [
          "Online Check-in",
          "Manage your bookings",
          "Recommend the best flights based on your preferences"
        ],
        link: "https://www.wingie.com",
        screenshots: ["/images/booking-flight.png"]
      },
      {
        title: "Hospital booking management website",
        summary: "",
        details: [
          "eCheck-in",
          "See available time slots for your preferred provider or location",
          "Reschedule or cancel existing appointments"
        ],
        link: "https://corewellhealth.org/patient-and-visitor/appointment-scheduling",
        screenshots: ["/images/hospital.png"]
      },
      {
        title: "Class ring sale website",
        summary: "Fully customized class rings",
        details: [
          "Free and Fast shipping on all orders",
          "3D view of the class rings",
          "View of the rings purchased from Etsy or Amazon"
        ],
        link: "https://www.mementosjewelry.com/",
        screenshots: ["/images/class-ring.png"]
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
        summary: "3D view of the rings",
        details: [
          "Realistic materials and lighting",
          "Full customization options",
          "High performance rendering"
        ],
        link: "https://www.fischer-trauringe.de/konfischerator/configurator",
        screenshots: ["/images/ring-configurator.png"]
      },
      {
        title: "2D animation editor (LottieFiles)",
        summary: "2D animation editor for creating and editing animations.",
        details: [
          "Fully featured and runnable on the web browser",
          "Near-native performance with WebGL rendering",
          "Export animations in multiple formats"
        ],
        link: "https://creator.lottiefiles.dev/",
        screenshots: ["/images/lottiefiles.png"]
      },
      {
        title: "3D clothes configurator",
        summary: "Customize the clothes in 3D with real-time rendering.",
        details: [
          "3D view",
        ],
        link: "https://www.simplio3d.com/3d-clothing-configurator/",
        screenshots: ["/images/clothes.png"]
      },
      {
        title: "3D dental orthodontist tool",
        summary: "Visualize dental orthodontic treatments in 3D with real-time rendering.",
        details: [
          "Complete Orthodontic planning platform",
          "3D visualization of dental treatments",
          "High performance WebGL rendering"
        ],
        link: "https://www.archform.com/",
        screenshots: ["/images/archform.png"]
      },
      {
        title: "2D games",
        summary: "Solve puzzles to advance research using RNAs",
        details: [
          "Solve puzzles to design RNAs that fold into specific shapes",
        ],
        link: "https://eternagame.org/",
        screenshots: ["/images/rna.png"]
      }
    ],
  },
  {
    title: "AI/ML",
    subtitle: "Applied ML for product teams",
    stack: ["RAG", "Stable Diffusion"],
    projects: [
      {
        title: "RAG (Retrieval Augmented Generation)",
        summary: "Knowledge-grounded assistants that answer with citations and fresh internal data.",
        details: [
          "Built ingestion pipelines with chunking, metadata enrichment, and vector indexing.",
          "Hybrid retrieval (BM25 + embeddings) with reranking for higher precision.",
          "Added evaluation harnesses and guardrails to reduce hallucinations."
        ],
        link: "https://python.langchain.com/docs/use_cases/question_answering/",
        screenshots: []
      },
      {
        title: "Image generation using Stable Diffusion",
        summary: "Custom image generation workflows for branded assets and design exploration.",
        details: [
          "Fine-tuned models with LoRA and curated datasets for style consistency.",
          "Built prompt tooling with negative prompts, seeds, and batch variations.",
          "Integrated automated upscaling and export pipelines for production use."
        ],
        link: "https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/overview",
        screenshots: []
      }
    ]
  },
  {
    title: "Blockchain Development",
    subtitle: "Smart contracts and ZKP research",
    stack: ["Rust", "Solidity", "JavaScript", "Smart contract development", "ZKP RnD"],
    projects: [
      {
        title: "Smart contract development",
        summary: "Cross-chain anonymous transaction protocol as the system of smart contracts.",
        details: [
          "Rust, Solidity, Cosmwasm, Openzeppelin",
          "Cosmwasm implementation of Webb protocol",
        ],
        link: "https://github.com/tangle-network/protocol-cosmwasm",
        screenshots: ["/images/tangle.png"]
      },
      {
        title: "NFT marketplace website",
        summary: "Cusstomers can trade the NFT tokens",
        details: [
          "Customers can swap the tokens",
          "Similar to https://opensea.io/",
        ],
        link: "https://bitlectrolabs.com/",
        screenshots: ["/images/nft.png"]
      },{
        title: "Defi Swap website",
        summary: "Defi Swap website for token swapping and liquidity provision.",
        details: [
          "Customers can swap the tokens",
          "Provides the functions of \"limit order\" or \"stop loss\"",
        ],
        link: "https://autonomy-cosmswap.vercel.app/",
        screenshots: ["/images/swap.png"]
      },
      {
        title: "EigenTrust protocol implementation",
        summary: "Implementation of EigenTrust protocol by using the ZKP tools, like Halo2.",
        details: [
          "EigenTrust protocol is a reputation management system for peer-to-peer networks.",
          "Rust, Halo2, ZKP",
        ],
        link: "https://github.com/privacy-ethereum/zk-eigentrust",
        screenshots: []
      },
      {
        title: "RnD for client-side proving benchmarks",
        summary: "The project aims to benchmark the latest Zero-knowledge proving systems, and advance the research and development of zero-knowledge proving systems which are friendly to client-side proving.",
        details: [
          "The client-side proving is the zero-knowledge proving on devices like laptop or smartphone.",
          "Rust, Noir, Circom, Halo2, ZKP",
        ],
        link: "https://github.com/privacy-ethereum/csp-benchmarks",
        screenshots: ["/images/ethproof.png"]
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
];

const getYoutubeId = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      const vParam = parsed.searchParams.get("v");
      if (vParam) {
        return vParam;
      }
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" && parts[1]) {
        return parts[1];
      }
      if (parts[0] === "shorts" && parts[1]) {
        return parts[1];
      }
    }
  } catch {
    return null;
  }
  return null;
};

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
          {videos.map((video) => {
            const videoId = getYoutubeId(video.url);
            const thumbnailSrc = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "";

            return (
              <article key={video.title} className="video-card">
                <a
                  className="video-frame"
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {thumbnailSrc ? (
                    <img
                      src={thumbnailSrc}
                      alt={`${video.title} thumbnail`}
                      loading="lazy"
                    />
                  ) : (
                    <span>Video preview unavailable</span>
                  )}
                </a>
                <h3>{video.title}</h3>
              </article>
            );
          })}
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
              {activeProject.screenshots.map((shot) => {
                const normalizedShot = shot.startsWith("/")
                  ? shot.slice(1)
                  : shot;
                const screenshotSrc = `${import.meta.env.BASE_URL}${normalizedShot}`;

                return (
                  <div key={shot} className="project-shot">
                    <img
                      src={screenshotSrc}
                      alt={`${activeProject.name} screenshot`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
