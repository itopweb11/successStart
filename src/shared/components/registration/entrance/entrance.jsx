import React, {useReducer, useState} from 'react';
import EmailIcon from "../../../img/svg/EmailIcon";
import LockIcon from "../../../img/svg/LockIcon";
import PasswordControls from "../PasswordControls";
import AuthWrapper from "../../wrapperComponents/AuthWrapper";
import axios from "axios";
import {people, reducer} from "./helperEntrance";
import {emailRegex, registerPassRegex} from "../../../../utils/regex";
import {useHistory} from "react-router-dom";

const Entrance = () => {
    const [passwordImage , setPasswordImage] = useState(false)
    const [state, dispatch] = useReducer(reducer, people);

    const history = useHistory();
    const handleConfirmEntrance = () => {
        axios.post("https://api.investonline.su/api/v1/clients/web/login", {
            email: state.email,
            password: state.password
        })
            .then(function (response) {
                history.push("/");
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                localStorage.setItem('expires_in', response.data.expires_in)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleOnChange = e => {
        dispatch({
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        })
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
                                onChange={handleOnChange}
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
                                onChange={handleOnChange}
                                placeholder='Пароль'
                                name='password'
                                autoComplete="off"
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
                    disabled={!(emailRegex.test(state.email) && registerPassRegex.test(state.password))}
                    onClick={handleConfirmEntrance}
                >
                    Вход
                </button>
            </div>
        </AuthWrapper>
    )
}

export default Entrance;