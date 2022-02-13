import ProjectList from "./projectList/projectList";

const ProjectFeed = () => {

    return (
        <div className='projectFeed'>
            <div className='projectFeed__addProject'>
                <div>
                    <div></div>
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
        </div>
    )
}

export default ProjectFeed;