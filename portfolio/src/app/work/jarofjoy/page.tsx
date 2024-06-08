import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../../public/joj/0-header.png"
import img1 from "../../../../public/joj/1.png"
import img2 from "../../../../public/joj/2.png"
import img3 from "../../../../public/joj/3.png"
import img4 from "../../../../public/joj/4.png"
import img5 from "../../../../public/joj/5.png"
import img6 from "../../../../public/joj/6.png"
import img7 from "../../../../public/joj/7.png"
import img8 from "../../../../public/joj/8.png"
import imgNext from "../../../../public/joj/next.png"
import rarrowImage from "../../../../public/rarrow.png"
import { k_FONT_ALL_PROJECTS, k_FONT_PROJECT_TEXT, k_FONT_SUBHEADING_1, k_FONT_TAGS, k_PAGE_MARGIN_NO_TOP, k_PAGE_WIDTH } from "@/app/globals";
import Navbar from "../../../components/navbar/navbar";

const k_BG_COLOR = "bg-[#FF8A5B]";

export default function JarOfJoy() {
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
                incubation project | sole designer | close collaboration with founders
              </div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>About</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                Jar of Joy is a fun-filled app designed to enhance children&apos;s development and wellbeing. It offers a carefully curated collection of engaging, screen-free activities that promote quality time between parents and their children.
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
                  Create an app that provides a curated collection of simple and enjoyable family activities, aiming to enhance children&apos;s skills, save parents time, and foster a stronger parent-child connection.
                  </div>
                </div>

                <div className="basis-1/2">
                  <div className={`${k_FONT_SUBHEADING_1}`}>My role</div>
                  <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                  Conduct design explorations to define the visual direction, including typography and colour scheme. Craft an end-to-end experience and refine it iteratively based on usability testing feedback.
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img2} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Parenting made fun</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
                The Jar of Joy app&apos;s user experience heavily relies on a card-based layout, with each card featuring an illustration that complements the game title. These illustrations were carefully chosen for their vividness, providing an engaging alternative to icons. The interface is designed to be vibrant and playful, reflecting the joyful nature of children&apos;s activities. These design decisions were made through iterative refinement, incorporating feedback at every stage.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img3} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Joyful moments await</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              All games are categorised into six sections based on children&apos;s interests, making it easy for parents to discover activities. The &apos;Game of the day&apos; is prominently displayed at the top of the Home tab, directing users&apos; attention to popular or newly added games and encouraging daily app visits.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img4} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Search and discover</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              On the Discover tab, game descriptions serve as teasers, aiding parents in quickly assessing each activity, while implementing a larger card size contributes to a clean interface. The inclusion of a search bar and filtering function is crucial as the number of games is expected to grow over time. 
              </div>
              <div className={`${k_FONT_PROJECT_TEXT} pt-[1rem]`}>
                This tab offers parents three ways to explore activities:
                <ul className="list-disc list-outside mt-[1rem] ml-[2rem]">
                  <li>Scrolling - discovering a fun activity based on its description</li>
                  <li>Search bar - entering keywords to find a specific game</li>
                  <li>Filters - utilising advanced search criteria</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img5} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>The essentials</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              In preparation for an extensive range of activities within the app, a favourites functionality has been introduced to allow users to save games for later. Represented by a heart button in the interface, this feature allows quick access to activities children enjoyed the most, accessible via the Favourites tab. Additionally, testing feedback highlights the need for an option to schedule games in advance.
              </div>
              <div className={`${k_FONT_PROJECT_TEXT} mt-[1rem]`}>
              The Profile tab&apos;s structure prioritises the display of membership status and children&apos;s ages. This information enables personalised app content tailored to each user. Following this, game insights are shown, contributing to the gamification aspect. User suggestions advocate for the inclusion of a more detailed activity history on this tab.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img6} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Ready, set, play!</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              Each activity is presented on a dedicated screen, providing instructions, recommended age, necessary materials, and skills developed by the game. Inspired by recipe apps, the layout follows a format where ingredients are listed before cooking instructions. Usability testing identified areas for improvement, suggesting to list skills last as they appear less crucial than instructions and to include the time required for game preparation and play for a more seamless user experience.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img7} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_SUBHEADING_1}`}>Food for thought</div>
            </div>

            <div className="basis-1/1">
              <div className={`${k_FONT_PROJECT_TEXT}`}>
              User feedback is occasionally collected within the app through short questions with open-ended or multiple-choice answers, creating a feedback loop that fosters continuous improvement of the app and its content. This process aims to gather insights into the types of activities parents prefer, the skills they wish their children to develop, and the kind of assistance they require for their children&apos;s development.
              </div>
            </div>

            <div className="basis-1/1">
              <Image src={img8} alt=""></Image>
            </div>

            <div className="basis-1/1">
              <Link href="/work/connectedhomehub"><Image className="justify-center max-w-[15rem] mx-auto" src={imgNext} alt=""/></Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
