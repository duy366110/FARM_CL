import { NavLink } from "react-router-dom";
import classes from "./Common-Header-Component.module.css";

const CommonHeaderComponent = (props) => {

    return (
        <header className={classes['common-header-component']}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <h1 className={classes['header-logo']}><NavLink to="/">Farm</NavLink></h1>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <div className={`d-flex justify-content-between ${classes['header-navigator']}`}>
                            <ul className={classes['header-list']}>
                                <li><NavLink to="/about">Giới thiệu</NavLink></li>
                                <li><NavLink to="/product">Sản phẩm</NavLink></li>
                            </ul>

                            <div className={classes['header-auth-tab-left']}>
                                <ul className={classes['header-list']}>
                                    <li><NavLink to="#">Đăng xuất</NavLink></li>
                                    <li><NavLink to="/auth">Đăng nhập</NavLink></li>
                                    <li><NavLink to="/auth/signup">Đăng ký</NavLink></li>
                                </ul>
                                <button className="d-none"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CommonHeaderComponent;