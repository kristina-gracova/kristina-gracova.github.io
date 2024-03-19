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

export default function MyYogaStudio() {
  return (
    <>
      <div className={`flex flex-row ${junge.variable}`}>
        <div className="basis-1/12"/>
        <div className="basis-4/12">
          <div className="heading-2">My Yoga Studio</div>
          <div className={`project-text ${qcs.variable}`}>
            A yoga companion app for booking classes, tracking progress
            and learning more about the practice
          </div>
          <div className="project-link">
            Explore this project
          </div>
        </div>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <img className="project-image" src="./myyogastudio.svg"></img>
        </div>
      </div>
    </>
  );
}
