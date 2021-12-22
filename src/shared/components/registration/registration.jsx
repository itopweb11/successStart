import React, {useEffect, useReducer, useState} from 'react';
import registration from '../../../scss/component/registration.scss'
import axios from "axios";
import { Button } from 'reactstrap';
import vector from "../../../shared/img/components/registration/Vector.png";
import vector222 from "../../../shared/img/components/registration/Vector222.png";
import {people, reducer} from "../../../containers/registrationPage/helper";

const Registration = () => {
    const [confirm , setConfirm] = useState(false)
    const [inputConfirm , setInputConfirm] = useState(false)
    const [passwordImage , setPasswordImage] = useState(false)
    const [state, dispatch] = useReducer(reducer, people);
    const confirmEmailBtn = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(state.mail)
        ? 'registration__buttonConfirmActive registration__buttonConfirm'
        : 'registration__buttonConfirm';
    const buttonContinueDisabled = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(state.mail) && !/(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/.test(state.password) && !state.agreement && !state.userType
    const  buttonContinueClassName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(state.mail) && /(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/.test(state.password) && state.agreement && state.userType
        ? 'registration__buttonContinueActive registration__buttonContinue'
        : 'registration__buttonContinue'

    const handleOnChange = elem => {
        dispatch({
            payload: {
                key: elem.target.name,
                value: elem.target.value
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

    const iconPassword = passwordImage
        ? <svg
            className={/(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/.test(state.password)
                ? 'registration__passwordDesignActive'
                : 'registration__passwordDesign'
            }
            onClick={() => passwordImage ? setPasswordImage(false) : setPasswordImage(true)}

            viewBox="64 64 896 896"
            focusable="false" data-icon="eye"
            width="1em" height="1em"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
            </path>
    </svg>
        : <svg
        className={/(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/.test(state.password)
            ? 'registration__passwordDesignActive'
            : 'registration__passwordDesign'
        }
        onClick={() => passwordImage ? setPasswordImage(false) : setPasswordImage(true)}

        viewBox="64 64 896 896"
        focusable="false" data-icon="eye-invisible"
        width="1em" height="1em" fill="currentColor"
        aria-hidden="true"
    >
        <path
            d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
        >
        </path>
        <path
            d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
        </path>
    </svg>

    return(
        <div className='registration'>
            <p className='registration__title'>Регистрация</p>
            <div className='registration__buttons'>
                <button
                    className={state.userType === 'investor' ? 'registration__button-active' : ''}
                    name = 'userType'
                    onClick={() => handleOnChange({
                        target: {
                            name: 'userType',
                            value:'investor'
                        }
                    })}
                >
                    Инвестор
                </button>
                <button
                    className={state.userType === 'borrower' ? 'registration__button-active' : ''}
                    name = 'userType'
                    onClick={() => handleOnChange({
                        target: {
                            name: 'userType',
                            value:'borrower'
                        }
                    })}
                >
                    Заемщик
                </button>
            </div>
            <div className='registration__inputs'>
                <div className='registration__input'>
                    <p><span className='inputDEsc'>*</span>Email</p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-mail ">
                                <g>
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </g>
                            </svg>
                        </div>
                        <input
                            onChange={event => handleOnChange(event)}
                            value={state.mail}
                            placeholder='exaple@gmail.com'
                            name='mail'
                            type="text"
                        />
                        {inputConfirm && !confirm
                            ? <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            : <button
                                disabled={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(state.mail)}
                                onClick={handleConfirmEmail}
                                className={confirmEmailBtn}
                            >
                                Подтвердить
                            </button>
                        }
                    </div>
                </div>
                <div className={confirm ? 'registration__input' : 'registration__inputNone'}>
                    <p><span className='inputDEsc'>*</span>Код подтверждения</p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock ">
                                <g>
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </g>
                            </svg>
                        </div>
                        <input
                            placeholder='Код подтверждения'
                            type="text"
                        />
                    </div>
                </div>
                <div className='registration__input'>
                    <p><span className='inputDEsc'>*</span>Пароль</p>
                    <div className='registration__input__button'>
                        <div className='registration__input__image'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock ">
                                <g>
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </g>
                            </svg>
                        </div>
                        <input
                            onChange={event => handleOnChange(event)}
                            value={state.password}
                            placeholder='Пароль'
                            name='password'
                            type={passwordImage ? "text" : "password"}
                        />
                        {iconPassword}
                        <img className={/(?=.*[a-z])[a-zA-Z0-9]{8,}(?=.*[A-Z])(?=.*\d)/.test(state.password)
                            ? 'registration__passwordReady'
                            : 'registration__passwordReadyNone'
                        }
                             src={vector222}
                             alt="icon"
                        />
                    </div>
                </div>
                <div className='registerBlockInfo__listConditions'>
                    <div className='registerBlockInfo__listConditionsFirst-child'>
                        <div>
                            <div className={/(?=.*[a-z])/.test(state.password) ? 'point-active' : 'point'}></div>
                            <p className={/(?=.*[a-z])/.test(state.password) ? 'pointText-active' : 'pointText'}>одна прописная буква</p>
                        </div>
                        <div className='registerBlockInfo__listConditions-item'>
                            <div className={/[a-zA-Z0-9]{8,}/.test(state.password) ? 'point-active' : 'point'}></div>
                            <p className={/[a-zA-Z0-9]{8,}/.test(state.password) ? 'pointText-active' : 'pointText'}>не менее 8 символов</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={/(?=.*[A-Z])/.test(state.password) ? 'point-active' : 'point'}></div>
                            <p className={/(?=.*[A-Z])/.test(state.password) ? 'pointText-active' : 'pointText'}>одна строчная буква</p>
                        </div>
                        <div className='registerBlockInfo__listConditions-item'>
                            <div className={/(?=.*\d)/.test(state.password) ? 'point-active' : 'point'}></div>
                            <p className={/(?=.*\d)/.test(state.password) ? 'pointText-active' : 'pointText'}>одна цифра</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className='registration__listConditions__button__desc'
                        htmlFor="agreement">
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
                        <span className={state.agreement ? 'registration__listConditions__button__desc__input descInputActive' : 'registration__listConditions__button__desc__input'}>
                            <img src={vector} alt="vector"/>
                        </span>
                        <span>
                            Я согласен с <span className='registration__listConditions__button__desc__activeText'>Политикой обработки персональных данных</span> и даю <br/>
                            <span className='registration__listConditions__button__desc__activeText'>Согласие на обработку своих персональных данных</span>
                        </span>
                    </label>
                </div>
                <button
                    disabled={buttonContinueDisabled}
                    className={buttonContinueClassName}>Продолжить</button>{' '}
            </div>
        </div>
    )
}

export default Registration;