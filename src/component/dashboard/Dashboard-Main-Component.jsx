import { Outlet } from "react-router-dom";
import CommonHeaderComponent from "../common/Common-Header-Component/Common-Header-Component";
import FooterComponent from "../common/Common-Footer-Component/Common-Footer-Component";
import classes from "./Dashboard-Main-Component.module.css";


const DashboardMainComponent = (props) => {

    return (
        <div className={classes['dashboard-main-component']}>
            <CommonHeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default DashboardMainComponent;