import { Junge, Quattrocento_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import arrowImage from "../../../public/arrow.png";

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

const Project = (props : { name: string; text: string; icon: any, project: string }) => {
  return (
    <>
      <div className={`flex flex-row flex-wrap lg:flex-nowrap break-words ${junge.variable} mb-[15vw] lg:mb-[0vw]`}>
        <div className="basis-1/1 lg:basis-1/2 min-w-[40vw]">
            <div className="heading-2 text-[4vh] lg:text-[10vh] mt-[4vw] ml-[4vw] lg:ml-[15vw] mr-[4vw] lg:mr-[6vw]">{props.name}</div>
            <div className={`project-text text-[2.5vh] lg:text-[3vh] ml-[4vw] lg:ml-[15vw] mr-[4vw] lg:mr-[6vw] mt-[2vw] ${qcs.variable}`}>
                {props.text}
            </div>
            <div className={`project-link text-[2.5vh] lg:text-[3vh] ml-[4vw] lg:ml-[15vw] mr-[4vw] lg:mr-[6vw] mt-[2vw] ${junge.variable}`}>
              <Link href={`/work/${props.project}#start`}>Explore this project <Image className="arrow" src={arrowImage} alt=""/></Link>
            </div>
          </div>
          <div className="basis-1/1 lg:basis-1/2 order-first lg:order-last">
            <Image className="project-image" src={props.icon} alt=""/>
          </div>
      </div>
    </>
  );
};

export default Project;
