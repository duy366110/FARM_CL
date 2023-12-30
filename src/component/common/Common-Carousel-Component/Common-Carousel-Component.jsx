import classes from "./Common-Carousel-Component.module.css";

const CommonCarouselComponent = (props) => {

    return (
        <div className={classes["common-carousel-component"]}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="assets/images/carousel_01.jpg" className="d-block w-100" alt="thumbnail"/>
                    </div>
                    <div className="carousel-item">
                    <img src="assets/images/carousel_02.jpg" className="d-block w-100" alt="thumbnail"/>
                    </div>
                    <div className="carousel-item">
                    <img src="assets/images/carousel_03.jpg" className="d-block w-100" alt="thumbnail"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CommonCarouselComponent;