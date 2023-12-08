import { Btn, Mapp } from "./utilites";
import { navitem } from "./data";

const Proceedure = ({ props }) => {
  const { title, card } = props;

  return (
    <div
      className={`py-[10rem] md:py-0 md:pb-[10rem] md:w-full  flex md:justify-center `}
    >
      <div className="md:mt-[20rem] flex flex-col items-center lg:items-start  md:w-5/6 w-[375px] ">
        <div className="mb-[1.5rem] w-[8rem] h-[.04rem] bg-[--Very-Violet] "></div>
        <h1
          className={`text-[--font-family_1] first-letter:capitalize font-bold text-[2.5rem] md:text-left text-center lg:text-left mb-[3rem] karla`}
        >
          {title}
        </h1>
        <div
          className={`flex flex-col w-full md:flex-row items-center md:items-start justify-between `}
        >
          <Mapp
            utilis={card}
            styles={`w-[20rem] mb-[8rem] space-y-5 flex flex-col items-center text-center md:items-start md:text-left  justify-center`}
            alt={card}
            h1={"text-3xl karla"}
            p={`dmSerif`}
          />
        </div>
        <div
          className={`d px-[3rem] text-center gap-y-[2rem] h-[20em] flex flex-col items-center justify-center bg-[--Dark-Violet] text-[--Very-Gray]  md:flex-row w-full md:justify-between md:h-[12rem]`}
        >
          <h1
            className={`text-[2.5rem] font-bold  
            w-[375px] leading-[1] first-letter:capitalize px-2 tracking-wide karla lg:text-left lg:px-0 `}
          >
            find out more about how we work
          </h1>
          <Btn
            styles={
              " btn tracking-widest"
            }
            text={navitem[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default Proceedure;
