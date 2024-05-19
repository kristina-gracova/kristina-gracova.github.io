import { Junge } from "next/font/google";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
})

const Slider = (props : { name: string }) => {
  return (
    <>
      <div className={`flex heading-1 justify-center items-center slider ${junge.variable} `}>
        <div className="text-[9vh] xl:text-[15vh]">&#xb7; {props.name} &#xb7;</div>
      </div>
    </>
  );
};

export default Slider;
