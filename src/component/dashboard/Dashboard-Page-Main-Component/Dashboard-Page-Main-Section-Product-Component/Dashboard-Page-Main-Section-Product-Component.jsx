import CommonCardComponent from "../../../common/Common-Card-Component/Common-Card-Component";
import classes from "./Dashboard-Page-Main-Section-Product-Component.module.css";

const DashboardPageMainSectionProductComponent = (props) => {

    return (
        <div className="dashboard-page-main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <CommonCardComponent
                            name={"Dâu tây"}
                            img={"assets/images/products/p1.jpg.webp"} />
                    </div>

                    <div className="col-3">
                        <CommonCardComponent
                            name={"Bánh mỳ lúa mạch"}
                            img={"assets/images/products/p2.jpg.webp"} />
                    </div>

                    <div className="col-3">
                        <CommonCardComponent
                            name={"Thịt bò"}
                            img={"assets/images/products/p3.jpg.webp"} />
                    </div>

                    <div className="col-3">
                        <CommonCardComponent
                            name={"Mật ông rừng"}
                            img={"assets/images/products/p4.jpg.webp"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPageMainSectionProductComponent;