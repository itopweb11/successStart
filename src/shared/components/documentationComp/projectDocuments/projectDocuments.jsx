import React from 'react'

const ProjectDocuments = () => {
    return (
        <div className='signature projectDocuments'>
            <div className='signature__header'>
                <label htmlFor="#">
                    <tr>
                        <th>Проект</th>
                        <th>Документ</th>
                        <th>Дата документа</th>
                        <th>Дата подписания/акцепта</th>
                    </tr>
                </label>
            </div>
            <div className='projectDocuments__content'>
                <p>Файлы отсутствуют</p>
            </div>
        </div>
    )
}

export default ProjectDocuments;