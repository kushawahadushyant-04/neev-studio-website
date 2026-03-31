import Head from "next/head";

const framework = [
  { step: "01", title: "Analyze", desc: "Identify inefficiencies, customer movement, and space opportunities." },
  { step: "02", title: "Zone", desc: "Define layout logic, category flow, and sightline strategy." },
  { step: "03", title: "Structure", desc: "Build scalable fixture systems with functional precision." },
  { step: "04", title: "Visualize", desc: "Create merchandising clarity and high-impact presentation." },
  { step: "05", title: "Execute", desc: "Deliver rollout-ready design direction and implementation support." },
];

const services = [
  { title: "Retail Strategy", text: "Store planning, circulation logic, zoning, and retail decision-making built around performance.", img: "/fixture-1.jpg" },
  { title: "Store Design", text: "Structured retail environments designed to elevate customer experience and brand presence.", img: "/store-hero.jpg" },
  { title: "Fixture Systems", text: "Modular, scalable fixture solutions that support consistency, flexibility, and rollout efficiency.", img: "/wall-1.png" },
  { title: "Visual Merchandising", text: "Product-first storytelling that improves visibility, hierarchy, and in-store engagement.", img: "/fixture-2.png" },
];

const caseStudies = [
  { tag: "System Design", title: "Modular Fixture System", text: "A scalable fixture framework created for repeatability, visual consistency, and easier rollout.", outcome: "Built for scalable execution", img: "/wall-2.jpeg", href: "/red-chief" },
  { tag: "Store Environment", title: "Premium Retail Store", text: "A structured store experience shaped around flow, display clarity, and brand presentation.", outcome: "Optimized layout and customer journey", img: "/store-hero.jpg", href: "/red-chief" },
  { tag: "VM Strategy", title: "Window & VM Strategy", text: "A focused visual storytelling approach designed to increase engagement and storefront attraction.", outcome: "Improved visibility and impact", img: "/fixture-3.png", href: "/red-chief" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Neev Studio | Retail Design Consultancy</title>
        <meta name="description" content="Neev Studio designs structured, high-performing retail environments through strategy, store design, fixture systems, and visual merchandising." />
        <meta property="og:title" content="Neev Studio | Retail Design Consultancy" />
        <meta property="og:description" content="Structured retail environments that perform." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <a href="https://wa.me/917525992434?text=Hi%20Neev%20Studio,%20I%20want%20to%20discuss%20a%20retail%20project." target="_blank" rel="noreferrer" className="whatsapp-float">WhatsApp</a>

        <header className="site-header">
          <div className="container site-header-inner">
            <a href="#home"><img src="/logo.png" alt="Neev Studio" style={{ height: 46, width: "auto" }} /></a>
            <nav className="nav">
              <a href="#home">Home</a>
              <a href="#framework">Approach</a>
              <a href="#services">Services</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="contact-mini">
              <div>contact@neevstudio.net</div>
              <div>+91 7525992434</div>
            </div>
          </div>
        </header>

        <main>
          <section id="home" className="hero">
            <div className="container hero-grid">
              <div>
                <div className="eyebrow">Retail Design Consultancy</div>
                <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.02, margin: "18px 0 0", fontWeight: 800 }}>
                  Structured Retail Environments That Perform
                </h1>
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,.82)", maxWidth: 620 }}>
                  Systems • Space • Storytelling for high-impact retail environments designed to improve clarity, consistency, and commercial performance.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                  <a href="#contact" className="btn-primary">Start Your Project</a>
                  <a href="#case-studies" className="btn-secondary">View Case Studies</a>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24, fontSize: 14, color: "rgba(255,255,255,.75)" }}>
                  <span>Retail Systems</span><span>•</span><span>Store Design</span><span>•</span><span>VM Strategy</span>
                </div>
              </div>

              <div className="hero-visual" style={{ backgroundImage: "url('/store-hero.jpg')" }}>
                <div className="hero-metrics">
                  <div className="hero-metric">
                    <strong>01</strong>
                    <div style={{ fontWeight: 700 }}>Layout Strategy</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,.75)", marginTop: 6 }}>Flow, zoning, visibility</div>
                  </div>
                  <div className="hero-metric">
                    <strong>02</strong>
                    <div style={{ fontWeight: 700 }}>System Design</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,.75)", marginTop: 6 }}>Fixtures built for scale</div>
                  </div>
                  <div className="hero-metric">
                    <strong>03</strong>
                    <div style={{ fontWeight: 700 }}>VM Impact</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,.75)", marginTop: 6 }}>Product-first presentation</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="logo-strip">
            <div className="container logo-list">
              <span>RED CHIEF</span>
              <span>Benetton</span>
              <span>Aldo</span>
              <span>Titan</span>
              <span>Superdry</span>
              <span>Blackberrys</span>
            </div>
          </section>

          <section className="section">
            <div className="container grid-2" style={{ alignItems: "center" }}>
              <div>
                <div className="eyebrow">What We Solve</div>
                <h2 className="section-title">The Challenges Retailers Face — And Fix.</h2>
                <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.85, color: "#475569" }}>
                  Neev Studio combines retail strategy, space planning, and visual structure to solve layout inefficiencies, product visibility issues, and inconsistent in-store experiences.
                </p>
              </div>

              <div className="grid-2">
                {[
                  ["Cluttered Layouts", "Poor space planning and weak customer flow."],
                  ["Low Product Visibility", "Merchandising lacks focus and clarity."],
                  ["Navigation Issues", "Store movement feels inconsistent and unclear."],
                  ["Difficult Rollouts", "No scalable fixture or execution system."]
                ].map(([title, text]) => (
                  <div key={title} className="card" style={{ padding: 24 }}>
                    <h3 style={{ margin: 0, fontSize: 22, color: "#0E2F72" }}>{title}</h3>
                    <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.8, fontSize: 14 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="framework" className="section framework-section">
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <div className="eyebrow">The Neev Retail Framework</div>
                <h2 style={{ fontSize: "clamp(2rem,4vw,3.25rem)", lineHeight: 1.06, marginTop: 16, fontWeight: 800 }}>A Proven 5-Step System</h2>
              </div>

              <div className="grid-4" style={{ marginTop: 40 }}>
                {framework.map((item) => (
                  <div key={item.step} className="framework-card">
                    <div className="framework-badge">{item.step}</div>
                    <h3 style={{ margin: 0, fontSize: 28 }}>{item.title}</h3>
                    <p style={{ marginTop: 12, color: "rgba(255,255,255,.76)", lineHeight: 1.8, fontSize: 14 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="section">
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <div className="eyebrow">Our Services</div>
                <h2 className="section-title">What We Deliver</h2>
              </div>

              <div className="grid-4" style={{ marginTop: 40 }}>
                {services.map((service) => (
                  <div key={service.title} className="card">
                    <img src={service.img} alt={service.title} className="service-image" />
                    <div style={{ padding: 22 }}>
                      <h3 style={{ margin: 0, fontSize: 28, color: "#0E2F72" }}>{service.title}</h3>
                      <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.8, fontSize: 14 }}>{service.text}</p>
                      <a href="#contact" style={{ display: "inline-block", marginTop: 16, fontWeight: 700, color: "#0E2F72" }}>Learn More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="case-studies" className="section" style={{ background: "#f8fafc" }}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, flexWrap: "wrap" }}>
                <div>
                  <div className="eyebrow">Featured Case Studies</div>
                  <h2 className="section-title">Selected Work</h2>
                </div>
                <a href="#contact" style={{ fontWeight: 700, color: "#0E2F72" }}>Discuss Your Project →</a>
              </div>

              <div className="grid-3" style={{ marginTop: 40 }}>
                {caseStudies.map((study) => (
                  <div key={study.title} className="card">
                    <img src={study.img} alt={study.title} className="case-image" />
                    <div style={{ padding: 22 }}>
                      <span style={{ display: "inline-block", background: "#0E2F72", color: "white", borderRadius: 999, padding: "8px 12px", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>{study.tag}</span>
                      <h3 style={{ margin: "16px 0 0", fontSize: 30, color: "#0E2F72" }}>{study.title}</h3>
                      <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.8, fontSize: 14 }}>{study.text}</p>
                      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #e5e7eb", color: "#C9A14A", fontWeight: 700, fontSize: 14 }}>{study.outcome}</div>
                      <a href={study.href} style={{ display: "inline-block", marginTop: 16, fontWeight: 700, color: "#0E2F72" }}>View Case Study →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: 0, fontWeight: 800 }}>Ready to Elevate Your Retail Space?</h2>
              <p style={{ margin: "16px auto 0", maxWidth: 720, color: "rgba(255,255,255,.8)", lineHeight: 1.8, fontSize: 18 }}>
                Let’s discuss your store strategy, layout, fixture system, or visual merchandising requirement.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                <a href="#contact" className="btn-primary">Start Your Retail Project</a>
                <a href="mailto:contact@neevstudio.net" className="btn-secondary">contact@neevstudio.net</a>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="container grid-2">
              <div>
                <div className="eyebrow">Contact</div>
                <h2 className="section-title">Start Your Project</h2>
                <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.85, color: "#475569" }}>
                  Share your requirement and Neev Studio will respond with a structured approach tailored to your retail project.
                </p>

                <div style={{ marginTop: 24, fontSize: 15, lineHeight: 2, color: "#334155" }}>
                  <p><strong>Email:</strong> contact@neevstudio.net</p>
                  <p><strong>Phone:</strong> +91 7525992434</p>
                  <p><strong>WhatsApp:</strong> +91 7525992434</p>
                  <p><strong>Domain:</strong> neevstudio.net</p>
                </div>
              </div>

              <form className="contact-card" action="https://formspree.io/f/your-form-id" method="POST">
                <div className="grid-2">
                  <input className="input" name="name" placeholder="Full Name" />
                  <input className="input" type="email" name="email" placeholder="Email Address" />
                  <input className="input" name="phone" placeholder="Phone Number" />
                  <input className="input" name="location" placeholder="Store Location" />
                  <select className="select" name="store_type">
                    <option>Type of Store</option>
                    <option>Apparel</option>
                    <option>Footwear</option>
                    <option>Multi-brand</option>
                    <option>Kiosk</option>
                    <option>Other</option>
                  </select>
                  <select className="select" name="store_size">
                    <option>Store Size</option>
                    <option>0–300 sqft</option>
                    <option>300–800 sqft</option>
                    <option>800–1500 sqft</option>
                    <option>1500+ sqft</option>
                  </select>
                </div>
                <div style={{ marginTop: 16 }}>
                  <textarea className="textarea" name="message" placeholder="Tell us about your project requirement" />
                </div>
                <div style={{ marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>We typically respond within 24 hours.</p>
                  <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer" }}>Submit Inquiry</button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <img src="/logo.png" alt="Neev Studio" style={{ height: 40, width: "auto" }} />
              <p style={{ marginTop: 16, color: "rgba(255,255,255,.76)", lineHeight: 1.8, fontSize: 14 }}>
                Structured retail design consultancy focused on high-performing, brand-driven environments.
              </p>
            </div>

            <div>
              <h3 style={{ margin: 0, color: "#C9A14A", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase" }}>Navigation</h3>
              <div style={{ marginTop: 16 }}>
                <a className="footer-link" href="#home">Home</a>
                <a className="footer-link" href="#framework">Approach</a>
                <a className="footer-link" href="#services">Services</a>
                <a className="footer-link" href="#case-studies">Case Studies</a>
                <a className="footer-link" href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <h3 style={{ margin: 0, color: "#C9A14A", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase" }}>Contact</h3>
              <div style={{ marginTop: 16 }}>
                <a className="footer-link" href="mailto:contact@neevstudio.net">contact@neevstudio.net</a>
                <a className="footer-link" href="tel:+917525992434">+91 7525992434</a>
                <a className="footer-link" href="/privacy">Privacy Policy</a>
                <a className="footer-link" href="/terms">Terms & Conditions</a>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: 28, fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,.6)" }}>
            <p>All disputes are subject to Kanpur, Uttar Pradesh jurisdiction. Neev Studio reserves all design rights.</p>
          </div>

          <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "rgba(255,255,255,.6)" }}>
            © 2026 Neev Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
export default function Home() {
  return (
    <div style={{fontFamily: 'Arial', padding: '40px', background:'#0b1f5b', color:'#fff'}}>
      <h1>NEEV STUDIO</h1>
      <p>Structured Retail Environments That Perform</p>
      <button style={{
        background:'#c9a64b',
        border:'none',
        padding:'10px 20px',
        marginTop:'20px',
        cursor:'pointer'
      }}>
        Start Your Project
      </button>
    </div>
  );
}
