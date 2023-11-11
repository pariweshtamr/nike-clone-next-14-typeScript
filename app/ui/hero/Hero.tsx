"use client"
import { arrowRight } from "@/assets/icons"
import { Button } from ".."
import { shoes, statistics } from "@/app/lib/constants.index"
import { montserrat, palanquin } from "../fonts"
import Image, { StaticImageData } from "next/image"
import { bigShoe1 } from "@/assets/images"
import ShoeCard from "../ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<StaticImageData>(bigShoe1)

  return (
    <section className="xl:padding-l padding-b">
      <div
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className={`${montserrat.className} text-xl text-coral-red`}>
            Our Summer Collections
          </p>
          <h1
            className={`${palanquin.className} mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold`}
          >
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-3xl">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p
            className={`${montserrat.className} text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm`}
          >
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className={`${palanquin.className} text-4xl font-bold`}>
                  {stat.value}
                </p>
                <p
                  className={`${montserrat.className} leading-7 text-slate-gray`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <Image
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain z-10 relative"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <ShoeCard
                  shoeObj={shoe}
                  setBigShoeImg={setBigShoeImg}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
