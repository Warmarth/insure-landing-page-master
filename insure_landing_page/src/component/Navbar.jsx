import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";
import MenuList from "./MenuList";
import { navitem } from "./data";
import { Btn, Mapper } from "./utilites";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className={`bg-green-50  w-[375px] md:w-full`}>
      <nav className="flex items-center justify-between   border ">
        <img src={logo} alt="logo" />
        {menu && (
          <div className={`absolute`}>
            <MenuList className={``} />
          </div>
        )}
        <div className="hidden md:flex items-center justify-between gap-x-[1rem]">
          <ul className=" flex items-center gap-4  uppercase">
            <Mapper
              util={navitem}
              styles={`cursor-pointer hover:border-b py-6 border-black`}
            />
          </ul>
          <Btn styles={"bg-black text-white "} text="view plans" />
        </div>
        <img
          src={menu ? close : hamburger}
          className="md:hidden"
          onClick={handleMenu}
          alt="logo"
        />
      </nav>
    </header>
  );
};

export default Navbar;
