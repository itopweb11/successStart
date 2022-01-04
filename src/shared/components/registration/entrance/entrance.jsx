import React, {useState} from 'react';
import EmailIcon from "../../../img/svg/EmailIcon";
import LockIcon from "../../../img/svg/LockIcon";
import PasswordControls from "../PasswordControls";
import AuthWrapper from "../../wrapperComponents/AuthWrapper";
import axios from "axios";

const Entrance = () => {
    const [passwordImage , setPasswordImage] = useState(false)


    {

    }

    const handleConfirmEntrance = () => {
        axios.post("https://api.investonline.su/api/v1/clients/web/login", {
            email: "borrower@incrowd.ru",
            password: "borrowerIncrowd"
        })
            .then(function (response) {
                console.log(1)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <AuthWrapper>
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
                                name='email'
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
                <button
                    className="registration__buttonContinue"
                    onClick={handleConfirmEntrance}
                >
                    Вход
                </button>
            </div>
        </AuthWrapper>
    )
}

export default Entrance;