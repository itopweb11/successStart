import React  from 'react';
import registration from '../../../scss/component/registration.scss'
import { Button } from 'reactstrap';

const Registration = () => {
    return(
        <div className='registration'>
            <p className='registration__title'>Регистрация</p>
            <div className='registration__buttons'>
                <Button color="secondary" size="lg">Large Button</Button>
                <Button color="secondary" size="lg">Large Button</Button>
            </div>
            <div className='registration__inputs'>
                <div className='registration__input'>
                    <p>Email</p>
                    <div className='registration__input__button'>
                        <input placeholder='exaple@gmail.com' type="text"/>
                        <Button outline color="secondary">secondary</Button>{' '}
                    </div>
                </div>
                <div className='registration__input'>
                    <p>Пароль</p>
                    <input placeholder='Пароль' type="text"/>
                </div>
                <label htmlFor="agreement">
                    <input type="checkbox" id="agreement" name="agreement"/>
                    <span>
                        <img src="" alt=""/>
                    </span>
                    <span>Я согласен с Политикой обработки персональных данных и даю Согласие на обработку своих персональных данных</span>
                </label>
                <Button color="secondary">secondary</Button>{' '}
            </div>
        </div>
    )
}

export default Registration;