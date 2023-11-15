import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";
import MenuList, { btn } from "./MenuList";
import { navitem } from "./data";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className={` bg-green-50 border-[2px] sm: w-[375px] md:w-full`}>
      <nav
        className="h-[5rem] flex items-center justify-between md:justify-center
        px-6
      md:space-x-[33.5%] "
      >
        <img src={logo} alt="logo" />

        {menu && (
          <div className={`absolute `}>
            <MenuList className={``} />
          </div>
        )}
        <div className="hidden md:flex items-center justify-around">
          <ul className=" flex mx-[1rem] gap-4  uppercase">
            {navitem.map((item, idx) => {
              return (
                <li
                  className="h-full hover:border-b py-6 border-black"
                  key={idx}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <button className="bg-black text-white ">{btn}</button>
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
