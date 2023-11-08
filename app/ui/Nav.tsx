import Image from "next/image"
import { headerLogo } from "@/assets/images"
import { hamburger } from "@/assets/icons"
import Link from "next/link"
import { navLinks } from "@/app/lib/constants.index"
import { montserrat } from "./fonts"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
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
        <div className="lg:hidden">
          <Image src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}
export default Nav
