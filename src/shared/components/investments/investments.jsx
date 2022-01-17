import React from 'react'

const Investments = () => {
    return(
        <div className='Investments'>
            <div className='Investments__header'>
                <div>
                    <img src="" alt="icon"/>
                    <p>Для того, чтобы получить доступ к инвестированию, необходимо аккредитовать профиль</p>
                    <button>Перейти к профилю</button>
                </div>
                <div>
                    <p>90 000 000,00 ₽ Доступно</p>
                    <p>0,00 ₽ В резерве</p>
                    <button>Пополнить</button>
                    <button>Вывести</button>
                </div>
            </div>
            <div className='Investments__content'>
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