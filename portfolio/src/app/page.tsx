import Landing from "./landing";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div id="page-overlay"/>
      <div className="flex flex-col flex-wrap">
        <Navbar/>
        <Landing/>
      </div>
    </main>
  );
}
