import { Btn, Mapp } from "./utilites";
import { navitem } from "./data";

const Proceedure = ({ props }) => {
  const { title, card } = props;

  return (
    <div className={`py-[10rem] md:py-0 md:w-11/12 w-[375px] `}>
      <div className="md:mt-[20rem] flex flex-col items-center lg:items-start border lg:w-5/6  ">
        <div className="my-[1rem] w-[10rem] h-[.04rem] bg-[--Very-Violet]"></div>
        <h1
          className={`text-[--font-family_1] first-letter:capitalize font-bold text-[2.5rem] md:text-left text-center lg:text-left mb-[3rem] karla`}
        >
          {title}
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-[3em]
         items-center md:items-start justify-between `}
        >
          <Mapp
            utilis={card}
            styles={`w-[20rem] mb-2 space-y-6 flex flex-col items-center text-center md:items-start
                md:text-left justify-center`}
            h1={"text-3xl karla"}
            p={`dmSerif`}
          />
        </div>
        <div
          className={` px-[3rem] border text-center gap-y-[2rem] d h-[20em] flex flex-col items-center justify-center bg-[--Dark-Violet] text-[--Very-Gray]  lg:flex-row w-full lg:justify-between lg:h-[8rem]`}
        >
          <h1
            className={`text-[2.5rem] font-bold  
            w-[375px] leading-[1] first-letter:capitalize px-2 tracking-wide karla lg:text-left lg:px-0 `}
          >
            find out more about how we work
          </h1>
          <Btn
            styles={
              "border px-[2rem] text-[.785rem] py-2 uppercase tracking-widest"
            }
            text={navitem[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default Proceedure;
