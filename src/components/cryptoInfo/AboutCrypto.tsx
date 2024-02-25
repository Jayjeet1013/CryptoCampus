import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const AboutCrypto = () => {
  return (
    <div>
      <div className="px-6 py-4 bg-[#FFFFFF] rounded-lg flex flex-col gap-3">
        <div className="border-b pb-3 ">
          <h1 className="text-[#0F1629] lg:text-[24px] font-[600] ">
            About Bitcoin
          </h1>
          <h3 className="text-[#0F1629] lg:text-[18px] font-bold  ">
            What is Bitcoin
          </h3>
          <p className="text-[#3E424A] ">
            Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
            volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
            currently -7.70% from its 7-day all-time high of $18,366.66, and
            3.40% from its 7-day all-time low of $16,394.75. BTC has a
            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div className="text-[#3E424A]  border-b pb-3 ">
          <h3 className="text-[#0F1629] lg:text-[18px] font-bold ">
            Lorem ipsum dolor sit amet
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.{" "}
          </p>
          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
        <div>
          <h1 className="text-[#0F1629]  lg:text-[24px] font-semibold">
            Already Holding Bitcoin?
          </h1>
          <div className="flex gap-6 pb-3 ">
            <div className="flex w-[338px] gap-6 p-3 rounded-lg bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]">
              <div>
                <Image
                  src={"/rec2.svg"}
                  alt="image"
                  width={128}
                  height={128}
                  className="rounded-lg "
                />
              </div>
              <div>
                <h1 className="text-[#FFFFFF] text-[20px] font-bold mb-2">
                  Calculate your Profits
                </h1>
                <div className="flex gap-2 items-center p-2 bg-white rounded-lg w-[132px] justify-center ">
                  <p>Check Now</p> <BsArrowRightShort size={"24px"} />
                </div>
              </div>
            </div>
            <div className="flex w-[338px] gap-6 p-3 rounded-lg bg-gradient-to-br from-[#FF9865] to-[#EF3031]">
              <div>
                <Image
                  src={"/rec.svg"}
                  alt="image"
                  width={128}
                  height={128}
                  className="rounded-lg "
                />
              </div>
              <div>
                <h1 className="text-[#FFFFFF] text-[20px] font-bold mb-2">
                  Calculate your Profits
                </h1>
                <div className="flex gap-2 items-center p-2 bg-white rounded-lg w-[132px] justify-center ">
                  <p>Check Now</p> <BsArrowRightShort size={"24px"} />
                </div>
              </div>
            </div>
          </div>

          <p className="text-[#3E424A] border-t pt-3 ">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCrypto;
