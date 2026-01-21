'use client'

import { useState } from 'react'
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-chocolate/70">
            Une question ? Une commande spéciale ? Nous sommes là pour vous !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-chocolate mb-6">
              Nos Coordonnées
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-rose mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Téléphone</h3>
                  <a
                    href="tel:+33123456789"
                    className="text-chocolate/70 hover:text-gold transition"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-rose mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Email</h3>
                  <a
                    href="mailto:contact@lesdelicesdesousou.fr"
                    className="text-chocolate/70 hover:text-gold transition"
                  >
                    contact@lesdelicesdesousou.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="text-rose mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/lesdelicesdesousou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chocolate/70 hover:text-gold transition"
                  >
                    @lesdelicesdesousou
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-rose mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Adresse</h3>
                  <p className="text-chocolate/70">
                    Votre adresse de pâtisserie<br />
                    Ville, Code postal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-cream">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                💬 Nous contacter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-chocolate mb-6">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-chocolate font-semibold mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
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
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-chocolate font-semibold mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="commande">Commande</option>
                  <option value="devis">Demande de devis</option>
                  <option value="evenement">Événement spécial</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-chocolate font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-chocolate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition flex items-center justify-center gap-2"
              >
                Envoyer
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

