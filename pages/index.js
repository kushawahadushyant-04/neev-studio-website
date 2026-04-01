import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const services = [
  {
    title: 'Retail Strategy',
    text: 'Store planning, circulation logic, category placement, and decision-making frameworks shaped around customer movement and sell-through.',
  },
  {
    title: 'Store Design',
    text: 'Brand-led retail environments designed to improve spatial clarity, visual consistency, and the overall in-store customer experience.',
  },
  {
    title: 'Fixture Systems',
    text: 'Modular display systems, wall formats, and scalable retail hardware designed for rollout, repeatability, and merchandising flexibility.',
  },
  {
    title: 'Visual Merchandising',
    text: 'Structured product presentation, focal-point planning, and VM systems that support product hierarchy, storytelling, and conversion.',
  },
  {
    title: 'Window Display Design',
    text: 'Concept-led window displays, seasonal themes, prop guidance, and execution-ready campaign plans that attract attention and create retail impact.',
  },
];

const problems = [
  'Cluttered layouts that weaken customer flow',
  'Low product visibility in key categories',
  'VM execution without a structured system',
  'Difficult store rollouts with non-scalable fixtures',
];

const framework = [
  { number: '01', title: 'Diagnose', text: 'Assess brand, format, category logic, and retail friction points.' },
  { number: '02', title: 'Structure', text: 'Plan zoning, layout flow, and customer movement around commercial intent.' },
  { number: '03', title: 'Systemize', text: 'Define fixtures, display principles, and repeatable VM logic.' },
  { number: '04', title: 'Visualize', text: 'Translate the retail strategy into brand-consistent concepts and presentation.' },
  { number: '05', title: 'Execute', text: 'Deliver practical direction for rollout, refinement, and ongoing retail performance.' },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Neev Studio | Structured Retail Environments That Perform</title>
        <meta
          name="description"
          content="Premium retail design consultancy focused on store strategy, fixture systems, visual merchandising, window displays, and high-performing brand-driven retail environments."
        />
        <link rel="icon" href="/logo-icon.png" />
      </Head>

      <Header />
      <main>
        <section className="hero-section blue-surface">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow gold-text">Retail Design Consultancy</p>
              <h1>Structured Retail Environments That Perform</h1>
              <p className="hero-text">
                Neev Studio designs structured retail environments that improve clarity, consistency, and sales performance.
                Through systems, space planning, storytelling, and VM support, we help brands build stronger in-store experiences.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">Discuss Your Store</a>
                <a className="button button-outline" href="/red-chief">View Case Study</a>
              </div>
              <p className="micro-copy">Retail Strategy • Store Design • Fixture Systems • VM Support • Window Displays</p>
            </div>

            <div className="hero-visual-card">
              <div className="hero-card-grid">
                <img src="/assets/images/store-hero.jpg" alt="Premium retail environment by Neev Studio" />
                <img src="/assets/images/redchief-3.jpg" alt="Red Chief interior retail system" />
                <img src="/assets/images/window-concept-vs-execution.jpg" alt="Concept versus execution for window display design" />
                <img src="/assets/images/fixture-process.png" alt="Fixture process storyboard" />
              </div>
              <div className="hero-card-stats">
                <div><span>01</span><p>Layout Strategy</p></div>
                <div><span>02</span><p>System Design</p></div>
                <div><span>03</span><p>VM Impact</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-strip white-surface">
          <div className="container logos-row">
            <span className="active-brand">RED CHIEF</span>
            <span>BENETTON</span>
            <span>ALDO</span>
            <span>TITAN</span>
            <span>SUPERDRY</span>
            <span>BLACKBERRYS</span>
          </div>
        </section>

        <section className="section white-surface trust-block">
          <div className="container two-column-block">
            <div>
              <p className="eyebrow gold-text">Built for real retail performance</p>
              <h2>We don’t design stores. We build retail systems that perform.</h2>
            </div>
            <div className="body-copy">
              <p>
                Neev Studio works at the intersection of strategy, space, fixtures, and visual communication. The goal is not visual decoration. The goal is to create clearer retail environments, stronger customer flow, and more visible product stories.
              </p>
              <p>
                Our work supports compact formats, premium presentation, rollout logic, VM support, prop planning, and seasonal display refreshes.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section light-surface">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow gold-text">Services</p>
              <h2>Retail systems, not isolated design tasks.</h2>
            </div>
            <div className="service-grid five-grid">
              {services.map((item) => (
                <article className="service-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white-surface">
          <div className="container problem-grid">
            <div>
              <p className="eyebrow gold-text">What we solve</p>
              <h2>The challenges retailers face — and fix.</h2>
              <p className="body-copy">
                Our approach combines retail strategy, space planning, fixture logic, and VM structure to solve layout inefficiencies, visibility issues, weak focal points, and inconsistent customer movement.
              </p>
            </div>
            <div className="stack-cards">
              {problems.map((item) => (
                <article className="issue-card" key={item}>
                  <h3>{item.split(' ').slice(0, 3).join(' ')}</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section blue-surface">
          <div className="container">
            <div className="section-heading invert-heading">
              <p className="eyebrow gold-text">Neev framework</p>
              <h2>A structured retail method from strategy to execution.</h2>
            </div>
            <div className="framework-grid">
              {framework.map((step) => (
                <article className="framework-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white-surface">
          <div className="container editorial-grid">
            <div className="editorial-copy">
              <p className="eyebrow gold-text">Visual merchandising systems</p>
              <h2>From window concepts to execution support.</h2>
              <p>
                Neev Studio provides VM support beyond the shopfloor. We design window display concepts, prop-led campaign ideas, seasonal themes, and concept-to-execution systems that help brands attract attention before customers even enter the store.
              </p>
              <ul className="feature-list">
                <li>Window display concepts</li>
                <li>Seasonal theme planning</li>
                <li>Props and display element guidance</li>
                <li>Concept-to-execution consistency</li>
              </ul>
            </div>
            <div className="editorial-visuals">
              <img src="/assets/images/window-concept-radial.jpg" alt="Creative shoe display concept by Neev Studio" />
              <img src="/assets/images/window-execution-radial.jpg" alt="Executed radial window display in retail environment" />
            </div>
          </div>

          <div className="container vm-showcase-grid">
            <img src="/assets/images/window-concept-vs-execution.jpg" alt="Design and execution comparison for window display" />
            <img src="/assets/images/window-robotic-lifestyle.png" alt="Lifestyle themed window display concept" />
            <img src="/assets/images/window-colours-elevation.jpg" alt="Window elevation design for colours of shoes campaign" />
          </div>
        </section>

        <section className="section light-surface">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow gold-text">Fixture and wall systems</p>
              <h2>Built for scale, repeatability, and visual clarity.</h2>
            </div>
            <div className="systems-grid systems-grid-top">
              <img src="/assets/images/fixture-1.jpg" alt="Modular retail wall fixture" />
              <img src="/assets/images/fixture-2.png" alt="Black metal freestanding fixture system" />
              <img src="/assets/images/fixture-3.png" alt="Gondola retail fixture concept" />
              <img src="/assets/images/fixture-4.png" alt="Alternate wall fixture arrangement" />
            </div>
            <div className="systems-grid systems-grid-bottom">
              <img src="/assets/images/fixture-process.png" alt="Fixture process illustration" />
              <img src="/assets/images/wall-1.png" alt="Wall fixture process step-by-step" />
              <img src="/assets/images/wall-2.jpeg" alt="Completed wall retail system" />
              <img src="/assets/images/wall-3.jpeg" alt="Final wall display setup" />
            </div>
          </div>
        </section>

        <section className="section white-surface featured-case-section">
          <div className="container featured-case-grid">
            <div className="featured-case-copy">
              <p className="eyebrow gold-text">Featured case study</p>
              <h2>Red Chief retail system development</h2>
              <p>
                Developed a structured retail system for Red Chief to optimize product visibility, flow, and in-store experience within a compact 600–800 sqft format.
              </p>
              <ul className="feature-list compact-list">
                <li>Structured zoning for a compact premium format</li>
                <li>Storefront, interior, and wall merchandising integration</li>
                <li>VM direction designed for clarity and category visibility</li>
              </ul>
              <a className="button button-gold" href="/red-chief">View Full Red Chief Case Study</a>
            </div>
            <div className="featured-case-visuals">
              <img src="/assets/images/redchief-1.jpg" alt="Red Chief storefront concept" />
              <div className="case-visual-pair">
                <img src="/assets/images/redchief-3.jpg" alt="Red Chief interior perspective" />
                <img src="/assets/images/redchief-4.jpg" alt="Red Chief store facade view" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section blue-surface">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow gold-text">Contact</p>
              <h2>Plan your store and VM strategy.</h2>
              <p className="body-copy invert-copy">
                Projects begin with a structured proposal and milestone-based payment system. Share your format, store size, city, and category focus to start the conversation.
              </p>
              <div className="contact-links">
                <a href="mailto:contact@neevstudio.net">contact@neevstudio.net</a>
                <a href="tel:+917525992434">+91 7525992434</a>
                <a href="https://wa.me/917525992434" target="_blank" rel="noreferrer">WhatsApp Consultation</a>
              </div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/your-id" method="POST">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="phone" placeholder="Phone / WhatsApp" />
              <input type="text" name="storeType" placeholder="Store Type" />
              <input type="text" name="storeSize" placeholder="Store Size / Area" />
              <input type="text" name="location" placeholder="Location" />
              <textarea name="message" rows="5" placeholder="Tell us about your store, VM, rollout, or seasonal display requirement."></textarea>
              <button type="submit" className="button button-gold">Send Inquiry</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
