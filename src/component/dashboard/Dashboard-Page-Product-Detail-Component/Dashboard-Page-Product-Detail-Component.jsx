import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import config from "../../../configs/config.env";
import environement from "../../../environment";

import CommonButtonComponent from "../../common/Common-Button-Component/Common-Button-Component";
import classes from "./Dashboard-Page-Product-Detail-Component.module.css";

const DashboardPageProductDetailComponent = (props) => {
    const loader = useLoaderData();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        let { status, product} = loader;

        if(status) {
            setProduct(product);
        }
    }, [loader])

    const onAddCartHandler = async (event) => {
        console.log(product);
        let payload = {
            user: config.USER,
            product: product._id
        }

        try {
            let res = await fetch(`${config.URI}${environement.CART.root}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if(!res.ok) throw Error("Call server unsuccess");

            let { status } = await res.json();
            if(status) {
                navigate('/cart');
            }

        } catch (error) {
            throw error;
        }
    }

    return (
        <div className={classes['dashboard-page-product-detail']}>
            <div className="container">
                {product && (
                    <div className="row">
                        <div className="col-6">
                            <div className={classes['product-detail-thubmnail']}>
                                <img src={product.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={classes['product-detail-infor']}>
                                <h2 className={classes['title']}>{product.name}</h2>
                                <h2 className={classes['price']}>{product.price.$numberDecimal} VND</h2>
                                <CommonButtonComponent onClick={onAddCartHandler} title="Add cart"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardPageProductDetailComponent;

export const loader = (request, params) => {
    return new Promise( async(resolve, reject) => {
        try {
            let res = await fetch(`${config.URI}${environement.PRODUCT.root}/${params.product}`);
            if(!res.ok) throw Error("Call server unsuccess");
            resolve(await res.json());

        } catch (error) {
            reject({status: false, message: error.message});
        }
    })
}