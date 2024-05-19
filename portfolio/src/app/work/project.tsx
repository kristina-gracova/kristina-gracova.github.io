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

const Project = (props : { name: string; text: string; icon: string }) => {
  return (
    <>
      <div className={`flex flex-row flex-wrap lg:flex-nowrap ${junge.variable}`}>
        <div className="basis-1/1 lg:basis-1/2">
            <div className="heading-2 text-[4vh] lg:text-[10vh] ml-[3vw] lg:ml-[15vw] mr-[3vw] lg:mr-[6vw]">{props.name}</div>
            <div className={`project-text text-[2.5vh] lg:text-[3vh] ml-[3vw] lg:ml-[15vw] mr-[3vw] lg:mr-[6vw] mt-[2vw] ${qcs.variable}`}>
                {props.text}
            </div>
            {/* <div className="project-link">
              Explore this project
            </div> */}
          </div>
          <div className="basis-1/1 lg:basis-1/2 order-first lg:order-last">
            <img className="project-image" src={`${props.icon}`}></img>
          </div>
      </div>
    </>
  );
};

export default Project;
