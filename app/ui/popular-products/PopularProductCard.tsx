import { PopularProdCardProps } from "@/types/types"
import Image from "next/image"
import { star } from "@/assets/icons"
import { montserrat, palanquin } from "../fonts"

const PopularProductCard = ({ imgURL, name, price }: PopularProdCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image src={imgURL} alt="product-img" className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24} />
        <p
          className={`${montserrat.className} text-xl leading-normal text-slate-gray`}
        >
          (4.5)
        </p>
      </div>
      <h3
        className={`${palanquin.className} mt-2 text-2xl leading-normal font-semibold`}
      >
        {name}
      </h3>
      <p
        className={`${montserrat.className} mt-2 text-2xl leading-normal text-coral-red`}
      >
        ${price}
      </p>
    </div>
  )
}
export default PopularProductCard
