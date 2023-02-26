import classes from "./Category.module.css";
import { categories } from "../store/data";
import { useState } from "react";
function Category(props) {
  const [activeLink, setActiveLink] = useState("All");
  const clickHandler = function (e) {
    setActiveLink(e.target.id);
    props.changeList(e.target.id);
  };
  const buttons = categories.map((item) => (
    <button
      className={`${activeLink === item ? classes.active : classes.btn}`}
      onClick={clickHandler}
      id={item}
    >
      {item}
    </button>
  ));

  return (
    <div className={classes.categories}>
      <button
        className={`${activeLink === "All" ? classes.active : classes.btn}`}
        onClick={clickHandler}
        id="All"
      >
        All
      </button>
      {buttons}
    </div>
  );
}

export default Category;
