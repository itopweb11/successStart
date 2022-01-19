import React from 'react'

const DocumentsForSignature = () => {
    return (
        <div className='signature'>
            <div className='signature__header'>
                <label htmlFor="#">
                    <tr>
                        <th>Проект</th>
                        <th>Документ</th>
                        <th>Дата документа</th>
                        <th>Срок подписания</th>
                    </tr>
                </label>
            </div>
            <div className='signature__content'>
                <p>Файлы отсутствуют</p>
            </div>
        </div>
    )
}

export default DocumentsForSignature;