'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Cart from './Cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-chocolate">
                Les Délices de Sousou
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-chocolate hover:text-gold transition">
                Accueil
              </Link>
              <Link href="/boutique" className="text-chocolate hover:text-gold transition">
                Boutique
              </Link>
              <Link href="/apropos" className="text-chocolate hover:text-gold transition">
                À propos
              </Link>
              <Link href="/contact" className="text-chocolate hover:text-gold transition">
                Contact
              </Link>
            </nav>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-chocolate hover:text-gold transition"
              aria-label="Panier"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-chocolate"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-4">
              <Link
                href="/"
                className="block text-chocolate hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/boutique"
                className="block text-chocolate hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link
                href="/apropos"
                className="block text-chocolate hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="block text-chocolate hover:text-gold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

