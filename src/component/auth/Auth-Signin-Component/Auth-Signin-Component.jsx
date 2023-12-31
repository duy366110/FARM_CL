import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useValidation from "../../../hook/use-validation";
import CottageIcon from '@mui/icons-material/Cottage';
import CommonInputComponent from "../../common/Common-Input-Component/Common-Input-Component";
import CommonButtonComponent from "../../common/Common-Button-Component/Common-Button-Component";

const AuthSignInComponent = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {value: emailValue, valid: validEmail, onBlur: blurEmail, onChange: changeEmail} = useValidation(['require', 'email']);
    const {value: passValue, valid: validPass, onBlur: blurPass, onChange: changePass} = useValidation(['require', 'password']);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let inputEmail = emailRef.current.input.current;
        let inputPass = passwordRef.current.input.current;

        inputEmail.focus();
        inputEmail.blur();

        inputPass.focus();
        inputPass.blur();

        if(emailValue && passValue) {
            console.log("User co the dang nhap");
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h2 className="form-title">
                <NavLink to="/"><CottageIcon /></NavLink>
                <span>Đăng nhập</span>
            </h2>
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

            <CommonButtonComponent type="submit" title="Đăng nhập" full={true} />

            <p className="form-sugget">
                Bạn chưa có tài khoản
                <NavLink to="/auth/signup">Đăng ký</NavLink>
            </p>
        </form>
    )
}

export default AuthSignInComponent;