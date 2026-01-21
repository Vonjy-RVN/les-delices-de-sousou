import { products, featuredProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function FeaturedProducts() {
  const featured = products.filter((p) => featuredProducts.includes(p.id))

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Produits Vedettes
          </h2>
          <p className="text-lg text-chocolate/70">
            Nos meilleures ventes, sélectionnées pour vous
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

