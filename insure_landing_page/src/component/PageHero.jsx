import { useState, useEffect } from "react";
// import { patterns } from "./data";
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
    <section className="flex justify-center w-[375px]  md:w-full bg-[--Dark-Violet] ">
      <div
        className={`text-white md:flex items-start justify-between flex-row-reverse md:w-5/6 static md:translate-y-[20%] hero`}
      >
        <div>
          <img src={imageWidth} className="w-full" />
        </div>
        <div
          className={`text-center md:text-left flex items-center md:items-start flex-col gap-x-4 space-y-6 py-[1rem] md:py-0`}
        >
          {/* <img
            src={
              window.innerWidth < width
                ? patterns.pattern_6
                : patterns.pattern_7
            }
            alt="Up Parttern"
            className={
              window.innerWidth < width
                ? `absolute 
              translate-x-[-6.5rem] 
              translate-y-[-1rem]`
                : `absolute right-0 translate-y-[-8rem] translate-x-[25%] `
            }
          /> */}
          <div className="space-y-4 py-[3rem] md:py-0  md:w-[550px]  dmSerif ">
            <div className="mb-[2.5rem] w-[8rem] h-[.04rem] bg-[--Grayish-Blue] hidden md:block "></div>
            <h1
              className={`first-letter:capitalize font-bold text-[3rem] leading-[1] karla lg:text-[4rem] lg:tracking-[5px] tracking-[1px]`}
            >
              {title}
            </h1>
            <p className={`leading-[2]  text-[16px] px-3 md:px-0`}>{content}</p>

            <Btn
              styles={`border hover:text-black hover:bg-white outline-none px-[2rem] py-[.5rem] font-bold uppercase`}
              text="view plans"
            />
          </div>
          {/* <img
            src={
              window.innerWidth < width
                ? patterns.pattern_8
                : patterns.pattern_5
            }
            alt="down Parttern"
            className={
              window.innerWidth > width
                ? `left-0 absolute translate-y-[13rem]`
                : `right-0 absolute translate-y-[16rem]
              translate-x-[-6.7rem]`
            }
          /> */}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
