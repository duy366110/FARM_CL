import CommonCardComponent from "../../../common/Common-Card-Component/Common-Card-Component";
import CommonHeaderSectionComponent from "../../../common/Common-Header-Section-Component/Common-Header-Section-Component";

const DashboardPageMainSectionProductComponent = (props) => {

    return (
        <div className="dashboard-page-main-wrapper">
            <CommonHeaderSectionComponent
             subTitle={"Sản phẩm tiêu biểu"}
             title={"<span>Sản phẩm tự nhiên</span> chất lượng tốt nhất"}/>

            <div className="container">
                <div className="row">
                    {props.products.length > 0 && props.products.map((product) => {
                        return (
                            <div key={product._id} className="col-3">
                                <CommonCardComponent product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardPageMainSectionProductComponent;