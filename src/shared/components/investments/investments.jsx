import React from 'react'
import Accreditation from "../../img/svg/accreditation";

const Investments = () => {
    return(
        <div className='investments'>
            <div className='investments__header'>
                <div className='investments__header__accreditation'>
                    <Accreditation />
                    <p>Для того, чтобы получить доступ к инвестированию, необходимо аккредитовать профиль</p>
                    <button>Перейти к профилю</button>
                </div>
                <div className='investments__header__check'>
                    <div className='investments__header__check__desc'>
                        <p>90 000 000,00 ₽ <span>Доступно</span></p>
                        <p>0,00 ₽ <span>В резерве</span></p>
                    </div>
                    <div className='investments__header__check__buttons'>
                        <button>Пополнить</button>
                        <button>Вывести</button>
                    </div>
                </div>
            </div>
            <div className='investments__content'>
                <p>Инвестиционные предложения</p>
                <button>Сбор инвестиций</button>
                <button>Сбор инвестиций завершен</button>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src="" alt="icon"/>
                    <p>Пока на платформе нет доступных проектов</p>
                    <button>Оповестить, когда проекты появятся</button>
                </div>
            </div>
        </div>
    )
}

export default Investments