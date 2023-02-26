import classes from "./MenuItem.module.css";
function MenuItem(props) {
  return (
    <div className={classes["menu-item"]}>
      <div className={classes["image-container"]}>
        <img src={props.image} alt={"food image"} className={classes.image} />
      </div>
      <div className={classes["menu-item-description"]}>
        <div className={classes["title-container"]}>
          <h2 className={classes.title}>{props.title}</h2>
          <p className={classes.price}>{props.price}</p>
        </div>
        <hr className={classes.line}></hr>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
}
export default MenuItem;
