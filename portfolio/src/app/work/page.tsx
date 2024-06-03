import Slider from "@/components/slider/slider";
import Navbar from "../../components/navbar/navbar";
import Project from "./project";

import jarofjoyImage from "../../../public/jarofjoy.png";
import connectedhomehubImage from "../../../public/connectedhomehub.png";
import myyogastudioImage from "../../../public/myyogastudio.png";
import qreadingsImage from "../../../public/qreadings.png";
import manualreadingshubImage from "../../../public/manualreadingshub.png";

export default function Work() {
  return (
    <main>
      <div className="grid grid-flow-row auto-rows-auto mt-[2rem] ml-[2rem] mr-[2rem] text-2xl md:text-3xl">
        <div>
          <Navbar/>
        </div>
          {/* <div className="row-span-1"> */}
          <Slider name="Work"/>
          {/* </div> */}
          <Project name="Jar of Joy"
                   project="jarofjoy"
                   icon={jarofjoyImage}
                   text="A fun-filled app designed to enhance children’s development and wellbeing through a carefully curated collection of engaging activities"/>
          <Project name="Connected Home Hub"
                   project="connectedhomehub"
                   icon={connectedhomehubImage}
                   text="App designed for energy consumption analysis, providing users with the right tools to reduce their heating and water bills and become more sustainable"/>
          <Project name="My Yoga Studio"
                   project="myyogastudio"
                   icon={myyogastudioImage}
                   text="A yoga companion app for booking classes, tracking progress and learning more about the practice"/>
          <Project name="QReadings"
                   project="qreadings"
                   icon={qreadingsImage}
                   text="Utility app that digitises meter reading for efficient collection of energy data from residential and commercial properties"/>
          <Project name="Manual Readings Hub"
                   project="manualreadingshub"
                   icon={manualreadingshubImage}
                   text="Admin platform providing a complete overview of meter readings, data editing and user management"/>
        </div>
    </main>
  );
}
