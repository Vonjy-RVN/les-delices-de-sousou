'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { CreditCard, MapPin, User, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez intégrer votre solution de paiement
    alert('Commande confirmée ! Vous allez recevoir un email de confirmation.')
    clearCart()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-cream min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-chocolate mb-4">
            Votre panier est vide
          </h1>
          <Link
            href="/boutique"
            className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition mt-6"
          >
            Découvrir nos produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-8 text-center">
          Finaliser votre commande
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-2xl font-serif font-bold text-chocolate mb-6">
              Récapitulatif
            </h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-cream pb-4">
                  <div>
                    <p className="font-semibold text-chocolate">{item.name}</p>
                    <p className="text-sm text-chocolate/60">
                      {item.quantity} × {item.price.toFixed(2)} €
                    </p>
                  </div>
                  <p className="font-semibold text-chocolate">
                    {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-chocolate/20 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-chocolate">
                <span>Total</span>
                <span>{getTotalPrice().toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif font-bold text-chocolate mb-6">
              Informations de livraison
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-chocolate font-semibold mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-chocolate font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-chocolate font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-chocolate font-semibold mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-chocolate font-semibold mb-2">
                  Adresse *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-chocolate font-semibold mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-chocolate font-semibold mb-2">
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-chocolate font-semibold mb-2">
                  Notes pour la livraison
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white px-6 py-4 rounded-lg font-semibold hover:bg-gold/90 transition text-lg flex items-center justify-center gap-2"
              >
                <CreditCard size={24} />
                Confirmer la commande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

