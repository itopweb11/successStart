import React, {useState} from 'react'
import SeriesNumber from "../../../../img/svg/SeriesNumber";
import DateBirth from "../../../../img/svg/dateBirth";
import IssuedBy from "../../../../img/svg/IssuedBy";
import EyeIcon from "../../../../img/svg/EyeIcon";
import Scanner from "../../../../img/svg/scanner";

const ProfilePassportData = ({data, setEditPassport}) => {
    return(
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
                <button onClick={() => setEditPassport(true)}>Редоктировать</button>
            </div>
        </div>
    )
}

export default ProfilePassportData;