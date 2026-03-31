import Head from "next/head";

const highlights = [
  "Compact 600–800 sqft planning with strong product visibility.",
  "Zoned layout for sports, casual, formal, accessories, and bags.",
  "Center gondola + seating zone for engagement and trial support.",
  "Feature storytelling wall to reinforce exclusivity and premium positioning.",
];

const gallery = ["/redchief-1.jpg", "/redchief-2.jpg", "/redchief-3.jpg", "/redchief-4.jpg"];

export default function RedChiefCaseStudy() {
  return (
    <>
      <Head>
        <title>Red Chief Case Study | Neev Studio</title>
        <meta name="description" content="Red Chief compact footwear store case study by Neev Studio for a 600–800 sqft high-performance retail format." />
      </Head>

      <div>
        <header className="site-header">
          <div className="container site-header-inner">
            <a href="/"><img src="/logo.png" alt="Neev Studio" style={{ height: 46, width: "auto" }} /></a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/#services">Services</a>
              <a href="/#case-studies">Case Studies</a>
              <a href="/#contact">Contact</a>
            </nav>
            <div className="contact-mini">
              <div>contact@neevstudio.net</div>
              <div>+91 7525992434</div>
            </div>
          </div>
        </header>

        <main>
          <section className="case-hero">
            <div className="container">
              <div className="eyebrow">Case Study</div>
              <h1 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 1.04, margin: "16px 0 0", fontWeight: 800 }}>
                Red Chief Retail Store Design
              </h1>
              <p style={{ marginTop: 18, maxWidth: 860, color: "rgba(255,255,255,.82)", fontSize: 18, lineHeight: 1.8 }}>
                Developed a structured retail system for Red Chief to optimize product visibility, flow, and in-store experience within a compact 600–800 sqft format.
              </p>

              <div className="case-kpis">
                <div className="kpi-card"><strong>600–800</strong><span>sqft compact format</span></div>
                <div className="kpi-card"><strong>05+</strong><span>clear category zones</span></div>
                <div className="kpi-card"><strong>01</strong><span>central gondola strategy</span></div>
                <div className="kpi-card"><strong>360°</strong><span>brand and product visibility</span></div>
              </div>

              <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#gallery" className="btn-primary">View Project Visuals</a>
                <a href="/#contact" className="btn-secondary">Start Your Project</a>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="eyebrow">Overview</div>
                <h2 className="section-title">Compact Store. Full Brand Experience.</h2>
                <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.85, color: "#475569" }}>
                  This Red Chief concept balances compact planning with strong retail impact. The layout supports multi-category footwear presentation while keeping the store legible, premium, and easy to navigate.
                </p>
                <div style={{ marginTop: 24, display: "grid", gap: 12, fontSize: 15, color: "#334155" }}>
                  <p><strong>Client:</strong> Red Chief</p>
                  <p><strong>Store Size:</strong> 600–800 sqft</p>
                  <p><strong>Scope:</strong> Layout planning, fixture design, VM integration, storefront and interior strategy</p>
                </div>
              </div>

              <div className="highlight-box">
                <h3 style={{ margin: 0, fontSize: 28, color: "#0E2F72" }}>Strategic Highlights</h3>
                <ul style={{ margin: "16px 0 0", paddingLeft: 18, color: "#475569", lineHeight: 2 }}>
                  {highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="section" style={{ background: "#f8fafc" }}>
            <div className="container">
              <div className="eyebrow">Approach</div>
              <h2 className="section-title">How The Store Was Structured</h2>

              <div className="grid-2" style={{ marginTop: 34, alignItems: "center" }}>
                <div className="highlight-box">
                  <h3 style={{ margin: 0, fontSize: 24, color: "#0E2F72" }}>Challenge</h3>
                  <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.85 }}>
                    Design a compact footwear store without sacrificing category clarity, customer movement, and premium visual storytelling.
                  </p>

                  <h3 style={{ margin: "22px 0 0", fontSize: 24, color: "#0E2F72" }}>Response</h3>
                  <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.85 }}>
                    Create strong side-wall merchandising, a central display and seating arrangement, and a back-wall exclusivity zone to anchor the store experience.
                  </p>
                </div>

                <div className="full-bleed-img">
                  <img src="/redchief-1.jpg" alt="Red Chief storefront" />
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="section">
            <div className="container">
              <div className="eyebrow">Project Visuals</div>
              <h2 className="section-title">Storefront, Interior, Display & Experience</h2>

              <div className="gallery-grid" style={{ marginTop: 34 }}>
                {gallery.map((src, i) => (
                  <img key={src} src={src} alt={`Red Chief visual ${i + 1}`} />
                ))}
              </div>
            </div>
          </section>

          <section className="section" style={{ background: "#f8fafc" }}>
            <div className="container">
              <div className="eyebrow">Design Thinking</div>
              <h2 className="section-title">Why This Layout Works</h2>

              <div className="grid-4" style={{ marginTop: 34 }}>
                {[
                  ["Category Zoning", "Defined sections for sports, casual, formal, slippers, bags, and accessories improve product discoverability."],
                  ["Center Experience Zone", "A central gondola and bench arrangement supports interaction, trial, and visual rhythm."],
                  ["Storytelling Walls", "Feature walls and lit graphics build brand recall while giving the store a premium focal hierarchy."],
                  ["Rollout Logic", "The planning language and fixture approach can be adapted into repeatable Red Chief store formats."]
                ].map(([title, text]) => (
                  <div key={title} className="card" style={{ padding: 24 }}>
                    <h3 style={{ margin: 0, fontSize: 24, color: "#0E2F72" }}>{title}</h3>
                    <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.8, fontSize: 14 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: 0, fontWeight: 800 }}>Want to Build a High-Performance Store?</h2>
              <p style={{ margin: "16px auto 0", maxWidth: 720, color: "rgba(255,255,255,.82)", lineHeight: 1.8, fontSize: 18 }}>
                Neev Studio designs structured retail environments for clarity, consistency, and better in-store performance.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                <a href="/#contact" className="btn-primary">Discuss Your Project</a>
                <a href="https://wa.me/917525992434?text=Hi%20Neev%20Studio,%20I%20want%20to%20discuss%20a%20retail%20project." className="btn-secondary">WhatsApp</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
