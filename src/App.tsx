import { type CSSProperties, useEffect, useMemo, useState } from "react";

type SlideCard = {
  title: string;
  subtitle?: string;
  tags?: string[];
  bullets: string[];
  image?: string;
  link?: string;
};

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  accent: string;
  accentSoft: string;
  layout: "cover" | "grid" | "videos" | "process" | "contact";
  description?: string;
  cards?: SlideCard[];
  stats?: { label: string; value: string }[];
  steps?: string[];
  deliverables?: string[];
  videos?: { title: string; url: string; note: string }[];
};

const slides: Slide[] = [
  {
    id: "cover",
    layout: "cover",
    title: "为商业结果而生的产品型工程",
    subtitle: "全栈开发 · 3D/WebGL · AI/ML · 区块链",
    kicker: "GDU041 / Portfolio Deck",
    accent: "#e56a36",
    accentSoft: "rgba(229, 106, 54, 0.18)",
    stats: [
      { label: "核心定位", value: "把复杂技术转化为可销售的体验" },
      { label: "擅长方向", value: "3D 定制、B2B 系统、视觉互动" },
      { label: "合作方式", value: "从方案到落地的一站式交付" }
    ]
  },
  {
    id: "value",
    layout: "grid",
    title: "客户关心的，我优先交付",
    subtitle: "让产品更好卖、更好用、更可持续",
    kicker: "Why me",
    accent: "#195b6a",
    accentSoft: "rgba(25, 91, 106, 0.18)",
    description: "面向中国客户的沟通方式与交付标准，强调价值、体验与效率。",
    cards: [
      {
        title: "转化驱动体验",
        subtitle: "Conversion-first UI",
        tags: ["可用性", "增长", "品牌一致性"],
        bullets: [
          "把用户路径拆解成可衡量的转化动作",
          "从首屏到下单路径统一视觉与信任感",
          "体验层面减少跳失并提升留存"
        ]
      },
      {
        title: "复杂系统轻量化",
        subtitle: "Complex system to simple UX",
        tags: ["B2B", "流程", "效率"],
        bullets: [
          "把多角色流程整理成低摩擦操作",
          "将业务规则可视化，让团队快速理解",
          "重视性能与稳定性，确保可扩展"
        ]
      },
      {
        title: "技术可信度",
        subtitle: "Engineering credibility",
        tags: ["架构", "安全", "可维护"],
        bullets: [
          "可复用组件与模块化系统",
          "文档与交接友好，降低团队成本",
          "重视数据安全与可观测性"
        ]
      }
    ]
  },
  {
    id: "web",
    layout: "grid",
    title: "Web 产品与业务系统",
    subtitle: "从业务入口到成交闭环",
    kicker: "Web Product",
    accent: "#3f5fb4",
    accentSoft: "rgba(63, 95, 180, 0.18)",
    description: "适合 SaaS、平台型产品、电商与预约系统。",
    cards: [
      {
        title: "航班预订平台",
        subtitle: "Flight Booking",
        tags: ["搜索/比价", "支付转化"],
        image: "/images/booking-flight.png",
        link: "https://www.wingie.com",
        bullets: [
          "背景：多航司、多航线的实时比价与快速出票",
          "使用场景：差旅预订、旅行社套餐、跨境机票",
          "价值：提升转化与下单速度，减少客服负担"
        ]
      },
      {
        title: "医院预约管理系统",
        subtitle: "Appointment Management",
        tags: ["医疗流程", "预约排班"],
        image: "/images/hospital.png",
        link: "https://corewellhealth.org/patient-and-visitor/appointment-scheduling",
        bullets: [
          "背景：医院线上预约与现场报到流程分流",
          "使用场景：门诊预约、改期、排队叫号",
          "价值：降低线下压力，提高患者体验"
        ]
      },
      {
        title: "定制首饰电商",
        subtitle: "Custom Jewelry",
        tags: ["电商", "定制化"],
        image: "/images/class-ring.png",
        link: "https://www.mementosjewelry.com/",
        bullets: [
          "背景：高客单价定制产品的在线选购与展示",
          "使用场景：3D 预览、材质选择、快速下单",
          "价值：增强信任感与品牌形象，提升客单价"
        ]
      }
    ]
  },
  {
    id: "3d",
    layout: "grid",
    title: "3D / WebGL 互动体验",
    subtitle: "把复杂产品“看得见、摸得着”",
    kicker: "3D Experiences",
    accent: "#1c7c5b",
    accentSoft: "rgba(28, 124, 91, 0.18)",
    description: "适合珠宝、家居、医疗和工业产品的在线展示与配置。",
    cards: [
      {
        title: "3D 戒指定制器",
        subtitle: "Ring Configurator",
        tags: ["Three.js", "实时渲染"],
        image: "/images/ring-configurator.png",
        link: "https://www.fischer-trauringe.de/konfischerator/configurator",
        bullets: [
          "背景：贵金属定制对材质与细节要求极高",
          "使用场景：材质/纹理/刻字实时预览",
          "价值：减少退货，提高购买信心"
        ]
      },
      {
        title: "Lottie 动画编辑器",
        subtitle: "LottieFiles",
        tags: ["WebGL", "团队协作"],
        image: "/images/lottiefiles.png",
        link: "https://creator.lottiefiles.dev/",
        bullets: [
          "背景：动效团队需要在线协作与版本管理",
          "使用场景：动画编辑、预览、导出多格式",
          "价值：减少设计开发反复沟通"
        ]
      },
      {
        title: "数字正畸 3D 工具",
        subtitle: "Digital Orthodontics",
        tags: ["医疗可视化", "3D 交互"],
        image: "/images/archform.png",
        link: "https://www.archform.com/",
        bullets: [
          "背景：正畸规划需要高精度 3D 视图",
          "使用场景：方案对比、治疗路径演示",
          "价值：提升医生沟通效率与患者理解"
        ]
      }
    ]
  },
  {
    id: "ai",
    layout: "grid",
    title: "AI/ML 应用落地",
    subtitle: "把 AI 变成业务能力",
    kicker: "AI/ML",
    accent: "#b3486b",
    accentSoft: "rgba(179, 72, 107, 0.18)",
    description: "强调可用、可控、可评估的 AI 系统。",
    cards: [
      {
        title: "RAG 智能知识库",
        subtitle: "Retrieval Augmented Generation",
        tags: ["RAG", "搜索/问答"],
        bullets: [
          "背景：企业知识分散，难以快速检索",
          "使用场景：内部助手、客户支持、产品文档",
          "价值：答案带引用，降低幻觉与误导风险"
        ]
      },
      {
        title: "稳定扩散图像生成",
        subtitle: "Stable Diffusion",
        tags: ["生成式 AI", "创意迭代"],
        bullets: [
          "背景：市场与设计团队需要快速产出视觉概念",
          "使用场景：品牌视觉、商品概念图、营销素材",
          "价值：缩短设计周期，提升产出效率"
        ]
      }
    ]
  },
  {
    id: "chain",
    layout: "grid",
    title: "区块链与 ZKP 研发",
    subtitle: "合规、安全、可扩展的 Web3 交互",
    kicker: "Blockchain",
    accent: "#7a6a23",
    accentSoft: "rgba(122, 106, 35, 0.18)",
    description: "从协议研发到产品落地，覆盖工程与研究。",
    cards: [
      {
        title: "跨链智能合约协议",
        subtitle: "Smart Contract Protocol",
        tags: ["Rust", "Solidity"],
        image: "/images/tangle.png",
        link: "https://github.com/tangle-network/protocol-cosmwasm",
        bullets: [
          "背景：跨链资产与隐私转移需求增长",
          "使用场景：匿名交易、跨链资产路由",
          "价值：强化安全性与可扩展性"
        ]
      },
      {
        title: "NFT 交易平台",
        subtitle: "NFT Marketplace",
        tags: ["交易撮合", "钱包连接"],
        image: "/images/nft.png",
        link: "https://bitlectrolabs.com/",
        bullets: [
          "背景：NFT 发行与交易需要易用入口",
          "使用场景：收藏品交易、品牌活动发行",
          "价值：提升交易效率与用户黏性"
        ]
      },
      {
        title: "ZKP 证明性能研究",
        subtitle: "ZKP Benchmark",
        tags: ["Halo2", "Noir"],
        image: "/images/ethproof.png",
        link: "https://github.com/privacy-ethereum/csp-benchmarks",
        bullets: [
          "背景：客户端证明性能影响用户体验",
          "使用场景：轻量设备、移动端证明",
          "价值：优化证明速度与成本"
        ]
      }
    ]
  },
  {
    id: "videos",
    layout: "videos",
    title: "演示视频精选",
    subtitle: "用真实产品呈现交互深度",
    kicker: "Video Demo",
    accent: "#2c5b8f",
    accentSoft: "rgba(44, 91, 143, 0.18)",
    videos: [
      {
        title: "RNA 编辑游戏演示",
        url: "https://www.youtube.com/watch?v=TUOdb776q5U",
        note: "科研游戏化体验"
      },
      {
        title: "数字牙科工具",
        url: "https://www.youtube.com/watch?v=ftvtHm5kJ2c",
        note: "医疗 3D 可视化"
      },
      {
        title: "家具桌面设计工具",
        url: "https://www.youtube.com/watch?v=SIEU4Sq0U4I",
        note: "在线定制交互"
      },
      {
        title: "2D 地图面积计算",
        url: "https://www.youtube.com/watch?v=_uhLyZuNyOI",
        note: "GIS 交互工具"
      },
      {
        title: "正畸治疗可视化",
        url: "https://www.youtube.com/watch?v=47NOPCFJKGI",
        note: "牙科方案展示"
      }
    ]
  },
  {
    id: "process",
    layout: "process",
    title: "合作流程与交付方式",
    subtitle: "保证每个阶段可视、可控、可复盘",
    kicker: "Engagement",
    accent: "#186b7a",
    accentSoft: "rgba(24, 107, 122, 0.18)",
    steps: [
      "需求澄清：目标、用户、KPI 对齐",
      "方案设计：信息架构、交互、技术路线",
      "快速迭代：小步快跑、可演示的里程碑",
      "上线与优化：性能、数据、体验持续提升"
    ],
    deliverables: [
      "产品方案与原型 / PRD",
      "可维护的前后端代码与文档",
      "关键指标与性能优化清单"
    ]
  },
  {
    id: "contact",
    layout: "contact",
    title: "让项目开始更顺利",
    subtitle: "欢迎用中文交流，快速对齐需求",
    kicker: "Contact",
    accent: "#e35c59",
    accentSoft: "rgba(227, 92, 89, 0.18)",
    description: "可提供全职/远程/项目制合作。"
  }
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

const withBase = (path: string) => {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const goTo = (index: number) => {
    const nextIndex = Math.min(totalSlides - 1, Math.max(0, index));
    setActiveIndex(nextIndex);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key) || event.code === "Space") {
        event.preventDefault();
        goNext();
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, totalSlides]);

  return (
    <div
      className="deck"
      style={{
        "--accent": activeSlide.accent,
        "--accent-soft": activeSlide.accentSoft
      } as CSSProperties}
    >
      <header className="deck__header">
        <div>
          <p className="deck__eyebrow">Portfolio / PPT</p>
          <h1 className="deck__title">GDU041 · 产品型工程师</h1>
        </div>
        <div className="deck__meta">
          <span>第 {activeIndex + 1} / {totalSlides} 页</span>
          <span>按 ← / → 翻页</span>
        </div>
      </header>

      <div className="deck__progress">
        <span style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }} />
      </div>

      <main key={activeSlide.id} className={`slide slide--${activeSlide.layout}`}>
        <div className="slide__header">
          <p className="slide__kicker">{activeSlide.kicker}</p>
          <h2 className="slide__title">{activeSlide.title}</h2>
          {activeSlide.subtitle && <p className="slide__subtitle">{activeSlide.subtitle}</p>}
        </div>

        {activeSlide.layout === "cover" && (
          <div className="cover">
            <p className="cover__lead">
              面向企业与产品团队，提供从策略、设计到工程落地的全链路能力。
              擅长把技术价值转化为业务结果，让客户看得懂、愿意买、敢上线。
            </p>
            <div className="cover__stats">
              {activeSlide.stats?.map((item) => (
                <div key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="cover__cta">
            <div style={{height: '30px'}}>
              <a className="btn" href="mailto:hmh2175377@gmail.com">立即沟通</a>
              </div>
              <div style={{height: '30px'}}>
              <a className="btn btn--ghost" href="https://github.com/gdu041">GitHub</a>
              </div>
            </div>
          </div>
        )}

        {activeSlide.layout === "grid" && (
          <div className="slide__body">
            {activeSlide.description && (
              <p className="slide__description">{activeSlide.description}</p>
            )}
            <div className="card-grid">
              {activeSlide.cards?.map((card) => (
                <article key={card.title} className="card">
                  <div className="card__header">
                    <div>
                      <h3>{card.title}</h3>
                      {card.subtitle && <p>{card.subtitle}</p>}
                    </div>
                    {card.image && (
                      <div className="card__image">
                        {card.link ? (
                          <a href={card.link} target="_blank" rel="noreferrer">
                            <img src={withBase(card.image)} alt={card.title} loading="lazy" />
                          </a>
                        ) : (
                          <img src={withBase(card.image)} alt={card.title} loading="lazy" />
                        )}
                      </div>
                    )}
                  </div>
                  {card.tags && (
                    <div className="card__tags">
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeSlide.layout === "videos" && (
          <div className="video-grid">
            {activeSlide.videos?.map((video) => {
              const videoId = getYoutubeId(video.url);
              const thumbnailSrc = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "";

              return (
                <article key={video.title} className="video-card">
                  <a className="video-thumb" href={video.url} target="_blank" rel="noreferrer">
                    {thumbnailSrc ? (
                      <img src={thumbnailSrc} alt={video.title} loading="lazy" />
                    ) : (
                      <span>预览不可用</span>
                    )}
                  </a>
                  <div className="video-card__info">
                    <h3>{video.title}</h3>
                    <p>{video.note}</p>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {activeSlide.layout === "process" && (
          <div className="process">
            <div className="process__steps">
              <h3>合作步骤</h3>
              <ol>
                {activeSlide.steps?.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="process__deliverables">
              <h3>交付内容</h3>
              <ul>
                {activeSlide.deliverables?.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeSlide.layout === "contact" && (
          <div className="contact">
            <p className="contact__lead">
              {activeSlide.description}
            </p>
            <div className="contact__cards">
              <div className="contact-card">
                <span>Email</span>
                <strong>hmh2175377@gmail.com</strong>
              </div>
              <div className="contact-card">
                <span>GitHub</span>
                <strong>github.com/gdu041</strong>
              </div>
              <div className="contact-card">
                <span>合作形式</span>
                <strong>远程 / 全职 / 项目制</strong>
              </div>
            </div>
            <div className="cover__cta">
              <div style={{height: '30px'}}>
              <a className="btn" href="mailto:hmh2175377@gmail.com">预约沟通</a>
              </div>
              <div style={{height: '30px'}}>
              <a className="btn btn--ghost" href="https://github.com/gdu041">查看更多作品</a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="deck__footer">
        <div className="deck__nav">
          <button type="button" onClick={goPrev} disabled={activeIndex === 0}>
            上一页
          </button>
          <button type="button" onClick={goNext} disabled={activeIndex === totalSlides - 1}>
            下一页
          </button>
        </div>
        <div className="deck__toc">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => goTo(index)}
            >
              {index + 1}. {slide.title}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
