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

export default function JarOfJoy() {
  return (
    <>
      <div className={`flex flex-row ${junge.variable}`}>
        <div className="basis-1/12"/>
        <div className="basis-4/12">
          <div className="heading-2">Jar of Joy</div>
          <div className={`project-text ${qcs.variable}`}>
            A fun-filled app designed to enhance children’s development
            and wellbeing through a carefully curated collection of engaging activities
          </div>
          <div className="project-link">
            Explore the case study
          </div>
        </div>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <img className="project-image" src="./jarofjoy.svg"></img>
        </div>
      </div>
    </>
  );
}
