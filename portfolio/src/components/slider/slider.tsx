const Slider = (props : { name: string }) => {
  return (
    <>
      <div className="flex slider justify-center mt-[10rem]">
        <div className="heading-1 text-7xl md:text-9xl">&#xb7; {props.name} &#xb7;</div>
      </div>
    </>
  );
};

export default Slider;
