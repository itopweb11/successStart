import React from 'react';

const DataFormEdit = ({state, setEditFormStatus}) => {

    const DataFormEditFields = () => {
        return Object.keys(state.data).map(fieldKey => {

            return (
                <div className="dataFormEdi__fFields">
                    <label>{state.fieldDesc[fieldKey]}</label>
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
            <button onClick={() => setEditFormStatus(false)}>сохранить</button>
        </div>
    )
}

export default DataFormEdit;