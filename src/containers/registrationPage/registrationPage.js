import React  from 'react';
import RegistrationPages from '../../scss/container/registrationPage.scss'
import image from '../../shared/img/containersImg/Illustration.png'
import imageBackgroundStart from '../../shared/img/containersImg/background11.png'
import imageBackgroundEnd from '../../shared/img/containersImg/background22.png'
import Registration from "../../shared/components/registration/registration";

const RegistrationPage = () => {
    return(
        <div className='RegistrationPage'>
            <div className='registrationPage__background'>
                <img className='registrationPage__background__imageBackgroundStart' src={imageBackgroundStart} alt="img2"/>
                <img className='registrationPage__background__image' src={image} alt="img1"/>
                <img className='registrationPage__background__imageBackgroundEnd' src={imageBackgroundEnd} alt="img2"/>
            </div>
            <div className='registrationComponent'>
                <Registration />
            </div>
        </div>
    )
}

export default RegistrationPage;