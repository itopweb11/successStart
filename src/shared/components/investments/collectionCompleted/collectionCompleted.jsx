import React from 'react'
import FileSearch from "../../../img/svg/fileSearch";

const CollectionCompleted = () => {
    return(
        <div className='investments__content__collectionCompleted'>
            <div>
                <FileSearch />
                <p>Пока на платформе нет доступных проектов</p>
            </div>
            <button>Оповестить, когда проекты появятся</button>
        </div>
    )
}

export default CollectionCompleted;