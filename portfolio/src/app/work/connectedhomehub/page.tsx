import { Junge, Quattrocento_Sans } from "next/font/google";
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
import Navbar from "@/components/navbar/navbar";

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

export default function ConnectedHomeHub() {
  return (
    <main>
      <div className={`flex flex-row flex-wrap min-w-[100vw] min-h-[100vh] justify-center ${junge.variable} ${qcs.variable}`}>
        <div className="flex flex-col flex-wrap" id="start">
            <div className="basis-1/1">
              <div className="project-header-background relative">
                <div className="hidden md:block all-projects absolute left-[1vw] md:left-[27.5vw] top-[1vh] md:top-[5vh] text-[1.5vh] md:text-[2.5vh]">
                  <Link href={`/work`}><Image className="arrow" src={rarrowImage} alt=""/> All projects</Link>
                </div>
                <Image className="project-header ml-[0vw] md:ml-[15vw] w-[150vw] md:w-[70vw]" src={headerImage} alt=""></Image>
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`tags-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                small startup environment | sole designer | close collaboration with engineering and product team
              </div>
            </div>

            <div className="basis-1/1 mt-[2vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">About</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                Connected Home Hub is a mobile app designed for energy consumption analysis.
                It provides users with the right tools to reduce their heating and water bills, helping them to start their
                journey towards sustainable living.
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="ml-[25vw] md:ml-[35vw] w-[50vw] md:w-[30vw]" src={iphoneImage} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className="flex flex-row gap-[5vw]">
                <div className="basis-1/2">
                  <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw]">Goal</div>
                  <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw]`}>
                    A complete redesign and rebranding of the former 'HomeManager' application, developed for energy management
                    and smart home control.
                  </div>
                </div>

                <div className="basis-1/2">
                  <div className="heading-2 text-[3.0vh] md:text-[3.5vh] mr-[4vw] md:mr-[27.0vw]">My role</div>
                  <div className={`project-text text-[1.5vh] md:text-[2.0vh] mr-[4vw] md:mr-[27.0vw]`}>
                    Understand customer needs through discovery research, craft end-to-end experience, and validate designs
                    in usability testing sessions.
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/1 mt-[3vh] md:mt-[5vh]">
              <Image className="ml-[25vw] md:ml-[35vw] w-[50vw] md:w-[30vw]" src={circleImage} alt=""></Image>
            </div>

            <div className="basis-1/1 mt-[4vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">Getting started</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
              The user experience of the Connected Home Hub app centres on simplicity and minimalism.
              The customer journey begins with the installation of the Q-Reader, a smart meter reader that facilitates energy data collection.
              Once installed, users can effortlessly create an account in just a few clicks, ensuring a swift transition from installation to
              engagement with the app's core functionality.
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="" src={gettingStartedImage} alt=""></Image>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">Learning from data</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                Energy analysis is one of the main features, empowering users to gain insight into their heating and water consumption,
                which are often the primary contributors to energy bills. The user interface has undergone several iterations,
                each aimed at exploring and testing key considerations, such as:
                <ul className="list-disc list-outside mt-[2vh] ml-[3vw] md:ml-[1vw]">
                  <li>What is the most suitable data visualisation type (bar, pie, or line chart)?</li>
                  <li>How should data be displayed over time (e.g., the last 7 days or Mon-Sun)?</li>
                  <li>Are there any comparisons that would be meaningful (e.g., the user’s previous week, neighbours’ average usage)?</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="" src={learningFromDataImage} alt=""></Image>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">Optimising heating</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                Beyond energy monitoring, users place great value on controlling and scheduling their heating.
                They recognise its importance for effective energy management, providing both comfort and cost-saving benefits.
                The UI design offers an intuitive calendar view, making it easy for users to see their schedule at a glance.
                When setting up heating schedules, the temperature indicator is colour-coded to encourage users to select lower temperatures,
                promoting energy efficiency and cost reduction.
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="" src={optimisingHeating} alt=""></Image>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">Automating for efficiency</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                To get the most out of heating automation, users can activate holiday mode to ensure that no energy is wasted
                while they are away from home. The feature is quick and easy to set up, even on the go, offering choices for duration,
                temperature, and which rooms to adjust. Returning to a warm home is a hassle-free experience, thanks to the system's
                effective energy management.
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="" src={automatingImage} alt=""></Image>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className="heading-2 text-[3.0vh] md:text-[3.5vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]">Embracing sustainability</div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <div className={`project-text text-[1.5vh] md:text-[2.0vh] ml-[4vw] md:ml-[27.5vw] mr-[4vw] md:mr-[27.0vw]`}>
                As users interact with the app, they not only save energy but also contribute to a more sustainable future.
                Energy-saving tips integrated into the app represent a strategic design choice aimed at enhancing user engagement.
                These tips provide easy-to-follow suggestions to help users conserve energy, empowering them to adopt a more eco-conscious
                lifestyle with minimal effort.
              </div>
            </div>

            <div className="basis-1/1 mt-[1vh]">
              <Image className="w-[100vw]" src={sustainImage} alt=""></Image>
            </div>
        </div>
      </div>
    </main>
  );
}
