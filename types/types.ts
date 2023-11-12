import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface ButtonProps {
  label: string
  iconUrl?: string
  className?: string
  icon?: ReactNode
}

export interface ShoeCardProps {
  shoeObj: {
    id: number
    thumbnail: StaticImageData
    bigShoe: StaticImageData
  }
  setBigShoeImg: (imgUrl: StaticImageData) => void
  bigShoeImg: StaticImageData
}

export interface PopularProdCardProps {
  imgURL: StaticImageData
  name: string
  price: number
}
export interface ServiceCardProps {
  imgURL: StaticImageData
  label: string
  subtext: string
}
export interface ReviewCardProps {
  imgURL: StaticImageData
  customerName: string
  rating: number
  feedback: string
}
