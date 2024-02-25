import React from "react";
import Top3Crypto from "../cryptoInfo/Top3Crypto";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const GetStarted = () => {
  return (
    <div>
      <div className="bg-[#0052FE] px-[30px] py-[40px] rounded-2xl gap-[20px] flex flex-col w-[426px] items-center ">
        <div className="text-[#FFFFFF] font-bold text-[22px] text-center lg:text-[24px] ">
          Get Started with KoinX for FREE
        </div>
        <div className="text-[#F2F2F2] text-center ">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
        <div>
          <Image
            src={"/getstarted.svg"}
            alt="imageGetstarted"
            width={178}
            height={166}
          />
        </div>
        <div className="flex gap-2 items-center p-4 bg-white rounded-lg w-[237px] justify-center ">
          <p>Get Started for FREE</p> <BsArrowRightShort size={"24px"} />
        </div>
      </div>
      <Top3Crypto />
    </div>
  );
};

export default GetStarted;
