import classes from "./Common-Button-Component.module.css";

const CommonButtonComponent = (props) => {

    return (
        <div className={classes['common-button-component']}>
            <button
                className={`btn btn-primary ${classes['btn-custom']} ${props.full? 'w-100' : ''}`}
                type={props.type? props.type : 'button'}
                onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default CommonButtonComponent;