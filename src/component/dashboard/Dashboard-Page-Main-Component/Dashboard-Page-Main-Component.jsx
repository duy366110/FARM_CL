import CommonCarouselComponent from "../../common/Common-Carousel-Component/Common-Carousel-Component";
import DashboardPageMainSectionIntroComponent from "./Dashboard-Page-Main-Section-Intro-Component/Dashboard-Page-Main-Section-Intro-Component";
import DashboardPageMainSectionProductComponent from "./Dashboard-Page-Main-Section-Product-Component/Dashboard-Page-Main-Section-Product-Component";

import "./Dashboard-Page-Main-Component.css";

const DashboardPageMainComponent = (props) => {

    return (
        <div className="dashboard-page-main-component">
            <CommonCarouselComponent />
            <DashboardPageMainSectionIntroComponent />
            <DashboardPageMainSectionProductComponent />
        </div>
    )
}

export default DashboardPageMainComponent;