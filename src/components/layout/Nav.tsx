import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-[1450px]  mx-auto px-10 ">
        <div className="flex justify-between py-4 ">
          <div className="flex items-center ">
            <Link href={"/"}>
              <Image
                src={"/koinxlogo.svg"}
                width={96}
                height={24}
                alt="logo "
              />
            </Link>
          </div>
          <div className="flex gap-12 ">
            <div className="flex gap-12 items-center">
              <Link href={"/"}>
                <h1>Crypto Taxes</h1>
              </Link>
              <Link href={"/"}>
                <h1> Free Tools</h1>
              </Link>
              <Link href={"/"}>
                <h1>Resource Center</h1>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <button className="bg-[#2870EA] text-[#FFFFFF] px-6 py-2 rounded-lg ">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
