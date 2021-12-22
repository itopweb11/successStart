import React, {useReducer, useState} from 'react';
import axios from "axios";
import classnames from 'classnames';
import vector from "../../../shared/img/components/registration/Vector.png";
import {
    people, reducer, iconPassword, buttonContinueDisabled, buttonContinueClassName, confirmEmailBtn
} from "../../../containers/registrationPage/helper";
import {
    eightСharacterRegex,
    emailRegex, oneDigitRegex,
    oneLowercaseLetterRegex,
    oneUppLetterRegex,
    registerPassRegex
} from "../../../utils/regex";
import EmailIcon from "../../img/svg/EmailIcon";
import LockIcon from "../../img/svg/LockIcon";
import PasswordControls from "./PasswordControls";

const Registration = () => {
    const [state, dispatch] = useReducer(reducer, people);
    const [confirm , setConfirm] = useState(false)
    const [inputConfirm , setInputConfirm] = useState(false)
    const [passwordImage , setPasswordImage] = useState(false)

    const confirmBtnClass = classnames({
        'registration__buttonConfirm': true,
        'registration__buttonConfirmActive': emailRegex.test(state.mail) && !confirm
    })

    const emailCodeClass = classnames({
        'registration__inputNone': true,
        'registration__input': confirm
    })

    const handleOnChange = e => {
        dispatch({
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleConfirmEmail = () => {
        setInputConfirm(true)
        axios.post("https://api.investonline.su/api/v1/confirmations/send/email", {
            email: state.mail,
            type: 'register_request'
        })
            .then(function (response) {
                setConfirm(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleOnChangeEmailCode = event => {
        if (event.target.value.length <= 4) {
            dispatch({
                payload: {
                    key: event.target.name,
                    value: event.target.value
                }
            })
        }
    }

    return(
        <div className='registration'>
            <p className='registration__title'>Регистрация</p>
            <div className='registration__buttons'>
                <button
                    className={classnames({'registration__button-active': state.userType === 'investor'})}
                    name='userType'
                    value='investor'
                    onClick={handleOnChange}
                >
                    Инвестор
                </button>
                <button
                    className={classnames({'registration__button-active': state.userType === 'borrower'})}
                    name='userType'
                    value='borrower'
                    onClick={handleOnChange}
                >
                    Заемщик
                </button>
            </div>
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
                            value={state.mail}
                            placeholder='exaple@gmail.com'
                            name='mail'
                            type="text"
                            autoComplete="off"
                        />
                        {inputConfirm && !confirm
                            ? <div className="spinner-border text-primary registration__input__spinner" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            : <button
                                disabled={!emailRegex.test(state.mail) && !confirm}
                                onClick={handleConfirmEmail}
                                className={confirmBtnClass}
                            >
                                Подтвердить
                            </button>
                        }
                    </div>
                </div>
                <div className={emailCodeClass}>
                    <p>
                        <span className='inputDEsc'>*</span>
                        Код подтверждения
                    </p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <LockIcon />
                        </div>
                        <input
                            placeholder='Код подтверждения'
                            type="number"
                            name='confirmationCode'
                            value={state.confirmationCode}
                            onChange={handleOnChangeEmailCode}
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
                            onChange={handleOnChange}
                            value={state.password}
                            placeholder='Пароль'
                            name='password'
                            type={passwordImage ? "text" : "password"}
                        />
                        <PasswordControls
                            passwordImage={passwordImage}
                            setPasswordImage={setPasswordImage}
                            password={state.password}
                        />
                    </div>
                </div>
                <div className='registerBlockInfo__listConditions'>
                    <div className='registerBlockInfo__listConditionsFirst-child'>
                        <div className={classnames({'point-active': oneUppLetterRegex.test(state.password)})}>
                            <div className="point" />
                            <p className="pointText">одна прописная буква</p>
                        </div>
                        <div className={classnames({
                            'registerBlockInfo__listConditions-item': true,
                            'point-active': eightСharacterRegex.test(state.password)
                        })}>
                            <div className="point" />
                            <p className="pointText">не менее 8 символов</p>
                        </div>
                    </div>
                    <div>
                        <div className={classnames({'point-active': oneLowercaseLetterRegex.test(state.password)})}>
                            <div className="point" />
                            <p className="pointText">одна строчная буква</p>
                        </div>
                        <div className={classnames({
                            'registerBlockInfo__listConditions-item': true,
                            'point-active': oneDigitRegex.test(state.password)
                        })}>
                            <div className="point" />
                            <p className="pointText">одна цифра</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className='registration__listConditions__button__desc'
                        htmlFor="agreement"
                    >
                        <input
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            checked={state.agreement}
                            onChange={event => handleOnChange({
                                target: {
                                    name: 'agreement',
                                    value: event.target.checked
                                }
                            })}
                        />
                        <span className={classnames({
                            'registration__listConditions__button__desc__input': true,
                            'descInputActive': state.agreement
                        })}>
                            <img src={vector} alt="vector"/>
                        </span>
                        <span>
                            Я согласен с <span className='registration__listConditions__button__desc__activeText'>Политикой обработки персональных данных</span> и даю <br/>
                            <span className='registration__listConditions__button__desc__activeText'>Согласие на обработку своих персональных данных</span>
                        </span>
                    </label>
                </div>
                <button
                    disabled={!(emailRegex.test(state.mail) && registerPassRegex.test(state.password) && state.agreement && state.userType)}
                    className="registration__buttonContinue"
                >
                    Продолжить
                </button>
            </div>
        </div>
    )
}

export default Registration;