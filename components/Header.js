import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Neev Studio home">
          <img src="/logo-header.png" alt="Neev Studio" className="brand-logo" />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/#services">Services</a>
          <a href="/#approach">Approach</a>
          <Link href="/red-chief">Case Study</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="header-meta">
          <a href="mailto:contact@neevstudio.net" className="header-email">contact@neevstudio.net</a>
          <a href="https://wa.me/917525992434" target="_blank" rel="noreferrer" className="button button-gold small-button">
            Start Project
          </a>
        </div>
      </div>
    </header>
  );
}
