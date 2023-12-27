import { Outlet } from "react-router-dom";
import CommonHeaderComponent from "../common/Common-Header-Component/Common-Header-Component";
import classes from "./Dashboard-Main-Component.module.css";


const DashboardMainComponent = (props) => {

    return (
        <div className={classes['dashboard-main-component']}>
            <CommonHeaderComponent />
            <Outlet />
        </div>
    )
}

export default DashboardMainComponent;