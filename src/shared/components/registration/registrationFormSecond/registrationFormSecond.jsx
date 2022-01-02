import React, {useState} from 'react';
import Phone from "../../../img/svg/phone";
import User from "../../../img/svg/user";
import LockIcon from "../../../img/svg/LockIcon";
import classnames from "classnames";
import vector from "../../../img/components/registration/Vector.png";
import InputMask from "react-input-mask";
import axios from "axios";
import vector222 from "../../../img/components/registration/Vector222.png";
import {emailRegex, phoneRegex, registerPassRegex} from "../../../../utils/regex";
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
        'registration__button-noActive': activeElem && !state.user
    })

    const wordCount = (string) => {
        const str = string.match(/[^\s]+/g)
        return str ? str.length : 0;
    }
    const strLength = wordCount(state.fullName)
    const wordCountLength = state.noMiddleName ? 2 : 3

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

    return(
        <div className='registrationForm'>
            <p className='registration__title'>Регистрация</p>
            <div className={userBtn}>
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
                        className={strLength > 4 || !state.fullName && activeElem && state.noMiddleName ? 'fullName-input' : null}
                        name="fullName"
                        value={state.fullName}
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
                    htmlFor="noMiddleName"
                    onClick={()=> setActiveElem(true)}
                >
                    <span className='registrationFormLabel__desc'>Нет отчества</span>
                    <input
                        type="checkbox"
                        id="noMiddleName"
                        name="noMiddleName"
                        checked={state.noMiddleName}
                        onChange={event => handleOnChange({
                            target: {
                                name: 'noMiddleName',
                                value: event.target.checked
                            }
                        })}
                    />
                    <span className={classnames({
                        'registrationLabelImg': true,
                        'descInputActive': state.noMiddleName
                    })}>
                            <img src={vector} alt="vector"/>
                        </span>
                </label>
            </div>
            <NavLink to="/profilePage">
                <button
                    disabled={!(phoneRegex.test(state.phone) && state.user && state.phoneCode && strLength >= wordCountLength)}
                    className='registration__buttonContinue'
                >
                    Создать аккаунт
                </button>
            </NavLink>
        </div>
        )
}

export default RegistrationFormSecond;