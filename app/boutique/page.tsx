'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

function BoutiqueContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  )

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  useEffect(() => {
    const category = searchParams.get('category')
    setSelectedCategory(category)
  }, [searchParams])

  return (
    <div className="py-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Notre Boutique
          </h1>
          <p className="text-lg text-chocolate/70">
            Découvrez tous nos délices artisanaux
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedCategory === null
                ? 'bg-gold text-white'
                : 'bg-white text-chocolate hover:bg-cream'
            }`}
          >
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category.id
                  ? 'bg-gold text-white'
                  : 'bg-white text-chocolate hover:bg-cream'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-chocolate/60 text-lg">
              Aucun produit dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BoutiquePage() {
  return (
    <Suspense fallback={<div className="py-12 bg-cream min-h-screen"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">Chargement...</div></div>}>
      <BoutiqueContent />
    </Suspense>
  )
}

