import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function RedChiefPage() {
  return (
    <>
      <Head>
        <title>Red Chief Case Study | Neev Studio</title>
        <meta
          name="description"
          content="Red Chief case study by Neev Studio: a structured retail system designed to improve zoning, product visibility, customer flow, and premium in-store experience."
        />
      </Head>
      <Header />
      <main>
        <section className="case-hero white-surface">
          <div className="container case-hero-grid">
            <div className="case-copy">
              <p className="eyebrow gold-text">Case study</p>
              <h1>Red Chief retail system development</h1>
              <p>
                Developed a structured retail system for Red Chief to optimize product visibility, flow, and in-store experience within a compact 600–800 sqft format.
              </p>
              <div className="case-summary-list">
                <div><span>Client</span><strong>Red Chief</strong></div>
                <div><span>Store Area</span><strong>600–800 sqft</strong></div>
                <div><span>Scope</span><strong>Layout, VM, Fixtures, Storefront</strong></div>
              </div>
            </div>
            <div className="case-hero-image-wrap">
              <img src="/assets/images/redchief-1.jpg" alt="Red Chief storefront by Neev Studio" className="case-hero-image" />
            </div>
          </div>
        </section>

        <section className="section light-surface">
          <div className="container two-column-block">
            <div>
              <p className="eyebrow gold-text">Challenge</p>
              <h2>Deliver a premium retail experience in a compact format.</h2>
            </div>
            <div className="body-copy">
              <p>
                The store needed to handle footwear visibility, category segmentation, storefront impact, and customer movement within a limited footprint. The requirement was not only aesthetic presentation, but a controlled retail system that could support product density without losing clarity.
              </p>
              <ul className="feature-list">
                <li>Low visibility risk in a compact format</li>
                <li>Need for strong zoning and premium presentation</li>
                <li>Requirement for scalable, fixture-led merchandising</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section white-surface">
          <div className="container two-column-block">
            <div>
              <p className="eyebrow gold-text">Approach</p>
              <h2>Structured zoning, clear product hierarchy, and focused VM.</h2>
            </div>
            <div className="body-copy">
              <p>
                Neev Studio developed a compact-format retail plan with strong front-facing identity, controlled movement through the central zone, clear wall-based display logic, and a visual focal point at the rear wall to hold attention deeper into the store.
              </p>
              <p>
                The result is a store system built around visibility, rhythm, and premium category presentation—not decorative clutter.
              </p>
            </div>
          </div>
          <div className="container image-triptych">
            <img src="/assets/images/redchief-2.jpg" alt="Red Chief storefront perspective" />
            <img src="/assets/images/redchief-3.jpg" alt="Red Chief interior merchandising zone" />
            <img src="/assets/images/redchief-4.jpg" alt="Red Chief facade image" />
          </div>
        </section>

        <section className="section light-surface">
          <div className="container section-heading">
            <p className="eyebrow gold-text">Key solutions</p>
            <h2>What the retail system solves.</h2>
          </div>
          <div className="container service-grid three-grid">
            <article className="service-card">
              <h3>Storefront presence</h3>
              <p>Created a premium street-facing identity with strong brand recognition and clean visual entry.</p>
            </article>
            <article className="service-card">
              <h3>Wall merchandising</h3>
              <p>Used structured wall systems to improve category visibility while maintaining clean display rhythm.</p>
            </article>
            <article className="service-card">
              <h3>Customer flow</h3>
              <p>Organized movement around a central display zone and rear focal wall to support depth and engagement.</p>
            </article>
          </div>
        </section>

        <section className="section white-surface">
          <div className="container editorial-grid reverse-grid">
            <div className="editorial-visuals">
              <img src="/assets/images/window-concept-radial.jpg" alt="Window concept for retail campaign" />
              <img src="/assets/images/window-execution-radial.jpg" alt="Executed window display system" />
            </div>
            <div className="editorial-copy">
              <p className="eyebrow gold-text">Visual merchandising integration</p>
              <h2>Window strategy and campaign-led retail communication.</h2>
              <p>
                Beyond the store system, Neev Studio also develops concept-led display systems for windows, seasonal campaigns, and product storytelling. This helps the store communicate before entry and makes campaign rollouts more consistent.
              </p>
              <ul className="feature-list">
                <li>Concept-to-execution visual logic</li>
                <li>Seasonal theme planning and prop direction</li>
                <li>Product storytelling through structure and color focus</li>
              </ul>
            </div>
          </div>
          <div className="container vm-showcase-grid">
            <img src="/assets/images/window-concept-vs-execution.jpg" alt="Design versus execution retail window study" />
            <img src="/assets/images/window-robotic-lifestyle.png" alt="Lifestyle window display concept" />
            <img src="/assets/images/window-colours-elevation.jpg" alt="Colours of shoes window elevation" />
          </div>
        </section>

        <section className="section blue-surface">
          <div className="container outcome-grid">
            <div>
              <p className="eyebrow gold-text">Outcome</p>
              <h2>Clearer presentation, stronger flow, better retail communication.</h2>
            </div>
            <div className="metrics-row">
              <div><strong>+ Visibility</strong><span>Improved product segmentation and wall clarity</span></div>
              <div><strong>+ Flow</strong><span>Cleaner customer movement through the store</span></div>
              <div><strong>+ Rollout Logic</strong><span>Scalable fixture and VM thinking for future formats</span></div>
            </div>
          </div>
        </section>

        <section className="section white-surface docs-section">
          <div className="container docs-row">
            <a className="button button-gold" href="/assets/docs/RED_CHIEF_MINI_STORE_3D.pdf" target="_blank" rel="noreferrer">View Red Chief Deck</a>
            <a className="button button-outline-dark" href="/assets/docs/Neev_Studio_Proposal.pdf" target="_blank" rel="noreferrer">View Neev Studio Proposal</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
