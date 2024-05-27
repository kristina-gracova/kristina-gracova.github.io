import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Landing = () => {
  return (
    <>
      <div className={`flex flex-wrap flex-col justify-center grow ${junge.variable}`}>
        <div className="basis-full heading-1 text-[10vh] md:text-[15vh]">Kristina</div>
        <div className="basis-full subheading-1 text-[3vh] md:text-[5vh]">• Senior UX/UI Designer based in London •</div>
        <div className="basis-full heading-1 text-[10vh] md:text-[15vh]">Gracova</div>
      </div>
    </>
  )
};

export default Landing;
