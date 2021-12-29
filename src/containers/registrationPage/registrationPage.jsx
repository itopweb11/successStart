import React, {useState} from 'react';
import image from '../../shared/img/containersImg/Illustration.png'
import imageBackgroundStart from '../../shared/img/containersImg/background11.png'
import imageBackgroundEnd from '../../shared/img/containersImg/background22.png'
import Registration from "../../shared/components/registration/registration";
import RegistrationFormSecond from "../../shared/components/registration/registrationFormSecond/registrationFormSecond";
import Entrance from "../../shared/components/registration/entrance/entrance";

const RegistrationPage = () => {
    const [registration , setRegistration] = useState(true)
    const [entrance , setEntrance] = useState(true)

    return(
        <div className='RegistrationPage'>
            <div className='registrationPage__background'>
                <img className='registrationPage__background__imageBackgroundStart' src={imageBackgroundStart} alt="img2"/>
                <img className='registrationPage__background__image' src={image} alt="img1"/>
                <img className='registrationPage__background__imageBackgroundEnd' src={imageBackgroundEnd} alt="img2"/>
            </div>
            <div className='registrationComponent'>
                <div className='registrationHeader'>
                    <div className='registrationHeader__items'>
                        <a href="#">Привлечь инвестиции</a>
                        <a href="#">FAQ</a>
                        <a href="#">Новости</a>
                        <a href="#">Контакты</a>
                    </div>
                    {
                        entrance
                        ?<div className='registrationHeader__switch'>
                                <p>У вас уже есть аккаунт?</p>
                                <a onClick={() => setEntrance(false)} href="#">Вход</a>
                            </div>
                            :<div className='registrationHeader__switch'>
                                <p>Впервые на платформе?</p>
                                <a onClick={() => setEntrance(true)} href="#">Зарегистрироватся</a>
                            </div>
                    }
                </div>
                {
                    entrance
                    ? registration
                        ? <Registration setRegistration={setRegistration}/>
                        : <RegistrationFormSecond />
                        : <Entrance />
                }

            </div>
        </div>
    )
}

export default RegistrationPage;