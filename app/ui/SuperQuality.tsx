import Image from "next/image"
import { Button } from "."
import { montserrat, palanquin } from "./fonts"
import { shoe8 } from "@/assets/images"

const SuperQuality = () => {
  return (
    <section className="padding">
      <div
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2
            className={`${palanquin.className} text-4xl capitalize font-bold lg:max-w-lg`}
          >
            We Provide You <span className="text-coral-red">Super</span>{" "}
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className={`${montserrat.className} mt-4 info-text lg:max-w-lg`}>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className={`${montserrat.className} mt-6 info-text lg:max-w-lg`}>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src={shoe8}
            alt="shoe-8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
export default SuperQuality
