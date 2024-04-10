import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Landing = () => {
  return (
    <>
      <div className={`flex flex-wrap flex-col justify-center ${junge.variable} mt-[8vh]`}>
        <div className="basis-full heading-1">Kristina</div>
        <div className="basis-full subheading-1">• Senior UX/UI Designer based in London •</div>
        <div className="basis-full heading-1">Gracova</div>
      </div>
    </>
  )
};

export default Landing;
