"use client"
import Image from "next/image"
import { headerLogo } from "@/assets/images"
import Link from "next/link"
import { navLinks } from "@/app/lib/constants.index"
import { montserrat, palanquin } from "./fonts"
import { Button } from "."
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import {
  Bars3BottomRightIcon,
  InboxStackIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false)
  const openNav = () => {
    setOpen(true)
  }
  const closeNav = () => {
    setOpen(false)
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bodyElem = window.document.querySelector("body")
      if (bodyElem) {
        bodyElem.style.overflowY = open ? "hidden" : "scroll"
      }
    }
  }, [open])

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>

        <ul className="flex-1 justify-center items-center gap-16 hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`${montserrat.className} antialiased leading-normal text-lg text-slate-gray`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-10">
          <Button
            label="Sign In"
            icon={<ArrowRightOnRectangleIcon className="w-6" />}
          />
          <div className="flex flex-col">
            <ShoppingBagIcon className="w-8" />
            <h5>Cart</h5>
          </div>
        </div>
        <div className="lg:hidden">
          <Bars3BottomRightIcon
            className="w-8 cursor-pointer"
            onClick={openNav}
          />
        </div>
      </nav>

      <nav
        className={`${
          open
            ? "left-0 right-0 top-0 bottom-0 transition-all z-[999]"
            : "right-[-100%]"
        } lg:hidden fixed`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[68%] max-md:hidden blur-md bg-transparent z-[999]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[32%] max-md:w-full bg-white !z-[999999] px-8 py-12">
          <XMarkIcon
            className="w-6 absolute top-2 right-6 cursor-pointer"
            onClick={closeNav}
          />
          <div className="flex flex-col justify-between h-full">
            <ul className="text-black flex flex-col gap-4 font-[500]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${palanquin.className} antialiased leading-normal text-2xl`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-10">
              <p className="text-lg text-slate-600 font-[500]">
                Become a Nike Member for the best products, inspiration and
                stories in sport.
              </p>
              <div className="flex gap-4">
                <Button
                  label="Join Us"
                  className="px-6 !py-3 !bg-black !text-[16px] !border-black"
                />
                <Button
                  label="Sign In"
                  className="px-6 !py-3 !bg-white !text-[16px] !border-slate-500 text-black"
                />
              </div>
            </div>

            <div>
              <ul className="text-lg flex flex-col gap-4 font-[500]">
                <li>
                  <Link href={"/cart"} className="flex items-center gap-4">
                    <ShoppingBagIcon className="w-4 h-4" /> Bag
                  </Link>
                </li>
                <li>
                  <Link href={"/orders"} className="flex items-center gap-4">
                    <InboxStackIcon className="w-4" /> <p>Orders</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Nav
