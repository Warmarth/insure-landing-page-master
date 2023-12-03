import { useState, useEffect } from "react";
// import { Btn } from "./MenuList";
import { patterns } from "./data";
import { Btn } from "./utilites";

const PageHero = ({ props }) => {
  const { title, content, small, big } = props;
  const [imageWidth, setImageWidth] = useState(small);
  const width = 700;
  useEffect(() => {
    setInterval(() => {
      window.innerWidth < width ? setImageWidth(small) : setImageWidth(big);
    }, 1000);
  }, [imageWidth]);

  return (
    <div
      className={`text-white md:flex items-center justify-center flex-row-reverse bg-[--Dark-Violet] gap-5 w-[375px] md:w-full
      `}
    >
      <div>
        <img src={imageWidth} className="lg:mb-[-10rem] w-full" />
      </div>
      <div
        className={`text-center md:text-left flex items-center md:items-start flex-col space-y-5 py-[1rem] `}
      >
        <img
          src={
            window.innerWidth < width ? patterns.pattern_6 : patterns.pattern_7
          }
          alt=""
          className={
            window.innerWidth < width
              ? `absolute 
               translate-x-[-6.5rem] 
              translate-y-[-1rem]`
              : `absolute right-0 translate-y-[-4rem] `
          }
        />
        <div className="space-y-4 py-[3rem] w-[375px] md:w-[500px] px-[2rem] dmSerif ">
          <h1
            className={`first-letter:capitalize font-bold text-[2.6rem] leading-[1] karla`}
          >
            {title}
          </h1>
          <p className={`leading-[1.5] text-[16px] px-3 md:px-0`}>{content}</p>

          <Btn
            styles={`border hover:border-white hover:bg-transparent hover:text-white outline-none px-[2rem] py-[.5rem] uppercase`}
            text="view plans"
          />
        </div>
        <img
          src={
            window.innerWidth < width ? patterns.pattern_8 : patterns.pattern_5
          }
          alt=""
          className={
            window.innerWidth > width
              ? `left-0 absolute translate-y-[13rem]`
              : `right-0 absolute translate-y-[16rem]
              translate-x-[-6.7rem]`
          }
        />
      </div>
    </div>
  );
};

export default PageHero;
