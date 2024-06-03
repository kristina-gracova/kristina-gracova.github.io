import Image from "next/image";
import Link from "next/link";
import arrowImage from "../../../public/arrow.png";

const Project = (props : { name: string; text: string; icon: any, project: string }) => {
  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap break-words mt-[5rem]">
      <div className="basis-1/1 lg:basis-1/2">
          <div className="heading-2 mt-[1rem] text-5xl lg:text-8xl">{props.name}</div>
          <div className="project-text text-lg md:text-3xl mt-[1rem] lg:mt-[2rem] lg:pr-[13rem]">
              {props.text}
          </div>
          {/* <div className="project-link">
            <Link href={`/work/${props.project}#start`}>
              Explore this project <Image className="arrow" src={arrowImage} alt=""/>
            </Link>
          </div> */}
        </div>
        <div className="basis-1/1 lg:basis-1/2 order-first lg:order-last">
          <Image className="project-image" src={props.icon} alt=""/>
        </div>
    </div>
  );
};

export default Project;
