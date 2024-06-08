import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../../public/yoga/0-header.png"
import img1 from "../../../../public/yoga/1.png"
import img2 from "../../../../public/yoga/2.png"
import img3 from "../../../../public/yoga/3.png"
import img4 from "../../../../public/yoga/4.png"
import img5 from "../../../../public/yoga/5.png"
import img6 from "../../../../public/yoga/6.png"
import img7 from "../../../../public/yoga/7.png"
import imgNext from "../../../../public/yoga/next.png"
import rarrowImage from "../../../../public/rarrow.png"
import { k_FONT_ALL_PROJECTS, k_FONT_PROJECT_TEXT, k_FONT_SUBHEADING_1, k_FONT_TAGS, k_PAGE_MARGIN_NO_TOP } from "@/app/globals";
import Navbar from "../../../components/navbar/navbar";

// #0073E1

export default function MyYogaStudio() {
  return (
    <main>
      <div className={`grid grid-flow-row auto-rows-auto ${k_PAGE_MARGIN_NO_TOP}`}>
        <div className="flex flex-col flex-wrap gap-[1rem]">
          <div className="block md:hidden">
            <Navbar/>
          </div>
          <div className="basis-1/1">
            <div className={`relative mt-[1rem] md:mt-[0px]`}>
              <Image src={headerImage} alt=""/>
              <div className={`absolute top-[10%] left-[0px] ${k_FONT_ALL_PROJECTS} hidden md:block`}>
                <Link href={`/work`}>
                  <Image className="inline-block ml-[1rem] w-[4rem] pt-[0px] mt-[0px] pl-[0px] ml-[0px] pb-[0.3rem] pr-[1rem]" src={rarrowImage} alt=""/>All projects
                </Link>
              </div>
              <div className="bg-[#00A1A3] absolute ml-[0px] pl-[0px] top-0 left-[-100vw] -z-50 min-w-[200vw] min-h-[100%]"/>
            </div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_TAGS}`}>
              personal project | sole designer | skill development and creative freedom
            </div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>About</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            My Yoga Studio is an app concept designed for a chain of fitness studios offering yoga classes across multiple locations in London. It aims to assist users in evaluating class suitability and monitoring their progress over time.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img1} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className="flex flex-row gap-[1rem]">
              <div className="basis-1/2">
                <div className={`${k_FONT_SUBHEADING_1}`}>
                  Goal
                </div>
                <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                Design an app to inspire users in their yoga journey and educate them about various types of yoga.
                </div>
              </div>

              <div className="basis-1/2">
                <div className={`${k_FONT_SUBHEADING_1}`}>My role</div>
                <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                Explore several design concepts to define the visual direction and craft a motivating end-to-end experience.
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img2} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>First things first</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The user experience of My Yoga Studio prioritises simplicity and gamification. This ensures that users can easily navigate the app while enjoying a sense of accomplishment and engagement. Account creation is a crucial initial step, enabling users to seamlessly monitor their progress and schedule classes. Inspired by yoga&apos;s serene atmosphere, the interface is predominantly green, aiming to create a calm and peaceful experience for users as they engage with the app.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img3} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Zen zone awaits</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The app is structured into four main sections, accessible via the bottom navigation bar. The Home tab provides an overview of the user&apos;s progress and upcoming classes, prioritising essential information. Gamification elements are integrated into proficiency levels and achievements to enhance user engagement and motivation. By rewarding progress, these features aim to boost satisfaction, encourage regular usage, and foster a sense of accomplishment in the yoga journey.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img4} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Bookings made easy</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The Classes tab facilitates browsing, booking, and rescheduling of classes. Each type of yoga has its dedicated screen, assisting users in selecting the most suitable class based on its benefits, difficulty level, and duration. Images are utilised to depict the class experience, enabling users to envision themselves in the session. For added flexibility, users can easily reschedule or cancel bookings.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img5} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Where in the world</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            Customers can locate classes through the Studios tab, which utilises location services to display nearby studios. Additionally, a search bar allows users to find studios in other areas, such as those near their workplace, for added convenience. Upon selecting a studio, users can view information about opening hours, types of classes offered, and a summary of availability for the upcoming week.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img6} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Motivation and wellbeing</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The Profile section provides users with insights into their progress, including proficiency level, achievements, and activity. Integrating gamification elements aims to motivate and engage users, ultimately enhancing their wellbeing. To provide context to this progress, it is essential to visually link it with the number of days yoga was practiced, establishing a clear perspective on users&apos; achievements.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img7} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <Link href="/work/qreadings"><Image className="justify-center max-w-[30rem] mx-auto" src={imgNext} alt=""/></Link>
          </div>

        </div>
      </div>
    </main>
  );
}
