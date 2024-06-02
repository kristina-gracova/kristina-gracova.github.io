import { Junge, Quattrocento_Sans } from "next/font/google";
import Image from "next/image";
import headerImage from "../../../../public/manualreadingshub/0-header.png"
import img1 from "../../../../public/manualreadingshub/1.png"
import img2 from "../../../../public/manualreadingshub/2.png"
import img3 from "../../../../public/manualreadingshub/3.png"
import img4 from "../../../../public/manualreadingshub/4.png"
import img5 from "../../../../public/manualreadingshub/5.png"
import img6 from "../../../../public/manualreadingshub/6.png"
import img7 from "../../../../public/manualreadingshub/7.png"

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
});

const qcs = Quattrocento_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-qcs",
});

export default function ManualReadingsHub() {
  return (
    <main>
      <div className={`flex flex-col flex-wrap ${junge.variable} ${qcs.variable}`}>

            {/* HEADER */}
            <div className="basis-1/1">
              <div className="mrh-header-background">
                <Image className="project-header ml-[0vw] w-[150vw] lg:ml-[15vw] lg:w-[70vw]" src={headerImage} alt=""></Image>
              </div>
            </div>

            {/* TAGS */}
            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`tags-text text-[1.5vh] lg:text-[2.0vh]`}>
                small startup environment | sole designer | close collaboration with engineering and product team
              </div>
            </div>

            {/* ABOUT */}
            <div className="basis-1/1 mt-[2vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">About</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
                Manual Readings Hub is a desktop platform that provides a comprehensive overview of meter readings, data editing, and user management. Its intuitive design facilitates effortless navigation and swift data manipulation, enabling clients to manage readings and user accounts with ease.
              </div>
            </div>

            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw] place-self-center">
              <Image src={img1} alt=""></Image>
            </div>

            {/* GOAL, MY ROLE */}
            <div className="basis-1/1 mt-[5vh]">
              <div className="flex flex-row gap-[5vw] ml-[4vw] lg:ml-[18vw] mr-[4vw] lg:mr-[25.0vw]">
                <div className="basis-1/2">
                  <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">Goal</div>
                  <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
                  Create a central platform to manage meter readings and users, eliminating the reliance on paper and spreadsheets for tracking energy consumption.
                  </div>
                </div>

                <div className="basis-1/2">
                  <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">My role</div>
                  <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
                  Understand client needs and pain points, design a seamless end-to-end experience, iterate based on feedback, and align with business objectives and timelines.
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/1 mt-[4vh] max-w-[40vw] place-self-center">
              <Image src={img2} alt=""></Image>
            </div>

            {/* DATA AT GLANCE */}
            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">Data at a glance</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
              The Manual Readings Hub platform simplifies the complex task of navigating meter readings from numerous properties. While user objectives may vary based on their role within the company, the interface is designed to easily provide the necessary information. Despite the extensive database, only the most crucial data is displayed initially, ensuring quick access to all metering points.              </div>
            </div>

            <div className="basis-1/1 mt-[4vh] place-self-center">
              <Image src={img3} alt=""></Image>
            </div>

            {/* SEARCHING & FILTERING */}
            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">Searching and filtering</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
              As numerous readings are added daily, a key priority in the design was to make search and filtering simple and quickly accessible, enabling users to locate specific properties or metering points effortlessly. A prominent search bar at the top allows for keyword searches and common filters. Additionally, each table field has its own filter, permitting sorting and field-specific filtering to find particular buildings, their meters, and all of their historical readings.
              </div>
            </div>

            <div className="basis-1/1 mt-[4vh] place-self-center">
              <Image src={img4} alt=""></Image>
            </div>

            {/* DEEP DIVE */}
            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">Deep dive into details</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
              Users can access detailed information about metering points by clicking on them and navigating to the platform's second level, which is divided into three tabs for simplicity. The 'Point details' tab allows users to view and edit metering point information, while the 'Measurements and values' tab displays all historical meter readings. Energy analysts rely on these readings for consumption analysis, billing, and scheduling future readings. The 'QR code' tab generates stickers for utility meters, facilitating paperless data collection.              </div>
            </div>

            <div className="basis-1/1 mt-[4vh] place-self-center">
              <Image src={img5} alt=""></Image>
            </div>

            {/* HELP */}
            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">Help and guidance</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
              While data is typically uploaded to the platform through the mobile app QReadings, users have the option to manually record data, ensuring flexibility in data entry methods to suit various preferences. If no measurements exist for a metering point, the interface intuitively guides users with clear visual cues and actionable guidance on addressing data absence. This proactive approach enhances the user experience by helping users navigate data-related challenges effectively.</div>
            </div>

            <div className="basis-1/1 mt-[4vh] place-self-center">
              <Image src={img6} alt=""></Image>
            </div>

            {/* USER MGMT */}
            <div className="basis-1/1 mt-[4vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className="heading-2 text-[3.0vh] lg:text-[3.5vh]">User management</div>
            </div>

            <div className="basis-1/1 mt-[1vh] ml-[4vw] mr-[4vw] lg:ml-[18vw] lg:mr-[18vw]">
              <div className={`project-text text-[1.5vh] lg:text-[2.0vh]`}>
              The platform offers easy user management, making it simple to add or remove users. Bringing new team members on board is quick and straightforward – admins can easily add them to the system and send an email invitation to access both the platform and the QReadings app, making the whole process smoother. This design approach focuses on creating a friendly and intuitive experience, ensuring that everyone can use the platform with ease.</div>
            </div>

            <div className="basis-1/1 mt-[4vh] place-self-center">
              <Image src={img7} alt=""></Image>
            </div>
      </div>
    </main>
  );
}
