import { star } from "@/assets/icons"
import { ReviewCardProps } from "@/types/types"
import Image from "next/image"
import { montserrat, palanquin } from "../fonts"

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p
        className={`${montserrat.className} mt-6 max-w-sm text-center info-text`}
      >
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt="star"
        />
        <p className={`${montserrat.className} text-xl text-slate-gray`}>
          ({rating})
        </p>
      </div>
      <h3
        className={`${palanquin.className} mt-1 text-3xl text-center font-bold`}
      >
        {customerName}
      </h3>
    </div>
  )
}
export default ReviewCard
