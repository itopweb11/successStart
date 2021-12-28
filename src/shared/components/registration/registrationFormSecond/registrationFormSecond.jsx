import React, {useReducer, useState} from 'react';
import Phone from "../../../img/svg/phone";
import User from "../../../img/svg/user";
import LockIcon from "../../../img/svg/LockIcon";
import classnames from "classnames";
import vector from "../../../img/components/registration/Vector.png";
import {people, reducer} from "../../../../containers/registrationPage/helper";
import InputMask from "react-input-mask";
import axios from "axios";
import vector222 from "../../../img/components/registration/Vector222.png";
import {emailRegex, phoneRegex} from "../../../../utils/regex";

const RegistrationFormSecond = () => {
    const [state, dispatch] = useReducer(reducer, people);
    const [phone, setPhone] = useState(false);
    const [nameRegex, setNameRegex] = useState(false);
    const [inputConfirm , setInputConfirm] = useState(false)
    const [phoneCode, setPhoneCode] = useState(true);
    const confirmBtnClass = classnames({
        'registration__buttonConfirm': true,
        'registration__buttonConfirmActive': state.phone.match(phoneRegex) && !phone
    })
    const fullNameRegex = /^[А-Яа-яЁё]*\ [А-Яа-яЁё]*\ [А-Яа-яЁё]*$/

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
            code: state.phoneCode,
            type: "register_request"
        })
            .then(function (response) {
                setPhoneCode(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(state.fullName)
    return(
        <div className='registrationForm'>
            <p className='registration__title'>Регистрация</p>
            <div className='registration__buttons registrationForm__buttons'>
                <button
                    className={classnames({'registration__button-active': state.user === 'physicalPerson'})}
                    name='user'
                    value='physicalPerson'
                    onClick={handleOnChange}
                >
                    физ.лицо
                </button>
                <button
                    className={classnames({'registration__button-active': state.user === 'lawyer'})}
                    name='user'
                    value='lawyer'
                    onClick={handleOnChange}
                >
                    юр.лицо
                </button>
                <button
                    className={classnames({'registration__button-active': state.user === 'individualEntrepreneur'})}
                    name='user'
                    value='individualEntrepreneur'
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
                        mask="+7(999)999-99-99"
                        name='phone'
                        onChange={handleOnChange}
                        placeholder='+7(999)969 34-02'
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
                        disabled={phone}
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
                            name='phoneCode'
                            value={state.phoneCode}
                            placeholder='Код подтверждения'
                            onChange={handleOnChangePhoneCode}
                        />
                            {state.phoneCode.length == 4 ? (handleConfirmPhoneCode()) : null}
                        </div>
                    </div>
                    :null
            }
            <div className='registrationForm__input registration__input'>
                <p>ФИО</p>
                <div>
                    <User />
                    <input
                        className={nameRegex ? 'registrationForm__inputActive' : null}
                        name="fullName"
                        value={state.fullName}
                        onChange={handleOnChangeFullName}
                        type="text"
                        placeholder='Иванов Иван Иванович'
                    />
                </div>
            </div>
            <div className='registrationFormLabel'>
                <label
                    className='registrationLabel'
                    htmlFor="agreement"
                >
                    <span className='registrationFormLabel__desc'>Нет отчества</span>
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                    />
                    <span className='registrationFormLabel__input registrationLabelImg'>
                            <img src={vector} alt="vector"/>
                    </span>
                </label>
            </div>
            <button className='registration__buttonContinue'>Создать аккаунт</button>
        </div>
        )
}

export default RegistrationFormSecond;