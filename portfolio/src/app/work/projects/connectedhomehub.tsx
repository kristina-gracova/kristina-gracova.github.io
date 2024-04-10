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

export default function ConnectedHomeHub() {
  return (
    <>
      <div className={`flex flex-row ${junge.variable}`}>
        <div className="basis-2/12"/>
        <div className="basis-3/12">
          <div className="heading-2">Connected Home Hub</div>
          <div className={`project-text ${qcs.variable}`}>
              App designed for energy consumption analysis, providing users
              with the right tools to reduce their heating and water bills
              and become more sustainable
          </div>
          <div className="project-link">
            Explore this project
          </div>
        </div>
        <div className="basis-1/12"/>
        <div className="basis-6/12">
          <img className="project-image" src="./connectedhomehub.svg"></img>
        </div>
      </div>
    </>
  );
}
