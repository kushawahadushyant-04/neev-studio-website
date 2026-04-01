import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo-cropped.png" alt="Neev Studio" className="footer-logo" />
          <p className="footer-statement">
            Neev Studio designs structured retail environments that improve clarity, consistency, and sales performance.
          </p>
        </div>

        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:contact@neevstudio.net">contact@neevstudio.net</a>
          <a href="tel:+917525992434">+91 7525992434</a>
          <p>Kanpur, Uttar Pradesh</p>
        </div>

        <div>
          <p className="footer-label">Domains</p>
          <p>neevstudio.net</p>
          <p>neevstudio.co.in</p>
        </div>

        <div>
          <p className="footer-label">Legal</p>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <p>All disputes are subject to Kanpur, Uttar Pradesh jurisdiction.</p>
          <p>Neev Studio reserves all design rights.</p>
        </div>
      </div>
    </footer>
  );
}
