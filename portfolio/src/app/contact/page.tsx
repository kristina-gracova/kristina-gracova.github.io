import Footer from "@/components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Junge } from "next/font/google";
import Slider from "@/components/slider/slider";
import Link from "next/link";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
});

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col flex-wrap min-w-[100vw] min-h-[100vh]">
      <Navbar/>
      <div className="flex flex-col ml-[3vw] mr-[3vw]">
      <Slider name="Contact"/>
      <div className={`project flex flex-row min-h-[60vh] ${junge.variable}`}>
        <div className="basis-2/12"/>
        <div className="basis-5/12">
          <div className="heading-2 text-[4vh] md:text-[10vh] ml-[0vw] md:ml-[-4vw] pb-12">Let’s work together</div>
          <div className={`email-address text-[2.5vh] md:text-[3vh] ml-[0vw] md:ml-[-4vw] ${junge.variable}`}>
              <Link href="mailto:hello@kristinagracova.com">hello@kristinagracova.com</Link>
          </div>
        </div>
        <div className="basis-5/12"/>
      </div>
      <Footer/>
      </div>
      </div>
    </main>
  );
}
