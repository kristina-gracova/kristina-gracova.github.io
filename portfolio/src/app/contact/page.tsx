import Footer from "@/components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
});

export default function Contact() {
  return (
    <main>
      <Navbar/>
      <div className={`project flex flex-row ${junge.variable}`}>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <div className="heading-2 pb-12">Let’s work together</div>
          <div className={`email-address ${junge.variable}`}>
            hello@kristinagracova.com
          </div>
        </div>
        <div className="basis-5/12"/>
      </div>
      <Footer/>
    </main>
  );
}
