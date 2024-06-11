import Image from "next/image";
import headerImage from "../../../../public/qreadings/0-header.png"
import img1 from "../../../../public/qreadings/1.png"
import img2 from "../../../../public/qreadings/2.png"
import img3 from "../../../../public/qreadings/3.png"
import img4 from "../../../../public/qreadings/4.png"
import img5 from "../../../../public/qreadings/5.png"
import img6 from "../../../../public/qreadings/6.png"
import imgNext from "../../../../public/qreadings/next.png"
import { k_FONT_ALL_PROJECTS, k_FONT_PROJECT_TEXT, k_FONT_SUBHEADING_1, k_FONT_TAGS, k_PAGE_MARGIN_NO_TOP, k_PAGE_WIDTH } from "@/app/globals";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import rarrowImage from "../../../../public/rarrow.png"

const k_BG_COLOR = "bg-[#0091F4]";

export default function QReadings() {
  return (
    <main>
      <div className={`${k_PAGE_WIDTH} ${k_PAGE_MARGIN_NO_TOP} mt-[2rem] md:mt-[0px] block md:hidden`}>
        <Navbar/>
      </div>

      <div className={`grid grid-flow-row auto-rows-auto mb-[1rem]`}>
        <div className="flex flex-col flex-wrap gap-[1rem]">
          <div className="basis-1/1">
            <div className={`relative mt-[1rem] md:mt-[0px]`}>
              <div className={`${k_PAGE_WIDTH} ${k_PAGE_MARGIN_NO_TOP}`}>
                <div className={`relative`}>
                  <Image src={headerImage} alt=""/>
                  <div className={`absolute top-[10%] left-[0px] ${k_FONT_ALL_PROJECTS} hidden md:block`}>
                    <Link href={`/work`}>
                      <Image className="inline-block ml-[1rem] w-[4rem] pt-[0px] mt-[0px] pl-[0px] ml-[0px] pb-[0.3rem] pr-[1rem]" src={rarrowImage} alt=""/>All projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${k_BG_COLOR} absolute pl-[0px] ml-[0px] top-0 -z-50 min-w-[100%] min-h-[100%]`}/>
            </div>
          </div>
        </div>
      </div>

      <div className={`${k_PAGE_WIDTH} ${k_PAGE_MARGIN_NO_TOP}`}>
        <div className={`grid grid-flow-row auto-rows-auto`}>
          <div className="flex flex-col flex-wrap gap-[1rem]">
            <div className="basis-1/1">
              <div className={`${k_FONT_TAGS}`}>
                small startup environment | sole designer | close collaboration with engineering and product team
              </div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>About</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                QReadings is a mobile app that digitises meter readings, making energy data collection from residential and commercial properties more efficient. Designed for technicians and building administrators, it enhances accuracy and speeds up the data collection process.
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
                    Create an app that modernises meter reading and overcomes the limitations of traditional paper-based methods by improving accuracy and efficiency.
                  </div>
                </div>

                <div className="basis-1/2">
                  <div className={`${k_FONT_SUBHEADING_1}`}>My role</div>
                  <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                    Understand client needs and pain points, design a seamless end-to-end experience, and ensure alignment with business objectives and timelines.
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img2} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Simply activate and start scanning</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                The user experience of the QReadings app prioritises essential functions and provides clear user guidance at every step. The customer journey begins with account activation, facilitated by the system administrator. Following activation, users sign in, arrive at the property, and scan the QR code placed next to the meter. Once scanned, the app automatically identifies the meter type and its location.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img3} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Data collection simplified</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                Technicians are presented with various input fields to complete, corresponding to the scanned meter type. The user interface is intentionally designed in a step-by-step format, displayed as a carousel. This design enables technicians to focus on one data point at a time, enhancing efficiency and reducing the risk of errors. The app automatically checks entries for accuracy and flags any unexpected inputs, such as recording a consumption value lower than the previous reading.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img4} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Review and send</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                Before saving data, technicians can review the new readings to verify all values are correct. This step ensures that all data is accurately entered and can be compared to previous readings immediately. Once reviewed, simply tapping the save button will upload the data to the central platform, where it joins all other meter readings, ready for energy analysis.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img5} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Paperless meter reading, all in one place</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              An overview of all readings is available in a dashboard, enabling technicians to easily track their readings across all properties. This feature provides confirmation that readings have been securely sent to the central platform, ensuring peace of mind and data completeness. Even in areas without internet access, the app saves all readings and uploads them as soon as a connection is established, ensuring no data is lost and keeping the workflow seamless and stress-free.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img6} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <Link href="/work/manualreadingshub"><Image className="justify-center max-w-[15rem] mx-auto" src={imgNext} alt=""/></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
