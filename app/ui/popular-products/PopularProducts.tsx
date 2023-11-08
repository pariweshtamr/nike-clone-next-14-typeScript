import { products } from "../../lib/constants.index"
import PopularProductCard from "./PopularProductCard"
import { montserrat, palanquin } from "../fonts"
const PopularProducts = () => {
  return (
    <section className="padding">
      <div id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className={`${palanquin.className} font-bold text-4xl`}>
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p
            className={`${montserrat.className} lg:max-w-lg mt-2 text-slate-gray`}
          >
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <PopularProductCard
              key={product.id}
              {...product}
            ></PopularProductCard>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PopularProducts
