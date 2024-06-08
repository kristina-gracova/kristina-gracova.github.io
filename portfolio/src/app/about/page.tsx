import Slider from "@/components/slider/slider";
import Navbar from "../../components/navbar/navbar";
import { k_FONT_HEADING_2, k_FONT_PROJECT_TEXT, k_PAGE_MARGIN, k_PAGE_WIDTH } from "../globals";

export default function About() {
  return (
    <main>
      <div className={`${k_PAGE_WIDTH}`}>
        <div className={`${k_PAGE_MARGIN}`}>
          <div>
            <Navbar/>
          </div>
          <Slider name="About"/>
          <div className={`mt-[10rem] flex flex-row flex-wrap`}>
            <div className="basis-1/1 md:basis-7/12">
              <div className={`${k_FONT_HEADING_2}`}>
                Hi, I’m Kristina
              </div>
              <div className={`${k_FONT_PROJECT_TEXT} mt-[2rem]`}>
                A seasoned UX/UI designer based in London. Over the past five years,
                I have specialised in crafting experiences that combine aesthetics with
                functionality. My approach is rooted in minimalism, always emphasising
                clarity and simplicity.
              </div>
              <div className={`${k_FONT_PROJECT_TEXT} mt-[2rem]`}>
                With a background in marketing, I bring strategic edge to my designs,
                ensuring they not only delight users but also drive business growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
