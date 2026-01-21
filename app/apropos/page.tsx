export default function AProposPage() {
  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-8 text-center">
            À propos de nous
          </h1>
          
          <div className="prose prose-lg max-w-none text-chocolate/80 space-y-6">
            <p className="text-xl leading-relaxed">
              <strong className="text-chocolate">Les Délices de Sousou</strong> est une pâtisserie artisanale qui allie tradition et modernité.
            </p>
            
            <p className="leading-relaxed">
              Chaque création est réalisée avec passion, des ingrédients de qualité et un savoir-faire authentique.
              Nous sélectionnons soigneusement nos matières premières pour vous offrir des produits d&apos;exception.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-chocolate mt-10 mb-4">
              Notre Passion
            </h2>
            <p className="leading-relaxed">
              Depuis notre création, nous mettons tout notre cœur dans chaque gâteau, chaque tarte, chaque création.
              Que ce soit pour un gâteau d&apos;anniversaire, un dessert de mariage ou un buffet salé pour un événement professionnel,
              nous adaptons nos créations à vos envies et à vos besoins.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-chocolate mt-10 mb-4">
              Notre Engagement
            </h2>
            <p className="leading-relaxed">
              Qualité, fraîcheur et savoir-faire artisanal sont au cœur de notre métier.
              Nous croyons que chaque moment mérite d&apos;être célébré avec des produits d&apos;exception,
              c&apos;est pourquoi nous mettons un soin particulier dans chaque détail de nos créations.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-chocolate mt-10 mb-4">
              Nos Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-chocolate/80">
              <li>Gâteaux traditionnels et modernes</li>
              <li>Salés prestige pour événements</li>
              <li>Commandes spéciales sur mesure</li>
              <li>Gâteaux d&apos;anniversaire personnalisés</li>
              <li>Desserts pour mariages et événements</li>
              <li>Buffets salés pour entreprises</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

