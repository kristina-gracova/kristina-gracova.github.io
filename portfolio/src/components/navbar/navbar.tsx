import { Junge } from "next/font/google";
import Link from "next/link";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Navbar = () => {
  return (
    <>
      <div className={`flex flex-row ${junge.variable} max-h-[10vh] mt-[5vw] lg:mt-[2vw] ml-[1vw] lg:ml-[15vw] mr-[1vw] lg:mr-[15vw] gap-[5vw]`}>
        <div className="basis-6/12 grow">
          <Link href="/"><img className="logo" src="./kg.svg"></img></Link>
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
