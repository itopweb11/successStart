import React, {useState} from 'react'
import FileSearch from "../../../img/svg/fileSearch";
import Notification from "../../../img/svg/notification";

const CollectionCompleted = () => {
    const[notify, setNotify] = useState(true)
    return(
        <div>
            {notify
            ?<div className='investments__content__collectionCompleted'>
                <div>
                    <FileSearch />
                    <p>Пока на платформе нет доступных проектов</p>
                </div>
                <button onClick={() => setNotify(false)}>Оповестить, когда проекты появятся</button>
            </div>
            :<div className='investments__content__collectionCompleted'>
                <div>
                    <Notification />
                    <p>Email-уведомления о новых проектах включены. Мы пришлем информацию, когда проекты появятся</p>
                </div>
                <button  onClick={() => setNotify(true)}>Выключить уведомления</button>
            </div>
            }
        </div>
    )
}

export default CollectionCompleted;