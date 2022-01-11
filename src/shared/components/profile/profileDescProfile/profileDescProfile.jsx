import React from 'react'
import User from "../../../img/svg/user";
import DateBirth from "../../../img/svg/dateBirth";
import Phone from "../../../img/svg/phone";
import FileInn from "../../../img/svg/fileInn";
import Place from "../../../img/svg/place";
import RegistrationAddress from "../../../img/svg/registrationAddress";
import Home from "../../../img/svg/home";

const ProfileDescProfile = () => {
    return(
        <div className='profileDescProfile'>
            <div className='profile__personalData'>
                <p className='profileData__title'>Персональные данные</p>
                <div className='profile__personalData__desc'>
                    <User />
                    <span>ФИО</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <DateBirth />
                    <span>Дата рождения</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Phone />
                    <span>Телефон</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <FileInn />
                    <span>ИНН</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Place />
                    <span>Место рождения</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <RegistrationAddress />
                    <span>Адрес регистрации по месту жительства</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Home />
                    <span>Адрес фактического пребывания</span>
                    <span>Иванов Ивааа аАА</span>
                </div>
            </div>
            <div className='profile__passportData'>
                <p className='profileData__title'>Паспортные данные</p>
            </div>
        </div>
    )
}

export default ProfileDescProfile