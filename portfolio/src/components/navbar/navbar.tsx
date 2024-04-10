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
      <div className={`flex flex-row ${junge.variable} max-h-[10vh] mt-[1vw] ml-[15vw] mr-[15vw]`}>
        <div className="basis-6/12 grow">
          <Link href="/"><div className="logo"><img src="./kg.svg"></img></div></Link>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col items-center">
            <Link className="navbar-link-inner" href="/work">Work</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col items-center">
            <Link className="navbar-link-inner" href="/about">About</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
        <div className="basis-1/12 navbar-link">
          <div className="flex flex-col items-center">
            <Link className="navbar-link-inner" href="/contact">Contact</Link>
            <div className="navbar-link-dot">.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
