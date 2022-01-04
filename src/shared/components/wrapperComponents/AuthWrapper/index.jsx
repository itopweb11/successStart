import React from 'react';
import investImg0 from "../../../img/containersImg/investmently0.png";
import imageBackgroundStart from "../../../img/containersImg/background11.png";
import image from "../../../img/containersImg/Illustration.png";
import imageBackgroundEnd from "../../../img/containersImg/background22.png";
import {Link, useLocation} from "react-router-dom";

const AuthWrapper = ({children}) => {
    const location = useLocation();


    return (
        <div className='RegistrationPage'>
            <div className='registrationPage__background'>
                <img className='registrationPage__background__logo' src={investImg0} alt="invest"/>
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
                        location.pathname === '/register'
                            ?<div className='registrationHeader__switch'>
                                <p>У вас уже есть аккаунт?</p>
                                <Link to="/login">Вход</Link>
                            </div>
                            :<div className='registrationHeader__switch'>
                                <p>Впервые на платформе?</p>
                                <Link to="/register">Зарегистрироватся</Link>
                            </div>
                    }
                </div>
                { children }
            </div>
        </div>
    )
}

export default AuthWrapper;