import React from 'react';
import axios from "axios";
import {getProfileInclude} from "../../../containers/profilePage/helper";

const DataFormEdit = ({state, setData, setEditFormStatus, dispatch}) => {
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
        address_matches: true,
        ogrnip: "",
        phone_code: '',
        without_patronymic: true
    }


    const handleOnchangePersonalData = () => {
        axios.put("https://api.investonline.su/api/v1/profiles/outer/personal",
            {...personalData},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                }
            }
            )
            .then(function (response) {
                setEditFormStatus(false)
                handleOnchangeData()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleOnchangeData = () => {
        axios.get(`https://api.investonline.su/api/v1/user/profile?include=${getProfileInclude.join(',')}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    accept: 'application/x.incrowd.v1+json',
                }
            },
        )
            .then(response => setData(response.data.profile.data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {
                stateDataKeys.map(fieldKey => {
                    const Icon = state.dataIcon[fieldKey];

                    return (
                        <div key={fieldKey} className="dataFormEdi__Fields dataFormView__desc">
                            <Icon />
                            <span>{state.fieldDesc[fieldKey]}</span>
                            <input
                                className={state.errorFields.includes(fieldKey) ? 'error' : ''}
                                name={fieldKey}
                                value={state.data[fieldKey]}
                                type="text"
                                onChange={handleOnChange}
                            />
                            {fieldKey === 'phone' ? <button className='dataFormEdiButton'>Изменить</button> : null}
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