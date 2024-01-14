import classes from "./Common-Footer-Component.module.css";

const FooterComponent = (props) => {
    

    return (
        <footer className={classes["common-footer-component"]} style={{backgroundImage: "url('/assets/images/3.jpg.webp')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2 className={classes["footer-logo"]}>Farm</h2>
                        <p className={classes["footer-desc"]}>
                            Chúng tôi tự hào là nhà cung cấp dịc vụ về nông sản tự nhiện tốt nhất đến khách hàng và người tiêu dùng.
                        </p>
                    </div>

                    <div className="col-4">
                        <div>
                            <h2 className={classes["footer-title"]}>Thông tin</h2>
                            <ul className={classes["footer-nav"]}>
                                <li>Vận chuyển & Giao hàng</li>
                                <li>Đóng gói sản phẩm</li>
                                <li>Thu hoạch & chế biến</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <h2 className={classes["footer-title"]}>Dịch vụ</h2>
                            <ul className={classes["footer-nav"]}>
                                <li>Sản phẩm</li>
                                <li>Giới thiệu</li>
                                <li>Dịch vụ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes["footer-coppy-right"]}>Coppy right &#169; by duy366110@gmail.com</p>
        </footer>
    )
}

export default FooterComponent;