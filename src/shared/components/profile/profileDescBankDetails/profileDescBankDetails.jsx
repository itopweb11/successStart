import React from 'react'
import IssuedBy from "../../../img/svg/IssuedBy";
import DataForm from "../../DataForm";

const ProfileDescBankDetails = ({data}) => {
    const bankDetails = data?.bank_details[0];

    const dataFormat = [
        {id: 0, key: 'name', label: 'Наименование банка или БИК', value: bankDetails.name ? bankDetails.name : 'Заполните поле' , Icon: IssuedBy},
        {id: 1, key: 'bik', label: 'БИК', value: bankDetails.bik ? bankDetails.bik : 'Заполните поле', Icon: IssuedBy},
        {id: 2, key: 'inn', label: 'ИНН банка', value: bankDetails.inn ? bankDetails.inn : 'Заполните поле', Icon: IssuedBy},
        {id: 3, key: 'correspondent_account', label: 'Корр. счет', value: bankDetails.correspondent_account ? bankDetails.correspondent_account : 'Заполните поле', Icon: IssuedBy},
        {id: 4, key: 'checking_account', label: 'Расчетный счет', value: bankDetails.checking_account ? bankDetails.checking_account : 'Заполните поле', Icon: IssuedBy}
    ]

    return(
        <div className='profileDescProfile'>
            <DataForm dataForm={dataFormat} formTitle="Счет" />
            <div className='profileDescBankDetails__info'>
                <img src="https://www.svgrepo.com/show/187899/credit-card-payment.svg" alt="credit card"/>
                <p className='profileDescBankDetails__info__title profileDescBankDetails__title'>Реквизиты банковского счета необходимы для вывода денежных средств с вашего счета</p>
            </div>
        </div>
    )
}

export default ProfileDescBankDetails;