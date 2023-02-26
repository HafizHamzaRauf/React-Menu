import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
function Menu(props) {
  const menuContent = props.list.map((item) => (
    <MenuItem
      image={item.img}
      title={item.title}
      price={item.price}
      description={item.desc}
    />
  ));
  return <div className={classes["menu"]}>{menuContent}</div>;
}
export default Menu;
