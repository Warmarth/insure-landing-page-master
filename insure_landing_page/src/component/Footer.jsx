import { Dispas, Mapper } from "./utilites";
import logo from "../assets/images/logo.svg";

const Footer = ({ props }) => {
  const { footerTags } = props;
  return (
    <div className="w-[375px] md:w-full footer bg-[--Very-Gray] ">
      <div className={`md:w-5/6 mx-auto`}>
        <div className="w-full flex flex-col justify-end pb-[2rem] items-center gap-y-[2rem] h-[12rem] md:flex-row md:justify-between md:h-[10rem] md:items-end">
          <img src={logo} alt="logo" className=" " />
          <Dispas
            util={footerTags.icons}
            styles={`flex gap-x-[1rem] items-center  `}
            style={`hover:bg-[--Very-Violet] rounded cursor-pointer`}
          />
        </div>
        <hr className={` w-full bg-[--Grayish-Blue] h-[2px] `} />
        <section
          className={`flex flex-col justify-center md:flex-row text-center font-bold py-[2rem] dmSerif uppercase space-y-[1rem] md:space-y-0 md:justify-between md:text-left`}
        >
          <div className="">
            <h2 className={`py-4 text-[--gray-Violet] cursor-pointer`}>
              {footerTags.company.title}
            </h2>
            <Mapper
              util={footerTags.company.content}
              styles={`py-1 text-[.88rem] cursor-pointer hover:underline`}
            />
          </div>
          <div>
            <h2 className={`py-4 text-[--gray-Violet] cursor-pointer`}>
              {footerTags.help.title}
            </h2>
            <Mapper
              util={footerTags.help.content}
              styles={`py-1 text-[.88rem] cursor-pointer hover:underline`}
            />
          </div>
          <div>
            <h2 className={`py-4 text-[--gray-Violet] cursor-pointer`}>
              {footerTags.contact.title}
            </h2>
            <Mapper
              util={footerTags.contact.content}
              styles={`py-1 text-[.88rem] cursor-pointer hover:underline`}
            />
          </div>
          <div>
            <h2 className={`py-4 text-[--gray-Violet] cursor-pointer`}>
              {footerTags.others.title}
            </h2>
            <Mapper
              util={footerTags.others.content}
              styles={`py-1 text-[.88rem] cursor-pointer hover:underline`}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
