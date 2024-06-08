import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    // <div className={`flex flex-row max-h-[10vh] mt-[5vw] lg:mt-[2vw] ml-[8vw] lg:ml-[12vw] mr-[1vw] lg:mr-[13vw] gap-[5vw]`}>
    //   <div className="hidden lg:block lg:basis-6/12 navbar-link grow text-[3vh]">© 2024 Kristina Gracova</div>
    //   <div className="basis-1/12 navbar-link">
    //     <div className="flex flex-col min-h-[100%] items-center justify-center">
    //       <Link className="navbar-link-inner text-[3vh]" href="https://www.linkedin.com/in/kristina-gracova/">LinkedIn</Link>
    //       <div className="navbar-link-dot">.</div>
    //     </div>
    //   </div>
    //   <div className="basis-1/12 navbar-link">
    //     <div className="flex flex-col min-h-[100%] items-center justify-center">
    //       <Link className="navbar-link-inner text-[3vh]" href="https://www.behance.net/kristinagracova/">Behance</Link>
    //       <div className="navbar-link-dot">.</div>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-flow-col auto-cols-auto lg:gap-[2rem] mt-[10rem]">
      <div className="hidden md:block col-span-1 lg:col-span-9 navbar-link">
          © 2024 Kristina Gracova
      </div>
      <div className="navbar-link">
        <div className="flex flex-col min-h-[100%] items-center justify-center">
          <Link className={`navbar-link-inner`} href="https://www.linkedin.com/in/kristina-gracova/">LinkedIn</Link>
          <div className="navbar-link-dot">.</div>
        </div>
      </div>
      <div className="grow">
      </div>
      <div className="navbar-link">
        <div className="flex flex-col min-h-[100%] items-center justify-center">
          <Link className={`navbar-link-inner`} href="https://www.behance.net/kristinagracova/">Behance</Link>
          <div className="navbar-link-dot">.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
