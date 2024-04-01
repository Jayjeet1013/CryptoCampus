import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1450px] mx-auto px-7 md:px-12 relative">
        <div className="flex justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              {/* <Image src={"/koinxlogo.svg"} width={96} height={24} alt="logo" /> */}
              CryptoCampus
            </Link>
          </div>

          {/* Menu Icon */}
          <div className="md:hidden">
            <div onClick={toggleMenu}>
              {menu ? (
                <AiOutlineClose style={{ color: "black", fontSize: 32 }} />
              ) : (
                <AiOutlineMenu style={{ color: "black", fontSize: 32 }} />
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex gap-12  items-center ${
              menu ? "absolute  left-0 top-full py-6 w-full bg-white" : "hidden"
            }`}
          >
            <div className="flex md:flex-row flex-col gap-5 md:gap-12 items-center text-[#0F1629] font-semibold text-[16px] ">
              <Link href={"/"}>
                <h1>Home</h1>
              </Link>
              <Link href={"/"}>
                <h1>About</h1>
              </Link>
              <Link href={"/"}>
                <h1>Contact</h1>
              </Link>

              {/* Get Started Button */}
              {/* <div>
                <Link href={"/"}>
                  <button className="bg-[#2870EA] text-[#FFFFFF] px-6 py-2 rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
