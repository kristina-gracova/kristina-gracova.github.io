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
      <div className="h-120px navbar">
        <div className={`flex flex-row ${junge.variable}`}>
          <div className="basis-1/12"/>
          <div className="basis-1/12"><Link href="/"><div className="logo"><img src="./kg.svg"></img></div></Link></div>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12 navbar-link"><Link href="/work">Work</Link></div>
          <div className="basis-1/12 navbar-link"><Link href="/about">About</Link></div>
          <div className="basis-1/12 navbar-link"><Link href="/contact">Contact</Link></div>
          <div className="basis-1/12"/>
        </div>
      </div>
    </>
  )
}

export default Navbar;
