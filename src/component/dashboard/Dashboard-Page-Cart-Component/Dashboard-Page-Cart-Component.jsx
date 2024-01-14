import { useEffect, useState } from "react";

import config from "../../../configs/config.env";
import environement from "../../../environment";


import classes from "./Dashboard-Page-Cart-Component.module.css";

const DashboardPageCartComponent = (props) => {

    const [cart, setCart] = useState(null);

    useEffect(() => {
        const http = async() => {
            try {
                let res = await fetch(`${config.URI}${environement.CART.root}/${config.USER}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
    
                if(!res.ok) throw Error("Call server unsuccess");
    
                let { status, cart } = await res.json();
                if(status) {
                    console.log(cart);
                    setCart(cart);
                }

            } catch (error) {
                console.log(error);
            }
        }

        http();
    }, [])

    return (
        <div className={classes['dashboard-page-cart-component']}>
            <div className="container">
                {cart && (
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Sản phẩm</th>
                                <th>Ảnh</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.collections.length > 0 && cart.collections.map((elm, index) => {
                                return (<tr ky={elm.product._id}>
                                    <td>{index}</td>
                                    <td>{elm.product.name}</td>
                                    <td>
                                        <img src={elm.product.thumbnail} alt="" />
                                    </td>
                                    <td>{elm.product.price.$numberDecimal} VND</td>
                                    <td>{elm.quantity}</td>
                                </tr>)
                            })}

                            <tr>
                                <td>Khách hàng</td>
                                <td colSpan={4}>{cart.user.email}</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td colSpan={4}>{cart.user.email}</td>
                            </tr>
                            <tr>
                                <td>Số điện thoại</td>
                                <td colSpan={4}>{cart.user.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {!cart && (<h3 className="blank">Giỏ hàng chưa cập nhật</h3>)}
            </div>
        </div>
    )
}

export default DashboardPageCartComponent;