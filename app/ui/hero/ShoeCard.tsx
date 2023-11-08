import { ShoeCardProps } from "@/types/types"
import clsx from "clsx"
import Image from "next/image"

const ShoeCard = ({ shoeObj, setBigShoeImg, bigShoeImg }: ShoeCardProps) => {
  const handleClick = () => {
    setBigShoeImg(shoeObj.bigShoe)
  }

  return (
    <div
      className={clsx(
        "border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1",
        {
          "border-coral-red": bigShoeImg === shoeObj.bigShoe,
        }
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-[url('/thumbnail-background.svg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoeObj.thumbnail}
          alt="shoe-collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}
export default ShoeCard
