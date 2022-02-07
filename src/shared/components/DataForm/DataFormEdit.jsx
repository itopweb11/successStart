import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getProfileInclude} from "../../../containers/profilePage/helper";

const DataFormEdit = ({state, setData, setEditFormStatus, dispatch}) => {
    const handleOnChange = event => {
        dispatch({
            payload: {
                key: event.target.name,
                value: event.target.value
            }
        })
    }

    const stateDataKeys = Object.keys(state.data);
    const[key, setKey] = useState('')

    useEffect(() => {
        switch (Object.keys(state.data)[1]) {
            case 'issue_date': return setKey("https://api.investonline.su/api/v1/profiles/outer/passport");
            case 'birth_date': return setKey("https://api.investonline.su/api/v1/profiles/outer/personal");
            case 'bik': return setKey("https://api.investonline.su/api/v1/bank-detail/101015");
            default: return null
        }

    },[]);

    const personalData = {
        ...state.data,
        address_matches: "",
        ogrnip: "",
        phone_code: "",
        without_patronymic: true
    }

    const handleOnchangePersonalData = () => {
        axios.put(key,
            Object.keys(state.data)[1] === 'birth_date' ? {...personalData} : {...state.data},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    accept: 'application/x.incrowd.v1+json',
                }
            }
        )
            .then(function (response) {
                handleOnchangeData()
                setEditFormStatus(false)
            })
            .catch(function (error) {
                console.log(error);
                console.log(personalData);
            })
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
            .then(function(response ) {
                setData(response.data.profile.data)
            })
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
                            {
                                fieldKey === 'residence_address'
                                ? <div className="preference">
                                        <input type="checkbox" name="cheese" id="cheese"/>
                                        <label htmlFor="cheese">Совпадает с адресом регистрации</label>
                                    </div>
                                    : null
                            }
                        </div>
                    )
                })
            }
            <div className='dataFormView__editButton'>
                <button onClick={handleOnchangePersonalData} disabled={!!state.errorFields.length}>
                    сохранить
                </button>
            </div>
        </div>
    )
}

export default DataFormEdit;