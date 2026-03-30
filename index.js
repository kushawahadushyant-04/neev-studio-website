import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neev Studio | Retail Design Consultancy</title>
      </Head>

      <div style={{fontFamily: "sans-serif"}}>

        <header style={{background:"#0E2F72", color:"#fff", padding:"20px"}}>
          <img src="/logo.png" height="40" />
        </header>

        <section style={{background:"#0E2F72", color:"#fff", padding:"80px 20px"}}>
          <h1>Structured Retail Environments That Perform</h1>
          <p>Systems • Space • Storytelling</p>
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

        <footer style={{background:"#0E2F72", color:"#fff", padding:"20px"}}>
          <p>contact@neevstudio.net | +91 7525992434</p>
          <p>All disputes subject to Kanpur jurisdiction. Neev Studio reserves all design rights.</p>
        </footer>

      </div>
    </>
  );
}
