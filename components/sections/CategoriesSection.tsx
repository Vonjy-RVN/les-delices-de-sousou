import { categories } from '@/data/products'
import CategoryCard from '@/components/CategoryCard'

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Nos Catégories de Produits
          </h2>
          <p className="text-lg text-chocolate/70">
            Découvrez notre sélection de délices artisanaux
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

