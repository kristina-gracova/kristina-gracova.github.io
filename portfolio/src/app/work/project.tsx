import { Junge, Quattrocento_Sans } from "next/font/google";
import Image from "next/image"

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

const Project = (props : { name: string; text: string; icon: any }) => {
  return (
    <>
      <div className={`flex flex-row flex-wrap xl:flex-nowrap ${junge.variable}`}>
        <div className="basis-1/1 xl:basis-1/2">
            <div className="heading-2 text-[4vh] xl:text-[10vh] ml-[3vw] xl:ml-[15vw] mr-[3vw] xl:mr-[6vw]">{props.name}</div>
            <div className={`project-text text-[2.5vh] xl:text-[3vh] ml-[3vw] xl:ml-[15vw] mr-[3vw] xl:mr-[6vw] mt-[2vw] ${qcs.variable}`}>
                {props.text}
            </div>
            {/* <div className="project-link">
              Explore this project
            </div> */}
          </div>
          <div className="basis-1/1 xl:basis-1/2 order-first xl:order-last">
            <Image className="project-image" src={props.icon} alt=""/>
          </div>
      </div>
    </>
  );
};

export default Project;
