import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Neev Studio</title>
        <meta name="description" content="Privacy Policy for Neev Studio." />
      </Head>
      <Header />
      <main className="legal-page white-surface">
        <div className="container legal-container">
          <p className="eyebrow gold-text">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            Neev Studio respects your privacy. This website may collect basic contact information submitted through inquiry forms, email links, or WhatsApp interactions for the sole purpose of responding to business inquiries and providing project-related communication.
          </p>

          <h2>Information we may collect</h2>
          <ul>
            <li>Name, email address, phone number, company or store details, and project-related information shared by you.</li>
            <li>Basic website usage data such as browser information or page visits when analytics tools are enabled.</li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to inquiries and discuss retail design, VM, fixture, or store strategy requirements.</li>
            <li>To prepare proposals, communicate project details, and provide follow-up support.</li>
            <li>To improve website experience and understand which services visitors are interested in.</li>
          </ul>

          <h2>Data sharing</h2>
          <p>
            Neev Studio does not sell your information. Your data may only be shared with trusted service providers used for website hosting, email handling, or form processing where necessary for business operations.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact <a href="mailto:contact@neevstudio.net">contact@neevstudio.net</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
