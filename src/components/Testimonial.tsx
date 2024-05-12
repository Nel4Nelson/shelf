import Person1 from "@/assets/Person1.svg";
import Person2 from "@/assets/Person2.svg";
import Person3 from "@/assets/Person3.svg";
import Person4 from "@/assets/Person4.svg";
import Testimonials from "./Carousel/Testimonials";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Radio } from "lucide-react";
//import CustomButton from "./CustomButton";
// import Apple from "@/assets/Apple.svg";
// import Android from "@/assets/Android.svg";

const Testimonial = () => {
  return (
    <div className="w-full lg:w-[1000px] border border-solid border-black px-[20px] py-[80px] lg:py-[81px] lg:px-[60px] lg:rounded-[80px] bg-custom-testimonial-bg grid gap-4 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[400px_1fr] justify-center items-center">
      <div className="row-start-2 lg:row-start-1">
        <Testimonials />
      </div>
      <div className="self-start">
        <div className="flex justify-center lg:justify-start">
          <img className="z-0" src={Person1} alt="" />
          <img className="z-10 -ml-5" src={Person2} alt="" />
          <img className="z-20 -ml-5" src={Person3} alt="" />
          <img className="z-30 -ml-5" src={Person4} alt="" />
          <div className="bg-white flex justify-center items-center w-[66px] h-[66px] z-40 -ml-5 text-xl font-sans rounded-full text-custom-text-primary">
            1k
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <p className="w-[400px] mt-[30px] text-2xl text-custom-text-primary font-bold font-bodyBoldFont">
            Join 1000+ readers across Nigeria who have discovered the joy of
            book shopping with BigShelf!{" "}
          </p>
        </div>
        <div className="mt-[10px] flex justify-center lg:justify-start gap-4">
          {/* <CustomButton img={Apple} text="iPhone" />
          <CustomButton img={Android} text="Android" /> */}
          <Link
            target="blank"
            to="https://whatsapp.com/channel/0029VaAiS2x8aKvEMb1Pcy3E"
          >
            <Button className="flex gap-1 bg-custom-black-900 font-poppinsFont text-lg h-[63px] px-[24px] py-[9px] rounded-[13.6px]">
              <Radio />
              Join the community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
