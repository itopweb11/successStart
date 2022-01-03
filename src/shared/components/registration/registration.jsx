import React, {useState} from 'react';
import axios from "axios";
import classnames from 'classnames';
import vector from "../../../shared/img/components/registration/Vector.png";
import vector222 from "../../img/components/registration/Vector222.png";
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

const Registration = ({setRegistration, dispatch, state}) => {
    const [confirm , setConfirm] = useState(false)
    const [codeConfirm , setCodeConfirm] = useState(true)
    const [inputConfirm , setInputConfirm] = useState(false)
    const [passwordImage , setPasswordImage] = useState(false)
    const [activeElem , setActiveElem] = useState(false)
    const [activeElemMail , setActiveElemMail] = useState(false)

    const confirmBtnClass = classnames({
        'registration__buttonConfirm': true,
        'registration__buttonConfirmActive': emailRegex.test(state.email) && !confirm
    })
    const userBtn = classnames({
        'registration__buttons': true,
        'registration__button-noActive': activeElem && !state.role || state.confidentiality_acceptance && !state.role
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
            email: state.email,
            type: 'register_request'
        })
            .then(function (response) {
                setConfirm(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleConfirmCode = () => {
        axios.post("https://api.investonline.su/api/v1/confirmations/check/email", {
            email: state.email,
            code: state.email_code,
            type: 'register_request'
        })
            .then(function (response) {
                setCodeConfirm(false)
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
            <div className={userBtn}>
                <button
                    className={classnames({'registration__button-active': state.role === 'investor'})}
                    name='role'
                    value='investor'
                    onClick={handleOnChange}
                >
                    Инвестор
                </button>
                <button
                    className={classnames({'registration__button-active': state.role === 'borrower'})}
                    name='role'
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
                            className={!state.email && activeElemMail || state.confidentiality_acceptance && !state.email ? 'fullName-input' : null}
                            onChange={handleOnChange}
                            value={state.email}
                            placeholder='exaple@gmail.com'
                            name='email'
                            type="text"
                            autoComplete="off"
                            onClick={() => setActiveElem(true)}
                        />
                        {inputConfirm && !confirm
                            ? <div className="spinner-border text-primary registration__input__spinner" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            : confirm && !codeConfirm
                                ? <span className='codeConfirm'><img className="registration__passwordReady" src={vector222} alt="check" /></span>
                                : <button
                                disabled={!emailRegex.test(state.email) && !confirm}
                                onClick={handleConfirmEmail}
                                className={confirmBtnClass}
                            >
                                Подтвердить
                            </button>
                        }
                    </div>
                </div>
                {
                    confirm && codeConfirm
                        ? <div className='registration__input registration__inputConfirm'>
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
                                    name='email_code'
                                    value={state.email_code}
                                    onChange={handleOnChangeEmailCode}
                                />
                                {state.email_code.length == 4 ? (handleConfirmCode()) : null}
                            </div>
                        </div>
                        : null
                }
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
                            className={!state.password && state.confidentiality_acceptance ? 'fullName-input' : null}
                            onChange={handleOnChange}
                            value={state.password}
                            placeholder='Пароль'
                            name='password'
                            type={passwordImage ? "text" : "password"}
                            onClick={() => {
                                setActiveElem(true)
                                setActiveElemMail(true)
                            }}
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
                        className='registrationLabel'
                        htmlFor="confidentiality_acceptance"
                    >
                        <input
                            type="checkbox"
                            id="confidentiality_acceptance"
                            name="confidentiality_acceptance"
                            checked={state.confidentiality_acceptance}
                            onChange={event => handleOnChange({
                                target: {
                                    name: 'confidentiality_acceptance',
                                    value: event.target.checked
                                }
                            })}
                        />
                        <span className={classnames({
                            'registrationLabelImg': true,
                            'descInputActive': state.confidentiality_acceptance
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
                    disabled={!(emailRegex.test(state.email) && confirm && !codeConfirm && registerPassRegex.test(state.password) && state.confidentiality_acceptance && state.role)}
                    className="registration__buttonContinue"
                    onClick={() => setRegistration(false)}
                >
                    Продолжить
                </button>
            </div>
        </div>
    )
}

export default Registration;