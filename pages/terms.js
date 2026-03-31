import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head><title>Terms & Conditions | Neev Studio</title></Head>
      <div>
        <header className="site-header">
          <div className="container site-header-inner">
            <a href="/"><img src="/logo.png" alt="Neev Studio" style={{ height: 46, width: "auto" }} /></a>
          </div>
        </header>
        <main className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="eyebrow">Legal</div>
            <h1 className="section-title">Terms & Conditions</h1>
            <div className="highlight-box" style={{ marginTop: 28 }}>
              <p><strong>Scope of Services:</strong> Neev Studio provides retail design consultancy including layout planning, fixture systems, and visual merchandising solutions.</p>
              <p><strong>Design Ownership:</strong> All designs, drawings, concepts, and documents created by Neev Studio remain the intellectual property of Neev Studio unless otherwise agreed in writing.</p>
              <p><strong>Payment Terms:</strong> Project fees, payment milestones, and timelines will be defined before project commencement.</p>
              <p><strong>Revisions:</strong> A limited number of revisions are included as per agreed scope. Additional revisions may be chargeable.</p>
              <p><strong>Liability:</strong> Neev Studio is not responsible for execution errors by third-party vendors unless execution services are part of the agreed scope.</p>
              <p><strong>Jurisdiction:</strong> All disputes are subject to Kanpur, Uttar Pradesh jurisdiction.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
