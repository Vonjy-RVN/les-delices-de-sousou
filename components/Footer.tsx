import Link from 'next/link'
import { Instagram, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-chocolate text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Les Délices de Sousou</h3>
            <p className="text-white/80">
              La gourmandise au cœur de chaque création
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-rose transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-rose transition">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/apropos" className="hover:text-rose transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+33123456789" className="hover:text-rose transition">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:contact@lesdelicesdesousou.fr" className="hover:text-rose transition">
                  contact@lesdelicesdesousou.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram size={18} />
                <a
                  href="https://instagram.com/lesdelicesdesousou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose transition"
                >
                  @lesdelicesdesousou
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Les Délices de Sousou. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="hover:text-rose transition mt-2 inline-block">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}

