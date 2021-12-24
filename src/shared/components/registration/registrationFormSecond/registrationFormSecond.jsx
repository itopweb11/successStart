import React, {useReducer} from 'react';
import Phone from "../../../img/svg/phone";
import User from "../../../img/svg/user";
import LockIcon from "../../../img/svg/LockIcon";
import classnames from "classnames";
import vector from "../../../img/components/registration/Vector.png";
import {people, reducer} from "../../../../containers/registrationPage/helper";

const RegistrationFormSecond = () => {
    const [state, dispatch] = useReducer(reducer, people);

    const handleOnChange = e => {
        dispatch({
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        })
    }

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
                    <input
                        type="tel"
                        placeholder='+7 (999) 969 34-02'
                    />
                    <button className='registration__buttonConfirm'>Подтвердить</button>
                </div>
            </div>
            {/*<div className='registrationForm__input registration__input'>
                <p>Код подтверждения</p>
                <div>
                    <LockIcon />
                    <input
                        type="number"
                        placeholder='Код подтверждения'
                    />
                </div>
            </div>*/}
            <div className='registrationForm__input registration__input'>
                <p>ФИО</p>
                <div>
                    <User />
                    <input
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