'use client';
import { IoChevronBackOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

type HeaderProps = {
  Logo: string;
  handleBack?: () => void;
  handleHome?: () => void;
};

export const Header = ({ Logo, handleBack, handleHome }: HeaderProps) => {

  return (
    <div
      className="flex items-center justify-between  py-3 px-6
    bg-background
    "
    >
      <div className="flex items-center ">
        <IoChevronBackOutline
          onClick={handleBack}
          className="text-[#DADADA] text-[20px] cursor-pointer"
        />
      
      </div>
      <div
          className="text-[#DADADA] cursor-pointer text-[20px] font-manrope ml-3 px-1"
        >
            <img src={Logo || ""} alt={Logo ? "Logo" : "No Logo"} width={84} height={24} />

          
        </div>
      <div className="flex items-center ">
        <RxCross2
          onClick={handleHome}
          className="text-[#DADADA] cursor-pointer w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};