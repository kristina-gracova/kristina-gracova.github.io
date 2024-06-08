import Landing from "../components/landing/landing";
import Navbar from "../components/navbar/navbar";
import { k_PAGE_MARGIN, k_PAGE_WIDTH } from "./globals";

export default function Home() {
  return (
    <main>
      <div className={`${k_PAGE_WIDTH}`}>
        <div className={`${k_PAGE_MARGIN}`}>
          <div>
            <Navbar/>
          </div>
          <div>
            <Landing/>
          </div>
        </div>
      </div>
    </main>
  );
}
