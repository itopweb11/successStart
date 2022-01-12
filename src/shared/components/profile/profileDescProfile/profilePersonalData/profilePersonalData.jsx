import React from 'react'
import User from "../../../../img/svg/user";
import DateBirth from "../../../../img/svg/dateBirth";
import Phone from "../../../../img/svg/phone";
import FileInn from "../../../../img/svg/fileInn";
import Place from "../../../../img/svg/place";
import RegistrationAddress from "../../../../img/svg/registrationAddress";
import Home from "../../../../img/svg/home";


const ProfilePersonalData = ({data, setEditPersonal}) => {
    return(
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
                <button onClick={() => setEditPersonal(true)}>Редоктировать</button>
            </div>
        </div>
    )
}

export default ProfilePersonalData