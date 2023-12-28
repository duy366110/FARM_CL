import React, { useRef, useImperativeHandle } from "react";
import classes from "./Common-Input-Component.module.css";

const CommonInputComponent = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            input: inputRef
        }
    })

    return (
        <div className={classes['common-input-component']}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{props.label}</label>
                <input
                    ref={inputRef}
                    onBlur={props.blur}
                    onChange={props.change}
                    type={props.type? props.type : 'text'}
                    className={`form-control ${!props.valid?.status && props.valid?.status != null? 'is-invalid' : ''}`} />
                    <small className={`${!props.valid?.status && props.valid?.status != null? classes['active'] : ''}`}>{props.valid?.message}</small>
            </div>
        </div>
    )
})

export default CommonInputComponent;