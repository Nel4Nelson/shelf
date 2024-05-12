import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Bike from "@/assets/Bike.png";
import Gift from "@/assets/Gift.png";
import Haul from "@/assets/Haul.png";
import { useState } from "react";

const Benefits = () => {
  const [imgSelected, setImgSelected] = useState(0);
  const benefitImg = [Bike, Gift, Haul]

  return (
    <div className="w-[1100px] bg-custom-benefit-bg lg:rounded-[80px] px-[79px] py-[81px] grid gap-10 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 justify-center items-center">
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1" className="border-black" onClick={() => setImgSelected(0)}>
          <AccordionTrigger className="text-custom-black-900 text-3xl font-headingFont font-semibold hover:no-underline">
            Receive your book Swiftly
          </AccordionTrigger>
          <AccordionContent className="text-custom-text-body text-base font-bodyRegularFont">
            Get your books delivered in 5 - 10 days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-black" onClick={() => setImgSelected(1)}>
          <AccordionTrigger className="text-custom-black-900 text-3xl font-headingFont font-semibold hover:no-underline">
            Effortless Book Gifting
          </AccordionTrigger>
          <AccordionContent className="text-custom-text-body text-base font-bodyRegularFont">
            Send books directly to your loved ones' doorsteps without extra
            costs. Put a smile on their faces with a book delivered straight to
            their doorstep, along with a personalized message from you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-black" onClick={() => setImgSelected(2)}>
          <AccordionTrigger className="text-custom-black-900 text-3xl font-headingFont font-semibold hover:no-underline">
            Free Delivery on Book Hauls
          </AccordionTrigger>
          <AccordionContent className="text-custom-text-body text-base font-bodyRegularFont">
            Say goodbye to delivery fees when you join our book hauls. By
            bundling your orders with others, you'll enjoy free delivery, saving
            even more money while expanding your reading collection.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <img className="object-cover row-start-1 lg:col-start-2" src={benefitImg[imgSelected]} alt={`${benefitImg[imgSelected]} icon`} />
    </div>
  );
};

export default Benefits;
