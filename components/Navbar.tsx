import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 pt-7">
      <Link href="/">
        <h1 className="bold-16 whitespace-nowrap cursor-pointer italic" style={{fontSize:"2rem"}}>TRAVEL <span className="text-green-500">24</span></h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex bold-10" >
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className=" text-2xl font-bold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar