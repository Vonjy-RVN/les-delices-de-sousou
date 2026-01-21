'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-white to-rose/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-chocolate mb-6">
            Les Délices de Sousou
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-gold mb-4">
            La gourmandise au cœur de chaque création
          </p>
          <p className="text-lg md:text-xl text-chocolate/70 mb-12 max-w-2xl mx-auto">
            Pâtisserie artisanale – Gâteaux traditionnels & modernes – Salés prestige
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition shadow-lg hover-lift"
            >
              Commander maintenant
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center justify-center gap-2 bg-white text-chocolate px-8 py-4 rounded-lg text-lg font-semibold border-2 border-chocolate hover:bg-cream transition shadow-lg hover-lift"
            >
              Voir nos créations
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

