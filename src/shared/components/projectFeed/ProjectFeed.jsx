import ProjectList from "./projectList/projectList";
import ProjectCompleted from "./projectCompleted/projectCompleted";
import {Label} from "reactstrap";

const ProjectFeed = () => {

    return (
        <div className='projectFeed'>
            <div className='projectFeed__addProject'>
                <div>
                    <div>
                        <Label/>
                    </div>
                    <p>Создайте свой инвестиционный проект и привлеките средства для вашего бизнеса.</p>
                </div>
                <button>
                    <span>Добавить проект</span>
                </button>
            </div>
            <div>
                <p>Лента проектов</p>
                <div>
                    <span>Сбор инвестиций</span>
                    <span>Сбор инвестиций завершен</span>
                </div>
            </div>
            <ProjectList />
            <ProjectCompleted />
        </div>
    )
}

export default ProjectFeed;