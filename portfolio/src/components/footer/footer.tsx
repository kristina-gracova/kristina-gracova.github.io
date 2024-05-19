import { Junge } from "next/font/google";
import Link from "next/link";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Footer = () => {
  return (
    <>
        <div className={`flex flex-row ${junge.variable} max-h-[10vh] mt-[5vw] xl:mt-[2vw] ml-[8vw] xl:ml-[12vw] mr-[1vw] xl:mr-[13vw] gap-[5vw]`}>
          <div className="hidden xl:block xl:basis-6/12 navbar-link grow text-[3vh]">© 2024 Kristina Gracova</div>
          <div className="basis-1/12 navbar-link">
            <div className="flex flex-col min-h-[100%] items-center justify-center">
              <Link className="navbar-link-inner text-[3vh]" href="https://www.linkedin.com/in/kristina-gracova/">LinkedIn</Link>
              <div className="navbar-link-dot">.</div>
            </div>
          </div>
          <div className="basis-1/12 navbar-link">
            <div className="flex flex-col min-h-[100%] items-center justify-center">
              <Link className="navbar-link-inner text-[3vh]" href="https://www.behance.net/kristinagracova/">Behance</Link>
              <div className="navbar-link-dot">.</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer;
