import Slider from "@/components/slider/slider";
import Navbar from "../../components/navbar/navbar";
import { Junge, Quattrocento_Sans } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
});

const qcs = Quattrocento_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-qcs",
});

export default function About() {
  return (
    <main>
      <div className="flex flex-col flex-wrap min-w-[100vw] min-h-[100vh]">
        <Navbar/>
        <Slider name="About"/>
        <div className={`flex flex-row flex-wrap xl:flex-nowrap ${junge.variable}`}>
          <div className="basis-1/1 xl:basis-2/12"/>
          <div className="basis-1/1 xl:basis-5/12">
            <div className="heading-2 text-[4vh] xl:text-[10vh] ml-[3vw] xl:ml-[-2vw] mr-[3vw] pb-12">Hi, I’m Kristina</div>
            <div className={`project-text text-[2.5vh] xl:text-[3vh] ml-[3vw] xl:ml-[-2vw] mr-[3vw] pb-12 ${qcs.variable}`}>
              A seasoned UX/UI designer based in London. Over the past five years,
              I have specialised in crafting experiences that combine aesthetics with
              functionality. My approach is rooted in minimalism, always emphasising
              clarity and simplicity.
            </div>
            <div className={`project-text text-[2.5vh] xl:text-[3vh] ml-[3vw] xl:ml-[-2vw] mr-[3vw] ${qcs.variable}`}>
              With a background in marketing, I bring strategic edge to my designs,
              ensuring they not only delight users but also drive business growth.
            </div>
          </div>
          <div className="basis-0/1 xl:basis-5/12"/>
        </div>
      </div>
    </main>
  );
}
