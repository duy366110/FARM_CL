import { Outlet } from "react-router-dom";
import classes from "./Auth-Main-Component.module.css";


const AuthMainComponent = (props) => {

    return (
        <div>
            Auth Main Component
            <Outlet />
        </div>
    )
}

export default AuthMainComponent;