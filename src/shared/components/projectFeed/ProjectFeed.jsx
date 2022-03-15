import ProjectList from "./projectList/projectList";
import ProjectCompleted from "./projectCompleted/projectCompleted";
import PlusSquare from "../../img/svg/plusSquare";
import Collection from "../investments/collection/collection";
import CollectionCompleted from "../investments/collectionCompleted/collectionCompleted";
import React, {useState} from "react";

const ProjectFeed = () => {
    const[investments, setInvestments] = useState(true)

    return (
        <div className='projectFeed'>
            <div className='projectFeed__addProject'>
                <div className='projectFeed__addProject__desc'>
                    <PlusSquare />
                    <p>Создайте свой инвестиционный проект и привлеките средства для вашего бизнеса.</p>
                </div>
                <button>
                    <span>Добавить проект</span>
                </button>
            </div>
            <div className='investments__content'>
                <p className='investments__content__title'>Лента проектов</p>
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

                </span>
                {investments ? <Collection /> : <CollectionCompleted />}
            </div>
        </div>
    )
}

export default ProjectFeed;