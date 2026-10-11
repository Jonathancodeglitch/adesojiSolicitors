"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="/"
        aria-label="Adesoji Fagade Solicitor home"
      >
        <span>AF</span>
        <b>Adesoji Fagade</b>
        <small>Solicitor</small>
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {navItems.map(({ label, href }) => (
          <Link key={href} href={href} onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <a className="nav-cta" href="mailto:info@adesojifagadesolicitors.com">
          Start a conversation <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
