const Proceedure = ({ props }) => {
  const { title, card } = props;

  return (
    <div className={`py-[10rem] md:py-0 md:w-[80vw] w-[375px] `}>
      <div className="md:mt-[20rem] flex flex-col items-center border   ">
        <div className="my-[1rem] w-[10rem] h-[.04rem] bg-[--Very-Violet]"></div>
        <h1
          className={`text-[--font-family_1] first-letter:capitalize font-bold text-[2.5rem] md:text-left text-center mb-[3rem] karla`}
        >
          {title}
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-[3em]
         items-center md:items-start justify-between `}
        >
          {card.map((items, idx) => {
            return (
              <div
                key={idx}
                className={`w-[20rem] mb-2 space-y-6 flex flex-col items-center text-center md:items-start
                md:text-left justify-center`}
              >
                <img src={items.icon} className={``} alt="" />
                <h2 className="text-3xl karla">{items.title}</h2>
                <p className={`dmSerif`}>{items.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Proceedure;
