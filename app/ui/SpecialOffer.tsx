import Image from "next/image"
import { Button } from "."
import { montserrat, palanquin } from "./fonts"
import { offer } from "@/assets/images"
import { arrowRight } from "@/assets/icons"

const SpecialOffer = () => {
  return (
    <section className="padding">
      <div className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <Image
            src={offer}
            alt="offer"
            width={773}
            height={687}
            className="object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2
            className={`${palanquin.className} text-4xl capitalize font-bold lg:max-w-lg`}
          >
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className={`${montserrat.className} mt-4 info-text lg:max-w-lg`}>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className={`${montserrat.className} mt-6 info-text lg:max-w-lg`}>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconUrl={arrowRight} />
            <Button
              label="Learn more"
              className="!bg-white !border-slate-gray !text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SpecialOffer
