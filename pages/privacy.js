import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head><title>Privacy Policy | Neev Studio</title></Head>
      <div>
        <header className="site-header">
          <div className="container site-header-inner">
            <a href="/"><img src="/logo.png" alt="Neev Studio" style={{ height: 46, width: "auto" }} /></a>
          </div>
        </header>
        <main className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="eyebrow">Legal</div>
            <h1 className="section-title">Privacy Policy</h1>
            <div className="highlight-box" style={{ marginTop: 28 }}>
              <p>Neev Studio respects your privacy and uses submitted contact information solely for responding to project inquiries, proposals, and service-related communication.</p>
              <p>We do not sell or distribute your information to third parties without permission, except when required for business operations or legal compliance.</p>
              <p>By submitting a form through this website, you consent to being contacted by Neev Studio through email, phone, or WhatsApp for project-related communication.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
