'use client'

import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-serif font-bold text-chocolate">
              Mon Panier
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-chocolate hover:text-gold transition"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-rose mb-4" />
                <p className="text-chocolate/60 text-lg mb-2">Votre panier est vide</p>
                <p className="text-chocolate/40">Ajoutez des délices pour commencer !</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-cream rounded-lg"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-chocolate mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-chocolate/60 mb-2">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-white rounded border border-chocolate/20 hover:bg-rose/10 transition"
                          aria-label="Diminuer"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-chocolate font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-white rounded border border-chocolate/20 hover:bg-rose/10 transition"
                          aria-label="Augmenter"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-rose hover:text-chocolate transition text-sm"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-chocolate">Total</span>
                <span className="text-chocolate text-2xl">
                  {getTotalPrice().toFixed(2)} €
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full bg-gold text-white text-center py-3 rounded-lg font-semibold hover:bg-gold/90 transition"
              >
                Passer la commande
              </Link>
              <button
                onClick={clearCart}
                className="block w-full text-rose hover:text-chocolate transition text-sm"
              >
                Vider le panier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

