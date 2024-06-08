import Image from "next/image";
import Link from "next/link";
import arrowImage from "../../../public/arrow.png";
import { k_FONT_HEADING_2, k_FONT_PROJECT_TEXT } from "../globals";

const Project = (props : { name: string; text: string; icon: any, project: string }) => {
  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap break-words mt-[2rem] md:mt-[5rem]">
      <div className="basis-1/1 lg:basis-1/2">
          <div className={`${k_FONT_HEADING_2} mt-[1rem]`}>{props.name}</div>
          <div className={`${k_FONT_PROJECT_TEXT} mt-[1rem] lg:mt-[2rem] lg:pr-[8rem]`}>
              {props.text}
          </div>
          <div className={`project-link ${k_FONT_PROJECT_TEXT} mt-[1rem]`}>
            <Link href={`/work/${props.project}#start`}>
              Explore this project
              <Image className="inline-block ml-[1rem] w-[4rem]" src={arrowImage} alt=""/>
            </Link>
          </div>
        </div>
        <div className="basis-1/1 lg:basis-1/2 order-first lg:order-last">
          <Image className="project-image" src={props.icon} alt=""/>
        </div>
    </div>
  );
};

export default Project;
