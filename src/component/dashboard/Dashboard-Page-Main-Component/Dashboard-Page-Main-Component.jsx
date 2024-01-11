import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import environement from "../../../environment";
import config from "../../../configs/config.env";

import CommonCarouselComponent from "../../common/Common-Carousel-Component/Common-Carousel-Component";
import DashboardPageMainSectionIntroComponent from "./Dashboard-Page-Main-Section-Intro-Component/Dashboard-Page-Main-Section-Intro-Component";
import DashboardPageMainSectionProductComponent from "./Dashboard-Page-Main-Section-Product-Component/Dashboard-Page-Main-Section-Product-Component";

import "./Dashboard-Page-Main-Component.css";

const DashboardPageMainComponent = (props) => {
    const loader = useLoaderData();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let { status, products } = loader;
        if(status) {
            console.log(products);
            setProducts(products);
        }
    }, [loader])

    return (
        <div className="dashboard-page-main-component">
            <CommonCarouselComponent />
            <DashboardPageMainSectionIntroComponent />
            <DashboardPageMainSectionProductComponent products={products} />
        </div>
    )
}

export default DashboardPageMainComponent;

export const loader = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let url = `${config.URI}${environement.PRODUCT.products}`;
            let res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!res.ok) throw new Error("Connect server unsuccess");

            let { status, products } = await res.json();
            if(status) {
                resolve({status: true, products});
            }

        } catch (error) {
            reject({status: false, message: error.message});
        }
    })
}