import React, {useState} from 'react'
import SeriesNumber from "../../../../img/svg/SeriesNumber";
import DateBirth from "../../../../img/svg/dateBirth";
import IssuedBy from "../../../../img/svg/IssuedBy";
import EyeIcon from "../../../../img/svg/EyeIcon";
import Scanner from "../../../../img/svg/scanner";
import DataForm from "../../../DataForm";

const ProfilePassportData = ({data}) => {
    const passportFormData = data?.legal_form?.passport || {};

    const dataFormat = [
        {id: 0, key: 'serial_number', label: 'Серия и номер паспорта', value: passportFormData.serial_number, Icon: SeriesNumber},
        {id: 1, key: 'issue_date', label: 'Дата выдачи', value: passportFormData.issue_date, Icon: DateBirth},
        {id: 2, key: 'issued_by', label: 'Кем выдан', value: passportFormData.issued_by, Icon: IssuedBy},
        {id: 3, key: 'department_code', label: 'Код подразделения', value: passportFormData.department_code, Icon: EyeIcon},
        {id: 4, key: 'паспорт', label: 'Сканы паспорта', value: 'паспорт', Icon: Scanner}
    ]

    return <DataForm dataForm={dataFormat} formTitle="Паспортные данные" />
}

export default ProfilePassportData;