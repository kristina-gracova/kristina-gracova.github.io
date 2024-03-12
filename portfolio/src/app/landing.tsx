import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Landing = () => {
  return (
    <>
      <div className={`grid justify-center ${junge.variable}`}>
        <div className="heading-1">Kristina</div>
        <div className="subheading-1">• Senior UX/UI Designer based in London •</div>
        <div className="heading-1">Gracova</div>
      </div>
    </>
  )
};

export default Landing;
