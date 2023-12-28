import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useValidation from "../../../hook/use-validation";
import CottageIcon from '@mui/icons-material/Cottage';
import CommonInputComponent from "../../common/Common-Input-Component/Common-Input-Component";
import CommonButtonComponent from "../../common/Common-Button-Component/Common-Button-Component";

const AuthSignUpComponent = (props) => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const {value: fullNameValue, valid: validFullName, onBlur: blurFullName, onChange: changeFullName} = useValidation(['require']);
    const {value: emailValue, valid: validEmail, onBlur: blurEmail, onChange: changeEmail} = useValidation(['require', 'email']);
    const {value: passValue, valid: validPass, onBlur: blurPass, onChange: changePass} = useValidation(['require', 'password']);
    const {value: phoneValue, valid: validPhone, onBlur: blurPhone, onChange: changePhone} = useValidation(['require', 'phone']);
    const {value: addressValue, valid: validAddress, onBlur: blurAddress, onChange: changeAddress} = useValidation(['require']);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let inputFullName = fullNameRef.current.input.current;
        let inputEmail = emailRef.current.input.current;
        let inputPass = passwordRef.current.input.current;
        let inputPhone = phoneRef.current.input.current;
        let inputAddress = addressRef.current.input.current;

        inputFullName.focus();
        inputFullName.blur();

        inputEmail.focus();
        inputEmail.blur();

        inputPass.focus();
        inputPass.blur();

        inputPhone.focus();
        inputPhone.blur();

        inputAddress.focus();
        inputAddress.blur();

        if(emailValue && passValue && fullNameValue && phoneValue && addressValue) {
            console.log("User co the dang nhap");
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h2 className="form-title">
                <NavLink to="/"><CottageIcon /></NavLink>
                <span>Đăng ký</span>
            </h2>

            <CommonInputComponent
                ref={fullNameRef}
                blur={blurFullName}
                change={changeFullName}
                valid={validFullName}
                label="Họ và tên"
                type="text"/>

            <CommonInputComponent
                ref={emailRef}
                blur={blurEmail}
                change={changeEmail}
                valid={validEmail}
                label="E-mail"
                type="email"/>

            <CommonInputComponent
                ref={passwordRef}
                blur={blurPass}
                change={changePass}
                valid={validPass}
                label="Mật khẩu"
                type="password"/>

            <CommonInputComponent
                ref={phoneRef}
                blur={blurPhone}
                change={changePhone}
                valid={validPhone}
                label="Số điện thoại"
                type="phone"/>

            <CommonInputComponent
                ref={addressRef}
                blur={blurAddress}
                change={changeAddress}
                valid={validAddress}
                label="Địa chỉ"
                type="text"/>

            <CommonButtonComponent type="submit" title="Đăng ký" full={true} />

            <p className="form-sugget">
                Bạn đã có tài khoản
                <NavLink to="/auth">Đăng nhập</NavLink>
            </p>
        </form>
    )
}

export default AuthSignUpComponent;