import {
  CustomerReviews,
  Footer,
  Hero,
  Nav,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./ui"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}
