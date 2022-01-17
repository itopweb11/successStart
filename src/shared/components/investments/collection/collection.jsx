import React from 'react'

const Collection = () => {
    return(
        <div className='investments__content__collection'>
            <div className='investments__content__collection__item'>
                <div>
                    <p>Наименование проекта 21</p>
                    <p>№101010</p>
                </div>
                <div>
                    <p>Ставка <span>12 % </span>годовых</p>
                    <p>Срок займа <span>15 мес.</span></p>
                    <p>Рейтинг проекта <span>B</span></p>
                </div>
                <div>
                    <p>Зарезервировано <span>44117 ₽</span> из <span>150000 ₽</span></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>Мин. сумма сбора: <span>10000 ₽</span></p>
                    <p>Сбор до: <span>29 января 22:0</span></p>
                    <button>Инвестировать</button>
                </div>
            </div>
        </div>
    )
}

export default Collection;