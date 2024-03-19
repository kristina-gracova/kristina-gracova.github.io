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
      <Navbar/>
      <div className={`project flex flex-row ${junge.variable}`}>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <div className="heading-2">Hi, I’m Kristina</div>
          <div className={`project-text pb-12 ${qcs.variable}`}>
            A seasoned UX/UI designer based in London. Over the past five years,
            I have specialised in crafting experiences that combine aesthetics with
            functionality. My approach is rooted in minimalism, always emphasising
            clarity and simplicity.
          </div>
          <div className={`project-text ${qcs.variable}`}>
            With a background in marketing, I bring strategic edge to my designs,
            ensuring they not only delight users but also drive business growth.
          </div>
        </div>
        <div className="basis-5/12"/>
      </div>
    </main>
  );
}
