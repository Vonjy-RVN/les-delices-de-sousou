'use client'

import Link from 'next/link'

interface CategoryCardProps {
  id: string
  name: string
  icon: string
}

export default function CategoryCard({ id, name, icon }: CategoryCardProps) {
  return (
    <Link href={`/boutique?category=${id}`}>
      <div className="bg-white rounded-lg shadow-md p-8 text-center hover-lift cursor-pointer group">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-chocolate">
          {name}
        </h3>
        <p className="text-chocolate/60 mt-2 text-sm">Découvrir →</p>
      </div>
    </Link>
  )
}

