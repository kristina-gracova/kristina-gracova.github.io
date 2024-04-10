import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Footer = () => {
  return (
    <>
        <div className={`flex flex-row ${junge.variable} max-h-[10vh] mt-[37vh] ml-[15vw] mr-[15vw]`}>
          <div className="basis-6/12 navbar-link grow">© 2024 Kristina Gracova</div>
          <div className="basis-1/12 navbar-link">LinkedIn</div>
          <div className="basis-1/12 navbar-link">Behance</div>
        </div>
    </>
  )
}

export default Footer;
