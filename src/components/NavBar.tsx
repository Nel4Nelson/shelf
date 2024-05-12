import { Link } from "react-router-dom";
import BigLogo from "./BigLogo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const navList = [
    { id: 1, name: "Track Package", to: "/tracker" },
    { id: 2, name: "Become an Affiliate", to: "/affiliate" },
  ];
  return (
    <div className="flex justify-between items-center lg:w-[1000px] mx-4 lg:mx-auto mt-4">
      <div className="flex gap-4">
        <BigLogo />
        <ul className="hidden lg:flex lg:items-center lg:text-custom-text-body">
          {navList.map((list) => (
            <li key={list.id}>
              <Link to={list.to}>
                <Button
                  variant="link"
                  className="text-custom-text-body text-xl font-bodyMediumFont"
                >
                  {list.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-[540px] lg:hidden">
          <ul className="mt-8 flex gap-6 flex-col text-custom-text-body">
            {navList.map((list) => (
              <li key={list.id}>
                <Link to={list.to}>
                  <Button
                    variant="link"
                    className="text-custom-text-body text-xl font-bodyMediumFont"
                  >
                    {list.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
          <Link target="blank" to="https://wa.me/c/2349134152730">
            <Button className="w-[248px] h-[51px] mt-8 text-white text-lg font-bold font-bodyBoldFont px-[16px] py-[13px] bg-custom-black-900 rounded-[12px]">
              Place an order
            </Button>
          </Link>
        </SheetContent>
      </Sheet>
      <Link
        className="hidden lg:block"
        target="blank"
        to="https://wa.me/c/2349134152730"
      >
        <Button className="w-[248px] h-[51px] text-white text-lg font-bold font-bodyBoldFont px-[16px] py-[13px] bg-custom-black-900 rounded-[12px]">
          Place an order
        </Button>
      </Link>
    </div>
  );
};

export default NavBar;
