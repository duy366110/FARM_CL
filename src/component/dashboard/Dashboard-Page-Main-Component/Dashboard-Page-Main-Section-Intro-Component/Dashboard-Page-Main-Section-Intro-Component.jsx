import classes from "./Dashboard-Page-Main-Section-Intro-Component.module.css";

const DashboardPageMainSectionIntroComponent = (props) => {

    return (
        <div className="dashboard-page-main-wrapper">
            <div className="container-fluid">
                <div className={classes['section-intro-wrapper']}>
                    <div className={classes['intro-items']}>
                        <img src="assets/images/icons/digger.png.webp" alt="icon" />
                        <h3>Dịch vụ tốt nhất</h3>
                    </div>

                    <div className={classes['intro-items']}>
                        <img src="assets/images/icons/windmill.png.webp" alt="icon" />
                        <h3>Trải nghiệm trang trại</h3>
                    </div>

                    <div className={classes['intro-items']}>
                        <img src="assets/images/icons/cereals.png.webp" alt="icon" />
                        <h3>100% tự nhiên</h3>
                    </div>

                    <div className={classes['intro-items']}>
                        <img src="assets/images/icons/tractor.png.webp" alt="icon" />
                        <h3>Thiết bị nông nghiệp</h3>
                    </div>

                    <div className={classes['intro-items']}>
                        <img src="assets/images/icons/sunrise.png.webp" alt="icon" />
                        <h3>Thực phẩm hữu cơ</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPageMainSectionIntroComponent;