export default function MentionsLegalesPage() {
  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none text-chocolate/80 space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Éditeur du site
              </h2>
              <p>
                Les Délices de Sousou<br />
                [Adresse complète]<br />
                SIRET : [Numéro SIRET]<br />
                Téléphone : +33 1 23 45 67 89<br />
                Email : contact@lesdelicesdesousou.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Directeur de publication
              </h2>
              <p>
                [Nom du directeur de publication]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Hébergement
              </h2>
              <p>
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Données personnelles
              </h2>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-chocolate mt-8 mb-4">
                Cookies
              </h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site.
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

