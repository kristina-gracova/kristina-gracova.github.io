import { k_FONT_HEADING_1 } from "../../app/globals";

const Slider = (props : { name: string }) => {
  return (
    <>
      <div className="flex slider justify-center mt-[10rem]">
        <div className={`${k_FONT_HEADING_1} text-center`}>
          &#xb7; {props.name} &#xb7;
        </div>
      </div>
    </>
  );
};

export default Slider;
