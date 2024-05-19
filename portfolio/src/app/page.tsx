import Landing from "./landing";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col flex-wrap min-w-[100vw] min-h-[100vh]">
        <Navbar/>
        <Landing/>
      </div>
    </main>
  );
}
