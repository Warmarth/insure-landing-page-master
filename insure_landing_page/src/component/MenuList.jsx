import { navitem } from "./data";


const MenuList = () => {
  const nav = navitem.map((item, idx) => <p key={idx}>{item}</p>);
  return (
    <>
      <div
        className={`translate-x-[6rem] translate-y-[8rem] uppercase md:hidden text-center space-y-[.6rem] bg-green-200`}
      >
        {nav}
        {/* <Btn styles={`border`}  text='view plans'/> */}
        {/* <button className="border-black border-2">{btn}</button> */}
      </div>
    </>
  );
};
export default MenuList;
