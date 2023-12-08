const Btn = (props) => {
  return <button className={props.styles}>{props.text}</button>;
};

const Mapper = (props) => {
  return props.util.map((item, idx) => {
    return (
      <p key={idx} className={props.styles}>
        {item}
      </p>
    );
  });
};

const Dispas = (props) => {
  return (
    <div className={props.styles}>
      {props.util.map((item, idx) => {
        return (
          <img src={item} alt={props.alt} key={idx} className={props.style} />
        );
      })}
    </div>
  );
};

const Mapp = (props) => {
  return props.utilis.map((items, idx) => {
    return (
      <div key={idx} className={props.styles}>
        <img src={items.icon} alt={props.alt} />
        <h1 className={props.h1}>{items.title}</h1>
        <p className={props.p}>{items.content}</p>
      </div>
    );
  });
};
export { Btn, Mapper, Mapp, Dispas };
