import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Footer = () => {
  return (
    <>
      <div className="h-120px navbar">
        <div className={`flex flex-row ${junge.variable}`}>
          <div className="basis-1/12"/>
          <div className="basis-3/12 navbar-link">© 2024 Kristina Gracova</div>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12"/>
          <div className="basis-1/12 navbar-link">LinkedIn</div>
          <div className="basis-1/12 navbar-link">Behance</div>
          <div className="basis-1/12 navbar-link">Dribbble</div>
          <div className="basis-1/12"/>
        </div>
      </div>
    </>
  )
}

export default Footer;
