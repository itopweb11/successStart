import React, {useState} from 'react';
import EmailIcon from "../../../img/svg/EmailIcon";
import LockIcon from "../../../img/svg/LockIcon";
import {emailRegex, registerPassRegex} from "../../../../utils/regex";
import PasswordControls from "../PasswordControls";

const Entrance = () => {
    const [passwordImage , setPasswordImage] = useState(false)

    return (
        <div className='registration'>
            <p className='registration__title'>Вход</p>
            <div className='registration__inputs'>
                <div className='registration__input'>
                    <p>
                        <span className='inputDEsc'>*</span>
                        Email
                    </p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <EmailIcon />
                        </div>
                        <input
                            placeholder='exaple@gmail.com'
                            name='mail'
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className='registration__input'>
                    <p>
                        <span className='inputDEsc'>*</span>
                        Пароль
                    </p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <LockIcon />
                        </div>
                        <input
                            type={passwordImage ? "text" : "password"}
                        />
                        <PasswordControls
                            passwordImage={passwordImage}
                            setPasswordImage={setPasswordImage}
                        />
                    </div>
                    <p className='forgotYourPassword'>забыли пароль?</p>
                </div>
            </div>
            <button className="registration__buttonContinue">
                Вход
            </button>
        </div>
    )
}

export default Entrance;