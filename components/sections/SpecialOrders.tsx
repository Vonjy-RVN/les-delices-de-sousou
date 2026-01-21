import Link from 'next/link'
import { Cake, Heart, Users, Briefcase } from 'lucide-react'

export default function SpecialOrders() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose/10 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Commandes Spéciales & Événements
          </h2>
          <p className="text-lg text-chocolate/70">
            Créations sur mesure pour tous vos moments précieux
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 text-center hover-lift">
            <Cake className="mx-auto mb-4 text-rose" size={48} />
            <h3 className="text-xl font-serif font-bold text-chocolate mb-2">
              Gâteaux d&apos;anniversaire
            </h3>
            <p className="text-chocolate/70">
              Des créations personnalisées pour célébrer en douceur
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center hover-lift">
            <Heart className="mx-auto mb-4 text-rose" size={48} />
            <h3 className="text-xl font-serif font-bold text-chocolate mb-2">
              Mariages & Fêtes
            </h3>
            <p className="text-chocolate/70">
              Des desserts d&apos;exception pour vos événements mémorables
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center hover-lift">
            <Briefcase className="mx-auto mb-4 text-rose" size={48} />
            <h3 className="text-xl font-serif font-bold text-chocolate mb-2">
              Salés prestige sur mesure
            </h3>
            <p className="text-chocolate/70">
              Buffets salés élégants pour vos événements professionnels
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition shadow-lg hover-lift"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  )
}

