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
      <div className="project flex flex-col gap-52">
        <JarOfJoy/>
        <ConnectedHomeHub/>
        <MyYogaStudio/>
        <QReadings/>
        <ManualReadingsHub/>
      </div>
    </main>
  );
}
