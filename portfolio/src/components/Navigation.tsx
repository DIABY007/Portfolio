'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-darker-gray)]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl font-bold text-[var(--color-neon-blue)] hover:text-[var(--color-neon-purple)] transition-colors"
          >
            Projets
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
            >
              À Propos
            </Link>
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projets"
              onClick={(e) => handleNavClick(e, '#projets')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
            >
              Projets
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
            >
              Contact
            </Link>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors text-2xl"
            aria-label="Menu de navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors py-2"
            >
              Accueil
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors py-2"
            >
              À Propos
            </Link>
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="#projets"
              onClick={(e) => handleNavClick(e, '#projets')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors py-2"
            >
              Projets
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

