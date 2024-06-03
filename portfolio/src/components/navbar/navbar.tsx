"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logoImage from "../../../public/kg.png";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="grid grid-flow-col auto-cols-auto lg:gap-[2rem]">
        <div className="col-span-1 lg:col-span-9">
          <Link href="/">
            <Image className="max-w-[4rem]" src={logoImage} alt="" priority={true}/>
          </Link>
        </div>
        <div className="navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner ${pathName === "/work" ? "navbar-link-active" : ""}`} href="/work">Work</Link>
            { pathName !== "/work" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
        <div className="navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner ${pathName === "/about" ? "navbar-link-active" : ""}`} href="/about">About</Link>
            { pathName !== "/about" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
        <div className="navbar-link">
          <div className="flex flex-col min-h-[100%] items-center justify-center">
            <Link className={`navbar-link-inner ${pathName === "/contact" ? "navbar-link-active" : ""}`} href="/contact">Contact</Link>
            { pathName !== "/contact" && <div className="navbar-link-dot">.</div> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
