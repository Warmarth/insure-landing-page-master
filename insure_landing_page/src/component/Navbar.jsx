import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";
import { navitem } from "./data";
import { Btn, Mapper } from "./utilites";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header
      className={`bg-green-50  w-[375px] md:w-full flex lg:justify-center py-4 px-4 lg:px-0`}
    >
      <nav className="flex items-center justify-between w-full lg:w-5/6  ">
        <img src={logo} alt="logo" />
        {menu && (
          <div
            className={`absolute w-[375px] h-[28rem] top-0 left-0 flex items-center flex-col flex-1 justify-start gap-y-[1rem] cursor-pointer  translate-y-[4.2rem] text-[--gray-Violet] font-bold md:hidden py-[2rem] bg-[--Very-Violet] nav`}
          >
            <Mapper
              util={navitem}
              styles={` uppercase text-center py-2 hover:text-white`}
            />
            <Btn
              styles={
                " text-white px-[30%] py-2 uppercase cursor-pointer border hover:text-[--Very-Gray]"
              }
              text="view plans"
            />
          </div>
        )}
        <div className="hidden md:flex items-center justify-between gap-x-[1rem] uppercase font-bold text-[.789rem]">
          <ul className=" flex items-center gap-4">
            <Mapper
              util={navitem}
              styles={`text-white font-bold cursor-pointer`}
            />
          </ul>
          <Btn
            styles={
              "bg-[--Very-Gray] text-white px-6 py-2 cursor-pointer uppercase"
            }
            text="view plans"
          />
        </div>
        <img
          src={menu ? close : hamburger}
          className="md:hidden cursor-pointer"
          onClick={handleMenu}
          alt="logo"
        />
      </nav>
    </header>
  );
};

export default Navbar;
