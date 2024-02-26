import Image from "next/image";
import React, { useState } from "react";
import { data } from "../data/CardData";
import { FaAngleRight } from "react-icons/fa";

const Sentiments = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextSlide = () => {
    const newIndex = startIndex === data.length - 1 ? 0 : startIndex + 1;
    setStartIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = touchEndX - touchStartX;
    if (touchDifference < -50) {
      nextSlide();
    }
  };

  return (
    <div className="bg-[#FFFFFF] rounded-lg py-4 px-3 md:px-6 gap-3 flex flex-col mt-1 mb-6">
      <div>
        <h1 className="text-[24px] font-semibold text-[#0F1629] ">
          {" "}
          Sentiment
        </h1>
      </div>

      <div>
        <h2 className="flex gap-2 text-[#44475B] font-semibold text-[18px] ">
          Key Events
          <Image src={"/img3.svg"} alt="logoimage" width={24} height={24} />
        </h2>
      </div>
      <div
        className="w-[100%] md:w-[100%] lg:w-[880px]  relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-3 lg:gap-5 "
          style={{ width: `${data.length * 450}px` }}
        >
          {data.slice(startIndex, startIndex + 2).map((item) => (
            <div
              key={item.id}
              className="p-4 flex gap-2 lg:gap-3 bg-[#E8F4FD] w-[18%] md:w-[25%] lg:w-[25%] h-[160px] md:h-auto   rounded-lg  "
            >
              <div>
                <Image
                  src={item.logo}
                  width={200}
                  height={44}
                  alt="logoimage"
                />
              </div>

              <div className="">
                <h1 className="pb-2 text-[12px] md:text-[14px]">
                  {item.title}
                </h1>
                <h3 className="text-[10px] md:text-[14px] ">{item.content}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute md:block hidden right-2 top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-full "
        >
          <FaAngleRight size={20} color="#757779" />
        </button>
      </div>

      <div className="pt-3 ">
        <h2 className="flex gap-2 text-[#44475B] font-semibold text-[18px] ">
          Analyst Estimates
          <Image src={"/img3.svg"} alt="logoimage" width={24} height={24} />
        </h2>

        <div className=" py-6 flex gap-3 md:gap-12 items-center ">
          <div className="p-7 rounded-full bg-[#EBF9F4] text-[#0FBA83] w-[115px] text-center items-center flex text-[36px] ">
            76 <span className="text-[20px] ">%</span>
          </div>
          <div className="space-y-2 ">
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="w-[36px] ">Buy</div>
              <div className=" w-[100px] md:w-[350px] bg-[#00B386] h-2 rounded-[2px] "></div>
              <div>76%</div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="w-[36px] ">Hold</div>
              <div className=" w-[35px] bg-[#C7C8CE] h-2 rounded-[2px] "></div>
              <div>8%</div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="w-[36px] ">Sell</div>
              <div className=" w-[66px] bg-[#F7324C] h-2 rounded-[2px] "></div>
              <div>16%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
