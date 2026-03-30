import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neev Studio | Retail Design Consultancy</title>
      </Head>

      <div style={{fontFamily: "Arial, sans-serif"}}>

        <header style={{background:"#0E2F72", color:"#fff", padding:"20px", display:"flex", justifyContent:"space-between"}}>
          <img src="/logo.png" height="40" />
          <div>contact@neevstudio.net | +91 7525992434</div>
        </header>

        <section style={{background:"#0E2F72", color:"#fff", padding:"100px 20px"}}>
          <h1 style={{fontSize:"40px"}}>Structured Retail Environments That Perform</h1>
          <p>Systems • Space • Storytelling for High-Impact Store Design</p>
          <button style={{background:"#C9A14A", padding:"10px 20px", border:"none", marginTop:"20px"}}>
            Start Your Project
          </button>
        </section>

        <section style={{padding:"60px 20px"}}>
          <h2>Services</h2>
          <ul>
            <li>Retail Strategy</li>
            <li>Store Design</li>
            <li>Fixture Systems</li>
            <li>Visual Merchandising</li>
          </ul>
        </section>

        <section style={{background:"#f5f5f5", padding:"60px 20px"}}>
          <h2>Case Studies</h2>
          <p>Showcasing retail transformation projects.</p>
        </section>

        <section style={{background:"#0E2F72", color:"#fff", padding:"60px 20px", textAlign:"center"}}>
          <h2>Ready to Elevate Your Retail Space?</h2>
          <button style={{background:"#C9A14A", padding:"12px 24px", border:"none"}}>
            Discuss Your Store Strategy
          </button>
        </section>

        <footer style={{background:"#0E2F72", color:"#fff", padding:"20px", textAlign:"center"}}>
          <p>contact@neevstudio.net | +91 7525992434</p>
          <p>All disputes subject to Kanpur jurisdiction. Neev Studio reserves all design rights.</p>
          <p>© 2026 Neev Studio</p>
        </footer>

      </div>
    </>
  );
}
