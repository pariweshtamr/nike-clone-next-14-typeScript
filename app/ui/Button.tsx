import { ButtonProps } from "@/types/types"
import Image from "next/image"
import { montserrat } from "./fonts"

const Button = ({ label, iconUrl, className, icon }: ButtonProps) => {
  return (
    <button
      className={`${montserrat.className} flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none rounded-full
       bg-coral-red text-white border-coral-red ${className}`}
    >
      {label}
      {icon && <div>{icon}</div>}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  )
}
export default Button
