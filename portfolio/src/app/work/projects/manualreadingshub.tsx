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

export default function ManualReadingsHub() {
  return (
    <>
      <div className={`flex flex-row ${junge.variable}`}>
        <div className="basis-2/12"/>
        <div className="basis-3/12">
          <div className="heading-2">Manual Readings Hub</div>
          <div className={`project-text ${qcs.variable}`}>
            Admin platform providing a complete overview of meter readings,
            data editing and user management
          </div>
          <div className="project-link">
            Explore this project
          </div>
        </div>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <img className="project-image" src="./manualreadingshub.svg"></img>
        </div>
      </div>
    </>
  );
}
