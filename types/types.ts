import { StaticImageData } from "next/image"

export interface ButtonProps {
  label: string
  iconUrl?: string
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
