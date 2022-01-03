import React, {useState} from 'react';
import Phone from "../../../img/svg/phone";
import User from "../../../img/svg/user";
import LockIcon from "../../../img/svg/LockIcon";
import classnames from "classnames";
import vector from "../../../img/components/registration/Vector.png";
import InputMask from "react-input-mask";
import axios from "axios";
import vector222 from "../../../img/components/registration/Vector222.png";
import {phoneRegex} from "../../../../utils/regex";
import {NavLink} from "react-router-dom";

const RegistrationFormSecond = ({dispatch, state}) => {
    const [phone, setPhone] = useState(false);
    const [activeElem , setActiveElem] = useState(false)
    const [inputConfirm , setInputConfirm] = useState(false)
    const [phoneCode, setPhoneCode] = useState(true);
    const confirmBtnClass = classnames({
        'registration__buttonConfirm': true,
        'registration__buttonConfirmActive': state.phone.match(phoneRegex) && !phone
    })
    const userBtn = classnames({
        'registration__buttons registrationForm__buttons': true,
        'registration__button-noActive': activeElem && !state.legal_form_type
    })

    const wordCount = (string) => {
        const str = string.match(/[^\s]+/g)
        return str ? str.length : 0;
    }
    const strLength = wordCount(state.fio)
    const wordCountLength = state.without_patronymic ? 2 : 3

    const handleOnChange = e => {
        dispatch({
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleOnChangeFullName = ev => {
         dispatch({
            payload: {
                key: ev.target.name,
                value: ev.target.value
            }
        })
    }

    const handleOnChangePhoneCode = event => {
        if (event.target.value.length <= 4) {
            dispatch({
                payload: {
                    key: event.target.name,
                    value: event.target.value
                }
            })
        }
    }

    const handleConfirmPhone = () => {
        setInputConfirm(true)
        axios.post("https://api.investonline.su/api/v1/confirmations/send/phone", {
            phone: state.phone,
            type: "register_request"
        })
            .then(function (response) {
                setPhone(true)
                console.log(response.data.data.code)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleConfirmPhoneCode = () => {
        axios.post("https://api.investonline.su/api/v1/confirmations/check/phone", {
            phone: state.phone,
            code: state.phone_code,
            type: "register_request"
        })
            .then(function (response) {
                setPhoneCode(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const ob = () => {
        axios.post("https://api.investonline.su/api/v1/register/with-profile",
            state
            )
            .then(function (response) {
                console.log(1)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className='registrationForm'>
            <p className='registration__title'>Регистрация</p>
            <div className={userBtn}>
                <button
                    className={classnames({'registration__button-active': state.legal_form_type === 'indiv'})}
                    name='legal_form_type'
                    value='indiv'
                    onClick={handleOnChange}
                >
                    физ.лицо
                </button>
                <button
                    className={classnames({'registration__button-active': state.legal_form_type === 'entity'})}
                    name='legal_form_type'
                    value='entity'
                    onClick={handleOnChange}
                >
                    юр.лицо
                </button>
                <button
                    className={classnames({'registration__button-active': state.legal_form_type === 'ie'})}
                    name='legal_form_type'
                    value='ie'
                    onClick={handleOnChange}
                >
                    ип
                </button>
            </div>
            <div className='registrationForm__input registration__input'>
               <p>Телефон</p>
                <div>
                    <Phone />
                    <InputMask
                        className={!state.phone && activeElem ? 'fullName-input' : null}
                        mask="+7(999)999-99-99"
                        name='phone'
                        onChange={handleOnChange}
                        placeholder='+7(999)969 34-02'
                        onClick={()=> setActiveElem(true)}
                    />
                    {
                        inputConfirm && !phone
                        ? <div className="spinner-border text-primary registration__input__spinner registrationFormSpinner" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            : phone && !phoneCode
                            ? <span className='codeConfirm'>
                                    <img className="registration__passwordReady" src={vector222} alt="check" />
                            </span>
                        : <button
                        onClick={handleConfirmPhone}
                        disabled={!state.phone && !phone}
                        className={confirmBtnClass}
                        >
                        Подтвердить
                        </button>
                    }
                </div>
            </div>
            {
                phone && phoneCode
                    ? <div className='registrationForm__input registration__input registration__inputConfirm'>
                        <p>Код подтверждения</p>
                        <div>
                        <LockIcon />
                        <input
                            type="number"
                            name='phone_code'
                            value={state.phone_code}
                            placeholder='Код подтверждения'
                            onChange={handleOnChangePhoneCode}
                        />
                            {state.phone_code.length === 4 ? (handleConfirmPhoneCode()) : null}
                        </div>
                    </div>
                    :null
            }
            <div className='registrationForm__input registration__input'>
                <p>ФИО</p>
                <div>
                    <User />
                    <input
                        className={strLength > 4 || !state.fio && activeElem && state.without_patronymic ? 'fullName-input' : null}
                        name="fio"
                        value={state.fio}
                        onChange={handleOnChangeFullName}
                        type="text"
                        placeholder='Иванов Иван Иванович'
                        onClick={()=> setActiveElem(true)}
                        autoComplete="off"
                    />
                    {
                        strLength > 4
                        ? <p className='fullName-input__desc'>максимум 4 слова</p>
                            : null
                    }
                </div>
            </div>
            <div className='registrationFormLabel'>
                <label
                    className='registrationLabel'
                    htmlFor="without_patronymic"
                    onClick={()=> setActiveElem(true)}
                >
                    <span className='registrationFormLabel__desc'>Нет отчества</span>
                    <input
                        type="checkbox"
                        id="without_patronymic"
                        name="without_patronymic"
                        checked={state.without_patronymic}
                        onChange={event => handleOnChange({
                            target: {
                                name: 'without_patronymic',
                                value: event.target.checked
                            }
                        })}
                    />
                    <span className={classnames({
                        'registrationLabelImg': true,
                        'descInputActive': state.without_patronymic
                    })}>
                            <img src={vector} alt="vector"/>
                        </span>
                </label>
            </div>
            <NavLink to="/profilePage">
                <button
                    disabled={!(phoneRegex.test(state.phone) && state.legal_form_type && state.phone_code && strLength >= wordCountLength)}
                    className='registration__buttonContinue'
                    onClick={ob}
                >
                    Создать аккаунт
                </button>
            </NavLink>
        </div>
        )
}

export default RegistrationFormSecond;