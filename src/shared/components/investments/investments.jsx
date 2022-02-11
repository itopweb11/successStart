import React, {useState} from 'react'
import Accreditation from "../../img/svg/accreditation";
import Collection from "./collection/collection";
import CollectionCompleted from "./collectionCompleted/collectionCompleted";
import {useHistory} from "react-router-dom";

const Investments = ({setActiveItem}) => {
    const history = useHistory();
    const[investments, setInvestments] = useState(true)

    const GoToProfile = () => {
        history.push("/")
        setActiveItem('profile')
    }

    return(
        <div className='investments'>
            <h3>Инвестиции</h3>
            <div className='investments__header'>
                <div className='investments__header__accreditation'>
                    <Accreditation />
                    <p>Для того, чтобы получить доступ к инвестированию, необходимо аккредитовать профиль</p>
                    <button onClick={GoToProfile}>Перейти к профилю</button>
                </div>
                <div className='investments__header__check'>

                    <div className='investments__header__check__buttons'>
                        <button>Пополнить</button>
                        <button>Вывести</button>
                    </div>
                </div>
            </div>
            <div className='investments__content'>
                <p className='investments__content__title'>Инвестиционные предложения</p>
                <span
                    className={investments ? 'itemActive' : ''}
                    onClick={() => setInvestments(true)}
                >
                    Сбор инвестиций
                </span>
                <span
                    className={!investments ? 'itemActive' : ''}
                    onClick={() => setInvestments(false)}
                >
                    Сбор инвестиций завершен
                </span>
                {investments ? <Collection /> : <CollectionCompleted />}
            </div>
        </div>
    )
}

export default Investments