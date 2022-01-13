import React from 'react';

const DataFormEdit = ({state, setEditFormStatus}) => {

    const DataFormEditFields = () => {
        return Object.keys(state.data).map(fieldKey => {
            const Icon = state.dataIcon[fieldKey];
            return (
                <div className="dataFormEdi__fFields dataFormView__desc">
                    <Icon />
                    <span>{state.fieldDesc[fieldKey]}</span>
                    <input
                        name={fieldKey}
                        value={state.data[fieldKey]}
                        type="text"
                    />
                </div>
            )
        })
    }

    return (
        <div>
            <DataFormEditFields />
            <div className='dataFormView__editButton'>
                <button onClick={() => setEditFormStatus(false)}>сохранить</button>
            </div>
        </div>
    )
}

export default DataFormEdit;