import Image from "next/image";
import headerImage from "../../../../public/manualreadingshub/0-header.png"
import img1 from "../../../../public/manualreadingshub/1.png"
import img2 from "../../../../public/manualreadingshub/2.png"
import img3 from "../../../../public/manualreadingshub/3.png"
import img4 from "../../../../public/manualreadingshub/4.png"
import img5 from "../../../../public/manualreadingshub/5.png"
import img6 from "../../../../public/manualreadingshub/6.png"
import img7 from "../../../../public/manualreadingshub/7.png"
import imgNext from "../../../../public/manualreadingshub/next.png"
import rarrowImage from "../../../../public/rarrow.png"
import { k_FONT_ALL_PROJECTS, k_FONT_PROJECT_TEXT, k_FONT_SUBHEADING_1, k_FONT_TAGS, k_PAGE_MARGIN_NO_TOP } from "@/app/globals";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function ManualReadingsHub() {
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
              <div className={`absolute top-[10%] left-[2%] ${k_FONT_ALL_PROJECTS} hidden md:block`}>
                <Link href={`/work`}>
                  <Image className="inline-block ml-[1rem] w-[4rem] pt-[0px] mt-[0px] pl-[0px] ml-[0px] pb-[0.3rem] pr-[1rem]" src={rarrowImage} alt=""/>All projects
                </Link>
              </div>
              <div className="bg-[#0091F4] absolute ml-[0px] pl-[0px] top-0 left-[-100vw] -z-50 min-w-[200vw] min-h-[100%]"/>
            </div>
          </div>

          {/* TAGS */}
          <div className="basis-1/1">
            <div className={`${k_FONT_TAGS}`}>
              small startup environment | sole designer | close collaboration with engineering and product team
            </div>
          </div>

          {/* ABOUT */}
          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>About</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
              Manual Readings Hub is a desktop platform that provides a comprehensive overview of meter readings, data editing, and user management. Its intuitive design facilitates effortless navigation and swift data manipulation, enabling clients to manage readings and user accounts with ease.
            </div>
          </div>

          <div className="basis-1/1">
            <Image className="" src={img1} alt=""></Image>
          </div>

          {/* GOAL, MY ROLE */}
          <div className="basis-1/1">
            <div className="flex flex-row gap-[1rem]">
              <div className="basis-1/2">
                <div className={`${k_FONT_SUBHEADING_1}`}>Goal</div>
                <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                  Create a central platform to manage meter readings and users, eliminating the reliance on paper and spreadsheets for tracking energy consumption.
                </div>
              </div>

              <div className="basis-1/2">
                <div className={`${k_FONT_SUBHEADING_1}`}>My role</div>
                <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                  Understand client needs and pain points, design a seamless end-to-end experience, iterate based on feedback, and align with business objectives and timelines.
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/1">
            <Image className="" src={img2} alt=""></Image>
          </div>

          {/* DATA AT GLANCE */}
          <div className="basis-1/1">
          <div className={`${k_FONT_SUBHEADING_1}`}>Data at a glance</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The Manual Readings Hub platform simplifies the complex task of navigating meter readings from numerous properties. While user objectives may vary based on their role within the company, the interface is designed to easily provide the necessary information. Despite the extensive database, only the most crucial data is displayed initially, ensuring quick access to all metering points.              </div>
          </div>

          <div className="basis-1/1">
            <Image src={img3} alt=""></Image>
          </div>

          {/* SEARCHING & FILTERING */}
          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Searching and filtering</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            As numerous readings are added daily, a key priority in the design was to make search and filtering simple and quickly accessible, enabling users to locate specific properties or metering points effortlessly. A prominent search bar at the top allows for keyword searches and common filters. Additionally, each table field has its own filter, permitting sorting and field-specific filtering to find particular buildings, their meters, and all of their historical readings.
            </div>
          </div>

          <div className="basis-1/1">
            <Image src={img4} alt=""></Image>
          </div>

          {/* DEEP DIVE */}
          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Deep dive into details</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            Users can access detailed information about metering points by clicking on them and navigating to the platform's second level, which is divided into three tabs for simplicity. The 'Point details' tab allows users to view and edit metering point information, while the 'Measurements and values' tab displays all historical meter readings. Energy analysts rely on these readings for consumption analysis, billing, and scheduling future readings. The 'QR code' tab generates stickers for utility meters, facilitating paperless data collection.              </div>
          </div>

          <div className="basis-1/1">
            <Image src={img5} alt=""></Image>
          </div>

          {/* HELP */}
          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>Help and guidance</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            While data is typically uploaded to the platform through the mobile app QReadings, users have the option to manually record data, ensuring flexibility in data entry methods to suit various preferences. If no measurements exist for a metering point, the interface intuitively guides users with clear visual cues and actionable guidance on addressing data absence. This proactive approach enhances the user experience by helping users navigate data-related challenges effectively.</div>
          </div>

          <div className="basis-1/1">
            <Image src={img6} alt=""></Image>
          </div>

          {/* USER MGMT */}
          <div className="basis-1/1">
            <div className={`${k_FONT_SUBHEADING_1}`}>User management</div>
          </div>

          <div className="basis-1/1">
            <div className={`${k_FONT_PROJECT_TEXT}`}>
            The platform offers easy user management, making it simple to add or remove users. Bringing new team members on board is quick and straightforward – admins can easily add them to the system and send an email invitation to access both the platform and the QReadings app, making the whole process smoother. This design approach focuses on creating a friendly and intuitive experience, ensuring that everyone can use the platform with ease.</div>
          </div>

          <div className="basis-1/1">
            <Image src={img7} alt=""></Image>
          </div>

          <div className="basis-1/1">
            <Link href="/work/jarofjoy"><Image className="justify-center max-w-[30rem] mx-auto" src={imgNext} alt=""/></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
