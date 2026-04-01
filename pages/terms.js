import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Neev Studio</title>
        <meta name="description" content="Terms and Conditions for Neev Studio." />
      </Head>
      <Header />
      <main className="legal-page white-surface">
        <div className="container legal-container">
          <p className="eyebrow gold-text">Legal</p>
          <h1>Terms &amp; Conditions</h1>
          <p>
            These terms govern the use of the Neev Studio website and the engagement of Neev Studio for retail strategy, store design, fixture systems, visual merchandising, window display design, and related consultancy services.
          </p>

          <h2>Scope of services</h2>
          <p>
            Project deliverables are defined through approved proposals, quotations, presentations, or email confirmations. Any work requested beyond the approved scope will be treated as an additional service.
          </p>

          <h2>Payments &amp; Commercial Terms</h2>
          <ul>
            <li>All projects undertaken by Neev Studio require a confirmed scope and approved quotation before initiation.</li>
            <li>A standard payment structure applies unless otherwise agreed in writing:</li>
            <li>50% advance payment before project commencement</li>
            <li>30% upon design approval or mid-stage delivery</li>
            <li>20% before final delivery or handover</li>
            <li>For execution or on-site support projects, milestone-based billing may apply depending on project scale.</li>
            <li>Any additional scope beyond the approved proposal will be billed separately.</li>
            <li>Delays in payment may result in project hold or timeline revisions.</li>
          </ul>

          <h2>Design ownership &amp; usage</h2>
          <p>
            All designs, layouts, concepts, plans, drawings, and presentation materials developed by Neev Studio remain the intellectual property of Neev Studio unless otherwise agreed in writing. Clients are granted usage rights only after full payment clearance. Neev Studio reserves all design rights.
          </p>

          <h2>Liability</h2>
          <p>
            Neev Studio is not liable for delays, changes, or execution issues arising from incomplete information, site conditions, third-party vendors, approvals, or client-side changes.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            All disputes are subject to Kanpur, Uttar Pradesh jurisdiction.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
