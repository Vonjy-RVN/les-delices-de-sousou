'use client'

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/context/CartContext'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift animate-fadeIn">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-chocolate mb-2">
          {product.name}
        </h3>
        <p className="text-chocolate/70 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-chocolate">
            {product.price.toFixed(2)} €
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold/90 transition font-semibold"
          >
            <ShoppingCart size={20} />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}

