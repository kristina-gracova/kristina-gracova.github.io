import Slider from "@/components/slider/slider";
import Navbar from "../../components/navbar/navbar";
import ConnectedHomeHub from "./projects/connectedhomehub";
import JarOfJoy from "./projects/jarofjoy";
import ManualReadingsHub from "./projects/manualreadingshub";
import MyYogaStudio from "./projects/myyogastudio";
import QReadings from "./projects/qreadings";

export default function Work() {
  return (
    <main>
      <Navbar/>
      <div className="flex flex-col justify-center gap-52">
        <Slider name="Work"/>
        <JarOfJoy/>
        <ConnectedHomeHub/>
        <MyYogaStudio/>
        <QReadings/>
        <ManualReadingsHub/>
      </div>
    </main>
  );
}
