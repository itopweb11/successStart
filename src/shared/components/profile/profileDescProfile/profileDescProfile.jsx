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

const ProfileDescProfile = ({data}) => {
    return(
        <div className='profileDescProfile'>
            <div className='profile__personalData'>
                <p className='profileData__title'>Персональные данные</p>
                <div className='profile__personalData__desc'>
                    <User />
                    <span>ФИО</span>
                    <span>{data.legal_form.personal.fio}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <DateBirth />
                    <span>Дата рождения</span>
                    <span>{data.legal_form.personal.birth_date}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Phone />
                    <span>Телефон</span>
                    <span>{data.phone}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <FileInn />
                    <span>ИНН</span>
                    <span>{data.legal_form.personal.inn}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Place />
                    <span>Место рождения</span>
                    <span>{data.legal_form.personal.birth_place}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <RegistrationAddress />
                    <span>Адрес регистрации по месту жительства</span>
                    <span>{data.legal_form.personal.registration_address}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Home />
                    <span>Адрес фактического пребывания</span>
                    <span>{data.legal_form.personal.residence_address}</span>
                </div>
                <div className='profile__personalData__button'>
                    <button>Редоктировать</button>
                </div>
            </div>
            <div className='profile__passportData'>
                <p className='profileData__title'>Паспортные данные</p>
                <div className='profile__personalData__desc'>
                    <SeriesNumber />
                    <span>Серия и номер паспорта</span>
                    <span>{data.legal_form.passport.serial_number}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <DateBirth />
                    <span>Дата выдачи</span>
                    <span>{data.legal_form.passport.issue_date}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <IssuedBy />
                    <span>Кем выдан</span>
                    <span>{data.legal_form.passport.issued_by}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <EyeIcon />
                    <span>Код подразделения</span>
                    <span>{data.legal_form.passport.department_code}</span>
                </div>
                <div className='profile__personalData__desc'>
                    <Scanner />
                    <span>Сканы паспорта</span>
                    <span>паспорт</span>
                </div>
                <div className='profile__personalData__button'>
                    <button>Редоктировать</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDescProfile