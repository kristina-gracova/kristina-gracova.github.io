import Landing from "../components/landing/landing";
import Navbar from "../components/navbar/navbar";
import { k_PAGE_MARGIN } from "./globals";

export default function Home() {
  return (
    <main>
      <div className={`${k_PAGE_MARGIN}`}>
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
