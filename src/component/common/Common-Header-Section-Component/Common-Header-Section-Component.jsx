import classes from "./Common-Header-Section-Component.module.css";

const CommonHeaderSectionComponent = (props) => {

    return (
        <div className={classes['common-header-section-component']}>
            <div className={classes['header-section-wrapper']}>
                <h3 className={classes["subtitle"]}>{props.subTitle}</h3>
                <h2 className={classes["title"]} dangerouslySetInnerHTML={{__html: props.title}}></h2>
                <img className={classes['icon']} src="assets/images/icons/decor2.png.webp" alt="icons" />
            </div>
        </div>
    )
}

export default CommonHeaderSectionComponent;