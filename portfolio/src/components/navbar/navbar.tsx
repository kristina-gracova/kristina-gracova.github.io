"use client";

import { Junge } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logoImage from "../../../public/kg.png";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <div className={`flex flex-row ${junge.variable} min-h-[10vh] max-h-[10vh] mt-[5vw] md:mt-[2vw] ml-[4vw] md:ml-[15vw] mr-[4vw] md:mr-[15vw] gap-[5vw]`}>
        <div className="basis-6/12 grow">
          <Link href="/"><Image className="logo" src={logoImage} alt="" priority={true}/></Link>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner text-[3vh] ${pathName === "/work" ? "navbar-link-active" : ""}`} href="/work">Work</Link>
            { pathName !== "/work" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner text-[3vh] ${pathName === "/about" ? "navbar-link-active" : ""}`} href="/about">About</Link>
            { pathName !== "/about" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner text-[3vh] ${pathName === "/contact" ? "navbar-link-active" : ""}`} href="/contact">Contact</Link>
            { pathName !== "/contact" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
