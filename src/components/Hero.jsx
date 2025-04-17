import img from "../assets/image.png";
import geoStyle from "../assets/StyleOutline.svg";
import dotsStyle from '../assets/Dots.png'
export default function Hero() {
  return (
    <div className="mt-[0.2rem] md:mt-[6.2rem] flex md:jusify-between md:items-center justify-between  gap-[1.8rem] mb-[11.2rem] flex-col md:flex-row">
      <div className="pt-[7.4rem] pb-[1.5rem] md:pb-[8.5rem] w-full md:w-1/2">
        <h1 className="mb-[3.2rem]  text-headingPrimary text-gray font-semibold">
          <span className="text-primary">Hazrr</span>
          at Abu Bakar, I am
          <span className="text-primary"> Web Designer</span> and
          <span className="text-primary"> Frontend Developer</span>
        </h1>

        <h2 className="text-body text-gray">
          I crafts Responsive websites where technologies meet creativity
        </h2>
      </div>

      <div>
        <div className="relative">

          <img className="relative z-10" src={img} />

          <img className="absolute w-[8.4rem] h-[8.4rem]  bottom-[5.6rem] right-[1.6rem] z-20" src={dotsStyle} />

          <img className="absolute top-[8.4rem] left-[-1.2rem] z-0 w-[15.5rem] h-[15.5rem]" src={geoStyle} />

          <div className="flex gap-[1rem] outline outline-2 outline-gray outline-offset-[-1px] justify-start items-center p-[0.8rem] mt-1 text-gray ">

            <div className="w-[1.6rem] h-[1.6rem] bg-primary  "></div>
            <h2 className="text-body">Currently Learning to advance Backend Skills</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}
