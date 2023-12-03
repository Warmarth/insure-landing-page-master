const Btn = (props) => {
  return <button className={props.styles}>{props.text}</button>;
};
const Mapper = (props) => {
  return props.util.map((item, idx) => {
    return (
      <li key={idx} className={props.styles}>
        {item}
      </li>
    );
  });
};
const Mapp = (props) => {
  return props.utilis.map((items, idx) => {
    return (
      <div key={idx} className={props.styles}>
        <img src={items.icon} />
        <h1 className={props.h1}>{items.title}</h1>
        <p className={props.p}>{items.content}</p>
      </div>
    );
  });
};
export { Btn, Mapper, Mapp };
