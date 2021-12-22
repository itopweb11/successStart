import React from 'react';
import EyeIcon from "../../img/svg/EyeIcon";
import EyeInvisibleIcon from "../../img/svg/EyeInvisibleIcon";
import vector222 from "../../img/components/registration/Vector222.png";
import classnames from "classnames";
import {registerPassRegex} from "../../../utils/regex";

const PasswordControls = ({passwordImage, setPasswordImage, password}) => {
    const eyeIconClass = classnames({
        'registration__passwordDesign': true,
        'registration__passwordDesignActive': registerPassRegex.test(password)
    })

    return (
        <>
            <span onClick={() => setPasswordImage(!passwordImage)} className={eyeIconClass}>
                { passwordImage ? <EyeIcon /> : <EyeInvisibleIcon /> }
            </span>
            {
                registerPassRegex.test(password)
                    ? <img className="registration__passwordReady" src={vector222} alt="check" />
                    : null
            }

        </>
    )
}

export default PasswordControls;