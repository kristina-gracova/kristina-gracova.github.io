import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="grid grid-flow-col auto-cols-auto lg:gap-[2rem] mt-[10rem]">
      <div className="hidden md:block col-span-1 lg:col-span-9 navbar-link">
          © 2024 Kristina Gracova
      </div>
      <div className="navbar-link">
        <div className="flex flex-col min-h-[100%] items-center justify-center">
          <Link className={`navbar-link-inner`} href="https://www.linkedin.com/in/kristina-gracova/" target="_blank">LinkedIn</Link>
          <div className="navbar-link-dot">.</div>
        </div>
      </div>
      <div className="grow">
      </div>
      <div className="navbar-link">
        <div className="flex flex-col min-h-[100%] items-center justify-center">
          <Link className={`navbar-link-inner`} href="https://www.behance.net/kristinagracova/" target="_blank">Behance</Link>
          <div className="navbar-link-dot">.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
