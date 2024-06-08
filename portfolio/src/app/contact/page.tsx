import Footer from "@/components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Slider from "@/components/slider/slider";
import Link from "next/link";
import { k_FONT_HEADING_2, k_FONT_SUBHEADING_1, k_PAGE_MARGIN, k_PAGE_WIDTH } from "../globals";

export default function Contact() {
  return (
    <main>
      <div className={`${k_PAGE_WIDTH}`}>
        <div className={`${k_PAGE_MARGIN}`}>
          <div>
            <Navbar/>
          </div>
          <Slider name="Contact"/>
          <div className={`mt-[10rem] flex flex-row flex-wrap`}>
            <div className="basis-1/1 md:basis-7/12">
              <div className={`${k_FONT_HEADING_2}`}>Let’s work together</div>
              <div className={`email-address ${k_FONT_SUBHEADING_1} mt-[3rem]`}>
                  <Link href="mailto:hello@kristinagracova.com">hello@kristinagracova.com</Link>
              </div>
            </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </main>
  );
}
