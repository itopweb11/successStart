import React from 'react'
import IssuedBy from "../../../img/svg/IssuedBy";
import SeriesNumber from "../../../img/svg/SeriesNumber";
import DateBirth from "../../../img/svg/dateBirth";
import EyeIcon from "../../../img/svg/EyeIcon";
import Scanner from "../../../img/svg/scanner";

const ProfileDescBankDetails = ({data}) => {
    const bankDetails = data?.bank_details[0];
    console.log(bankDetails)

    const dataFormat = [
        {id: 0, key: 'name', label: 'Наименование банка или БИК', value: bankDetails.name, Icon: IssuedBy},
        {id: 1, key: 'bik', label: 'БИК', value: bankDetails.bik, Icon: IssuedBy},
        {id: 2, key: 'inn', label: 'ИНН банка', value: bankDetails.inn, Icon: IssuedBy},
        {id: 3, key: 'correspondent_account', label: 'Корр. счет', value: bankDetails.correspondent_account, Icon: IssuedBy},
        {id: 4, key: 'checking_account', label: 'Расчетный счет', value: bankDetails.checking_account, Icon: IssuedBy}
    ]

    return(
        <div className='profileProps'>
            <div className='profileProps__bankDetails'>
                <p className='profileProps__title'>Счет</p>
                <div className='profileProps__bankDetails__item'>
                    <IssuedBy />
                    <span>Наименование банка или БИК</span>
                    <span>Заполните поле</span>
                </div>
                <div className='profileProps__bankDetails__item'>
                    <IssuedBy />
                    <span>БИК</span>
                    <span>Заполните поле</span>
                </div>
                <div className='profileProps__bankDetails__item'>
                    <IssuedBy />
                    <span>ИНН банка</span>
                    <span>Заполните поле</span>
                </div>
                <div className='profileProps__bankDetails__item'>
                    <IssuedBy />
                    <span>Корр. счет</span>
                    <span>Заполните поле</span>
                </div>
                <div className='profileProps__bankDetails__item'>
                    <IssuedBy />
                    <span>Расчетный счет</span>
                    <span>Заполните поле</span>
                </div>
            </div>
            <div className='profileProps__info'>
                <img src="https://www.svgrepo.com/show/187899/credit-card-payment.svg" alt="credit card"/>
                <p className='profileProps__info__title profileProps__title'>Реквизиты банковского счета необходимы для вывода денежных средств с вашего счета</p>
            </div>
        </div>
    )
}

export default ProfileDescBankDetails;