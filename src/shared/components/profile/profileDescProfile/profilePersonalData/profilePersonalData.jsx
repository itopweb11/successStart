import React from 'react'
import User from "../../../../img/svg/user";
import DateBirth from "../../../../img/svg/dateBirth";
import Phone from "../../../../img/svg/phone";
import FileInn from "../../../../img/svg/fileInn";
import Place from "../../../../img/svg/place";
import Address from "../../../../img/svg/address";
import Home from "../../../../img/svg/home";
import DataForm from "../../../DataForm";


const ProfilePersonalData = ({data, setData}) => {
    const personalData = data?.legal_form?.personal || {};

    const dataFormat = [
        {id: 0, key: 'fio', label: 'ФИО', value: personalData?.fio, Icon: User},
        {id: 1, key: 'birth_date', label: 'Дата рождения', value: personalData?.birth_date, Icon: DateBirth},
        {id: 2, key: 'phone', label: 'Телефон', value: data?.phone, Icon: Phone},
        {id: 3, key: 'inn', label: 'ИНН', value: personalData?.inn, Icon: FileInn},
        {id: 4, key: 'birth_place', label: 'Место рождения', value: personalData?.birth_place, Icon: Place},
        {id: 5, key: 'registration_address', label: 'Адрес регистрации по месту жительства', value: personalData?.registration_address, Icon: Address},
        {id: 6, key: 'residence_address', label: 'Адрес фактического пребывания', value: personalData?.residence_address, Icon: Home},
    ]

    return <DataForm dataForm={dataFormat} setData={setData} formTitle="Персональные данные" />
}

export default ProfilePersonalData