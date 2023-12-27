import { Outlet } from "react-router-dom";
import classes from "./Dashboard-Main-Component.module.css";


const DashboardMainComponent = (props) => {

    return (
        <div>
            Dashboard Main Component
            <Outlet />
        </div>
    )
}

export default DashboardMainComponent;