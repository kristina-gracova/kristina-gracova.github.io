import { Junge } from "next/font/google";

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
          <div className="basis-1/12"><div className="logo"></div></div>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12 navbar-link">Work</div>
          <div className="basis-1/12 navbar-link">About</div>
          <div className="basis-1/12 navbar-link">Contact</div>
          <div className="basis-1/12"/>
        </div>
      </div>
    </>
  )
}

export default Navbar;
