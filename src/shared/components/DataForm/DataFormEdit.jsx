import React from 'react';

const DataFormEdit = ({state, setEditFormStatus, dispatch}) => {
    const stateDataKeys = Object.keys(state.data);

    const handleOnChange = event => {
        dispatch({
            payload: {
                key: event.target.name,
                value: event.target.value
            }
        })
    }

    return (
        <div>
            {
                stateDataKeys.map(fieldKey => {
                    const Icon = state.dataIcon[fieldKey];

                    return (
                        <div key={fieldKey} className="dataFormEdi__fFields dataFormView__desc">
                            <Icon />
                            <span>{state.fieldDesc[fieldKey]}</span>
                            <input
                                className={state.errorFields.includes(fieldKey) ? 'error' : ''}
                                name={fieldKey}
                                value={state.data[fieldKey]}
                                type="text"
                                onChange={handleOnChange}
                            />
                        </div>
                    )
                })
            }
            <div className='dataFormView__editButton'>
                <button
                    onClick={() => setEditFormStatus(false)}
                    disabled={!!state.errorFields.length}
                >
                    сохранить
                </button>
            </div>
        </div>
    )
}

export default DataFormEdit;