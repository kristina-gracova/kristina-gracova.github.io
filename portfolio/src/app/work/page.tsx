import Slider from "@/components/slider/slider";
import Navbar from "../../components/navbar/navbar";
import Project from "./project";

export default function Work() {
  return (
    <main>
      <Navbar/>
      <div className="flex flex-col flex-wrap justify-center gap-52 ml-[3vw] mr-[3vw] lg:mr-[0vw]">
        <Slider name="Work"/>
        <Project name="Jar of Joy"
                 icon="./jarofjoy.svg"
                 text="A fun-filled app designed to enhance children’s development and wellbeing through a carefully curated collection of engaging activities"/>
        <Project name="Connected Home Hub"
                 icon="./connectedhomehub.svg"
                 text="App designed for energy consumption analysis, providing users with the right tools to reduce their heating and water bills and become more sustainable"/>
        <Project name="My Yoga Studio"
                 icon="./myyogastudio.svg"
                 text="A yoga companion app for booking classes, tracking progress and learning more about the practice"/>
        <Project name="QReadings"
                 icon="./qreadings.svg"
                 text="Utility app that digitises meter reading for efficient collection of energy data from residential and commercial properties"/>
        <Project name="Manual Readings Hub"
                 icon="./manualreadingshub.svg"
                 text="Admin platform providing a complete overview of meter readings, data editing and user management"/>
      </div>
    </main>
  );
}
