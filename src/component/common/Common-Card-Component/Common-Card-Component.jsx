
import { NavLink } from "react-router-dom";
import classes from "./Common-Card-Component.module.css";

const CommonCardComponent = (props) => {

    return (
        <NavLink to={`/product-detail/${props.product._id}`} className={classes['common-card-component']}>
            <img src={props.product.thumbnail} alt="product" />
            <div className={classes["card-infor"]}>
                <h3 className={classes["card-infor-name"]}>{props.product.name}</h3>
                <p className={classes["card-infor-price"]}>
                    {props.product.price.$numberDecimal} VND
                </p>
            </div>
        </NavLink>
    )
}

export default CommonCardComponent;