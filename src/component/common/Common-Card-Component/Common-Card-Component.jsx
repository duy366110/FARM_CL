
import { NavLink } from "react-router-dom";
import classes from "./Common-Card-Component.module.css";

const CommonCardComponent = (props) => {

    return (
        <NavLink to="/" className={classes['common-card-component']}>
            <img src={props.img} alt="product" />
            <div className={classes["card-infor"]}>
                <h3 className={classes["card-infor-name"]}>{props.name}</h3>
                <p className={classes["card-infor-price"]}>25.000 VND</p>
            </div>
        </NavLink>
    )
}

export default CommonCardComponent;