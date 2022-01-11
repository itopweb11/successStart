import React from 'react'
import User from "../../../img/svg/user";
import DateBirth from "../../../img/svg/dateBirth";
import Phone from "../../../img/svg/phone";
import FileInn from "../../../img/svg/fileInn";
import Place from "../../../img/svg/place";
import RegistrationAddress from "../../../img/svg/registrationAddress";
import Home from "../../../img/svg/home";
import SeriesNumber from "../../../img/svg/SeriesNumber";
import Scanner from "../../../img/svg/scanner";
import IssuedBy from "../../../img/svg/IssuedBy";
import EyeIcon from "../../../img/svg/EyeIcon";

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
                <div className='profile__personalData__desc'>
                    <SeriesNumber />
                    <span>Серия и номер паспорта</span>
                    <span>1111-111111</span>
                </div>
                <div className='profile__personalData__desc'>
                    <DateBirth />
                    <span>Дата выдачи</span>
                    <span>1111-111111</span>
                </div>
                <div className='profile__personalData__desc'>
                    <IssuedBy />
                    <span>Кем выдан</span>
                    <span>1111-111111</span>
                </div>
                <div className='profile__personalData__desc'>
                    <EyeIcon />
                    <span>Код подразделения</span>
                    <span>1111-111111</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Scanner />
                    <span>Сканы паспорта</span>
                    <span>1111-111111</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileDescProfile