import Landing from "./landing";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="mt-[2rem] ml-[2rem] mr-[2rem] text-2xl md:text-3xl">
        <div>
          <Navbar/>
        </div>
        <div>
          <Landing/>
        </div>
      </div>
    </main>
  );
}
