import React from 'react'
import IssuedBy from "../../../img/svg/IssuedBy";

const ProfileDescBankDetails = () => {
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