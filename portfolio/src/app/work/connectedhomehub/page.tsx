import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../../public/connectedhomehub/header.png"
import iphoneImage from "../../../../public/connectedhomehub/iphone.png"
import circleImage from "../../../../public/connectedhomehub/circle.png"
import gettingStartedImage from "../../../../public/connectedhomehub/gettingstarted.png"
import learningFromDataImage from "../../../../public/connectedhomehub/learningfromdata.png"
import optimisingHeating from "../../../../public/connectedhomehub/optimisingheating.png"
import automatingImage from "../../../../public/connectedhomehub/automating.png"
import sustainImage from "../../../../public/connectedhomehub/sustain.png"
import rarrowImage from "../../../../public/rarrow.png"
import imgNext from "../../../../public/connectedhomehub/next.png"
import { k_FONT_ALL_PROJECTS, k_FONT_PROJECT_TEXT, k_FONT_SUBHEADING_1, k_FONT_TAGS, k_PAGE_MARGIN_NO_TOP, k_PAGE_WIDTH } from "@/app/globals";
import Navbar from "../../../components/navbar/navbar";

const k_BG_COLOR = "bg-[#0073E1]";

export default function ConnectedHomeHub() {
  return (
    <main>
      <div className={`${k_PAGE_WIDTH} ${k_PAGE_MARGIN_NO_TOP} mt-[2rem] md:mt-[0px] block md:hidden`}>
        <div className={`grid grid-flow-row auto-rows-auto`}>
          <div className="flex flex-col flex-wrap gap-[1rem]">
            <Navbar/>
          </div>
        </div>
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
                Connected Home Hub is a mobile app designed for energy consumption analysis.
                It provides users with the right tools to reduce their heating and water bills, helping them to start their
                journey towards sustainable living.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={iphoneImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className="flex flex-row gap-[1rem]">
                <div className="basis-1/2">
                  <div className={`${k_FONT_SUBHEADING_1}`}>
                    Goal
                  </div>
                  <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                    A complete redesign and rebranding of the former &apos;HomeManager&apos; application, developed for energy management
                    and smart home control.
                  </div>
                </div>

                <div className="basis-1/2">
                  <div className={`${k_FONT_SUBHEADING_1}`}>My role</div>
                  <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                    Understand customer needs through discovery research, craft end-to-end experience, and validate designs
                    in usability testing sessions.
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={circleImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Getting started</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                The user experience of the Connected Home Hub app centres on simplicity and minimalism.
                The customer journey begins with the installation of the Q-Reader, a smart meter reader that facilitates energy data collection.
                Once installed, users can effortlessly create an account in just a few clicks, ensuring a swift transition from installation to
                engagement with the app&apos;s core functionality.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={gettingStartedImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Learning from data</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                Energy analysis is one of the main features, empowering users to gain insight into their heating and water consumption,
                which are often the primary contributors to energy bills. The user interface has undergone several iterations,
                each aimed at exploring and testing key considerations, such as:
                <ul className="list-disc list-outside mt-[1rem] ml-[2rem]">
                  <li>What is the most suitable data visualisation type (bar, pie, or line chart)?</li>
                  <li>How should data be displayed over time (e.g., the last 7 days or Mon-Sun)?</li>
                  <li>Are there any comparisons that would be meaningful (e.g., the user’s previous week, neighbours’ average usage)?</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={learningFromDataImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Optimising heating</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                Beyond energy monitoring, users place great value on controlling and scheduling their heating.
                They recognise its importance for effective energy management, providing both comfort and cost-saving benefits.
                The UI design offers an intuitive calendar view, making it easy for users to see their schedule at a glance.
                When setting up heating schedules, the temperature indicator is colour-coded to encourage users to select lower temperatures,
                promoting energy efficiency and cost reduction.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={optimisingHeating} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Automating for efficiency</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                To get the most out of heating automation, users can activate holiday mode to ensure that no energy is wasted
                while they are away from home. The feature is quick and easy to set up, even on the go, offering choices for duration,
                temperature, and which rooms to adjust. Returning to a warm home is a hassle-free experience, thanks to the system&apos;s
                effective energy management.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={automatingImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Embracing sustainability</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                As users interact with the app, they not only save energy but also contribute to a more sustainable future.
                Energy-saving tips integrated into the app represent a strategic design choice aimed at enhancing user engagement.
                These tips provide easy-to-follow suggestions to help users conserve energy, empowering them to adopt a more eco-conscious
                lifestyle with minimal effort.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={sustainImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <Link href="/work/myyogastudio"><Image className="justify-center max-w-[15rem] mx-auto" src={imgNext} alt=""/></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
