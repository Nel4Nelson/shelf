import { Button } from "./ui/button";

interface Props {
    img: string;
    text: string;
}

const CustomButton = ({img, text}: Props) => {
  return <Button className="bg-custom-black-900 w-[172px] h-[63px] px-[24px] py-[9px] rounded-[13.6px] flex gap-2">
    <img src={img} alt={`${text} icon`} />
    <div className="font-poppinsFont text-white flex flex-col items-start">
        <p className="text-xs font-medium">Get on</p>
        <p className="text-lg font-semibold">{text}</p>
    </div>
  </Button>;
};

export default CustomButton;
