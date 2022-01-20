import React from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";

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

    const personalData = {
        ...state.data,
        address_matches: false,
        ogrnip: "",
        phone_code: "",
        without_patronymic: false
    }

    const handleOnchangePersonalData = () => {
        axios.put("https://api.investonline.su/api/v1/profiles/outer/personal", personalData)
            .then(function (response) {
                setEditFormStatus(false)
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    onClick={handleOnchangePersonalData}
                    disabled={!!state.errorFields.length}
                >
                    сохранить
                </button>
            </div>
        </div>
    )
}

export default DataFormEdit;