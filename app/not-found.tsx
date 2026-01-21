import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 bg-cream min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-chocolate mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-4">
          Page non trouvée
        </h2>
        <p className="text-lg text-chocolate/70 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition shadow-lg hover-lift"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

