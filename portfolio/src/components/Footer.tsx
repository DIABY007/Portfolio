'use client';

import Link from 'next/link';
import { FaShieldAlt, FaFileInvoiceDollar, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-darker-gray)] py-12 px-4 text-[var(--color-foreground)]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          {/* Marque & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-neon-blue)]"></span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-foreground)]">
                NeoCodex
              </h3>
            </div>
            <p className="text-sm text-[var(--color-foreground)]/70 max-w-sm leading-relaxed">
              Conception de solutions logicielles sur-mesure, SaaS, applications mobiles natives et automatisations WhatsApp en conditions réelles.
            </p>
            <div className="flex items-center gap-4 pt-2 text-lg text-[var(--color-foreground)]/70">
              <Link
                href="https://wa.me/22656636039"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href="https://github.com/DIABY007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-neon-blue)] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:kassambasouleymane8@gmail.com"
                className="hover:text-[var(--color-neon-blue)] transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>

          {/* Informations Légales & Conformité B2B */}
          <div className="md:col-span-7 bg-[var(--color-dark-gray)]/60 rounded-xl p-5 border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-neon-blue)] uppercase tracking-wider">
              <FaShieldAlt />
              <span>Structure déclarée & légalement enregistrée</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[var(--color-foreground)]/50 block">Registre du Commerce (RCCM)</span>
                <span className="font-mono font-medium text-[var(--color-foreground)]/90">
                  BF-BBD-01-2026-A10-03137
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[var(--color-foreground)]/50 block">Identifiant Fiscal Unique (IFU)</span>
                <span className="font-mono font-medium text-[var(--color-foreground)]/90">
                  00329793F
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-[var(--color-foreground)]/60">
              <FaFileInvoiceDollar className="text-emerald-400" />
              <span>Contrats de prestation officiels, facturation normalisée et accompagnement B2B · Bobo-Dioulasso, Burkina Faso</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-foreground)]/50">
          <p>© {new Date().getFullYear()} NeoCodex · Fondé par Diaby Souleymane KASSAMBA.</p>
          <p>Tous droits réservés · Solutions numériques & automatisation</p>
        </div>
      </div>
    </footer>
  );
}
