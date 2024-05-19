import { Junge } from "next/font/google";
import Link from "next/link";
import Image from "next/image"
import logoImage from "../../../public/kg.png"

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Navbar = () => {
  return (
    <>
      <div className={`flex flex-row ${junge.variable} max-h-[10vh] mt-[5vw] xl:mt-[2vw] ml-[4vw] xl:ml-[15vw] mr-[4vw] xl:mr-[15vw] gap-[5vw]`}>
        <div className="basis-6/12 grow">
          <Link href="/"><Image className="logo" src={logoImage} alt=""/></Link>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className="navbar-link-inner text-[3vh]" href="/work">Work</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className="navbar-link-inner text-[3vh]" href="/about">About</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className="navbar-link-inner text-[3vh]" href="/contact">Contact</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
