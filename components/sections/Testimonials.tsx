import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marie L.',
    text: 'Les gâteaux sont absolument délicieux ! La qualité est exceptionnelle et le service irréprochable. Je recommande vivement.',
    rating: 5,
  },
  {
    name: 'Jean-Pierre D.',
    text: 'Pour notre mariage, les desserts étaient parfaits. Tous nos invités ont été conquis. Un grand merci !',
    rating: 5,
  },
  {
    name: 'Sophie M.',
    text: 'Une pâtisserie qui mérite vraiment sa réputation. Les créations sont à la fois élégantes et gourmandes.',
    rating: 5,
  },
  {
    name: 'Thomas R.',
    text: 'Commande spéciale pour l\'entreprise : le buffet salé était un vrai succès. Professionnalisme et qualité au rendez-vous.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Avis Clients
          </h2>
          <p className="text-lg text-chocolate/70">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream rounded-lg p-6 hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-chocolate/80 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-chocolate font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

