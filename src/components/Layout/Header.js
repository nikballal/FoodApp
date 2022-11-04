import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onButtonClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/* since it has a '-',  hence we use the above format */}
        <img src={mealsImage} alt="meals-img" />
      </div>
    </Fragment>
  );
};

export default Header;
