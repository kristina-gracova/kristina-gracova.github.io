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

export default function QReadings() {
  return (
    <>
      <div className={`flex flex-row ${junge.variable}`}>
        <div className="basis-2/12"/>
        <div className="basis-3/12">
          <div className="heading-2">QReadings</div>
          <div className={`project-text ${qcs.variable}`}>
            Utility app that digitises meter reading for efficient
            collection of energy data from residential and commercial properties
          </div>
          <div className="project-link">
            Explore this project
          </div>
        </div>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <img className="project-image" src="./qreadings.svg"></img>
        </div>
      </div>
    </>
  );
}
