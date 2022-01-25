import React, {useState} from 'react'
import FileSearch from "../../../img/svg/fileSearch";

const CollectionCompleted = () => {
    const[b, setB] = useState(true)
    return(
        <div>
            {b
            ?<div className='investments__content__collectionCompleted'>
                <div>
                    <FileSearch />
                    <p>Пока на платформе нет доступных проектов</p>
                </div>
                <button onClick={() => setB(false)}>Оповестить, когда проекты появятся</button>
            </div>
            :<div className='investments__content__collectionCompleted'>
                <div>
                    <FileSearch />
                    <p>Email-уведомления о новых проектах включены. Мы пришлем информацию, когда проекты появятся</p>
                </div>
                <button  onClick={() => setB(true)}>Выключить уведомления</button>
            </div>
            }
        </div>
    )
}

export default CollectionCompleted;