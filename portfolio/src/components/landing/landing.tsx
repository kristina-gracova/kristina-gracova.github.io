import { k_FONT_HEADING_1, k_FONT_SUBHEADING_1 } from "../../app/globals";

const Landing = () => {
  return (
    <>
      <div className="mt-[3rem] lg:mt-[10rem] flex flex-wrap flex-col justify-center grow gap-[3rem]">
        <div className={`basis-full ${k_FONT_HEADING_1} text-center`}>
          Kristina
        </div>
        <div className={`basis-full ${k_FONT_SUBHEADING_1} text-center`}>
          • Senior UX/UI Designer based in London •
        </div>
        <div className={`basis-full ${k_FONT_HEADING_1} text-center`}>
          Gracova
        </div>
      </div>
    </>
  )
};

export default Landing;
