import React from 'react';

const DataFormView = ({data, setEditFormStatus}) => {
    if(!data || !data.length) return null

    const DataFormViewList = () => {
        return data.map(item => {
            const {id, label, value, Icon} = item;

            return (
                <div key={id} className='dataFormView__desc'>
                    <Icon />
                    <span>{label}</span>
                    <span>{value}</span>
                </div>
            )
        })
    }

    return (
        <div className="dataFormView">
            <DataFormViewList />
            <div className='dataFormView__editButton'>
                <button onClick={() => setEditFormStatus(true)}>Редактировать</button>
            </div>
        </div>
    )
}

export default DataFormView;