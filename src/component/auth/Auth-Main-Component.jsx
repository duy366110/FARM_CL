import { Outlet } from "react-router-dom";
import classes from "./Auth-Main-Component.module.css";

const AuthMainComponent = (props) => {

    return (
        <div className={classes['auth-main-component']}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthMainComponent;