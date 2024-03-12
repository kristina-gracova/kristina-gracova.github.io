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
        <div className={`grid grid-cols-12 ${junge.variable}`}>
          <div className="col-start-2 logo"></div>
          <div className="col-start-9 navbar-link">Work</div>
          <div className="col-start-10 navbar-link">About</div>
          <div className="col-start-11 navbar-link">Contact</div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
