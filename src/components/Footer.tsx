import BigLogo from "./BigLogo";
import FooterText from "./FooterText";
import Qrcode from '@/assets/Qrcode.png';
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/twitter.svg";
import Whatsapp from "@/assets/Whatsapp.svg";

const Footer = () => {
  return (
    <section className="w-[1000px]">
      <div className="pt-[24px] pb-[40px] grid gap-10 lg:gap-20 grid-rows-[60px_1fr_1fr_1fr] lg:grid-rows-1 lg:grid-cols-4 border-b border-solid border-custom-black-500">
        <div>
          <BigLogo />
        </div>
        <FooterText
          heading="Explore"
          text1="Track Package"
          text2="Become an affiliate"
        />
        <FooterText
          heading="BigValues"
          text1="Privacy Policy"
          text2="Terms of use"
        />
        <div>
          <FooterText heading="Chat with us" />
          <div className="flex gap-2 items-end mt-4">
            <img className="w-[73.574px] h-[73.574px]" src={Qrcode} alt="Bigshelf QRCode" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Twitter} alt="Twitter Logo" />
            <img className="my-1" src={Whatsapp} alt="Whatsapp Logo" />
          </div>
        </div>
      </div>
      <div className="flex justify-between text-custom-text-body text-base font-bodyRegularFont mb-4">
        <p>Copyright © 2024 BigShelf All rights reserved.</p>
        <p>Nigeria</p>
      </div>
    </section>
  );
};

export default Footer;
