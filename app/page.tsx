import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import Testimonials from '@/components/sections/Testimonials'
import SpecialOrders from '@/components/sections/SpecialOrders'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CategoriesSection />
      <FeaturedProducts />
      <SpecialOrders />
      <Testimonials />
    </>
  )
}

