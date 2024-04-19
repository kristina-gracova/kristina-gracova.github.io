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
      <div className="basis-0/12 lg:basis-1/12"/>
      <div className="basis-1/1 lg:basis-4/12">
          <div className="heading-2">{props.name}</div>
          <div className={`project-text ${qcs.variable}`}>
              {props.text}
          </div>
          {/* <div className="project-link">
            Explore this project
          </div> */}
        </div>
        <div className="basis-0/12 lg:basis-1/12"/>
        <div className="basis-1/1 lg:basis-6/12 order-first lg:order-last">
          <img className="lg:min-w-[50vw]" src={`${props.icon}`}></img>
        </div>
      </div>
    </>
  );
};

export default Project;
