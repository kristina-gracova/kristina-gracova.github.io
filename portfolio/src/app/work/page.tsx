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
      <div className="flex flex-col flex-wrap min-w-[100vw] min-h-[100vh]">
        <Navbar/>
        <div className="flex flex-col flex-wrap justify-center gap-[3vw]">
          <Slider name="Work"/>
          <Project name="Jar of Joy"
                  icon={jarofjoyImage}
                  text="A fun-filled app designed to enhance children’s development and wellbeing through a carefully curated collection of engaging activities"/>
          <Project name="Connected Home Hub"
                  icon={connectedhomehubImage}
                  text="App designed for energy consumption analysis, providing users with the right tools to reduce their heating and water bills and become more sustainable"/>
          <Project name="My Yoga Studio"
                  icon={myyogastudioImage}
                  text="A yoga companion app for booking classes, tracking progress and learning more about the practice"/>
          <Project name="QReadings"
                  icon={qreadingsImage}
                  text="Utility app that digitises meter reading for efficient collection of energy data from residential and commercial properties"/>
          <Project name="Manual Readings Hub"
                  icon={manualreadingshubImage}
                  text="Admin platform providing a complete overview of meter readings, data editing and user management"/>
        </div>
      </div>
    </main>
  );
}
