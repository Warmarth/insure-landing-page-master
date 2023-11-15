import { navitem } from "./data";

var btn = (
  <button className={`uppercase  cursor-pointer `}>
    view plans
  </button>
);
const MenuList = () => {
  const nav = navitem.map((item, idx) => <p key={idx}>{item}</p>);
  return (
    <>
      <div
        className={`translate-x-[6rem] translate-y-[8rem] uppercase md:hidden text-center space-y-[.6rem] bg-green-200`}
      >
        {nav}
        <button className="border-black border-2">{btn}</button>
      </div>
    </>
  );
};
export { btn };
export default MenuList;
