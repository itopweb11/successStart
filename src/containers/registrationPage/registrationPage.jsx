import React, {useReducer, useState} from 'react';
import Registration from "../../shared/components/registration/registration";
import RegistrationFormSecond from "../../shared/components/registration/registrationFormSecond/registrationFormSecond";
import {people, reducer} from "./helper";
import AuthWrapper from "../../shared/components/wrapperComponents/AuthWrapper";

const RegistrationPage = () => {
    const [state, dispatch] = useReducer(reducer, people);
    const [registration , setRegistration] = useState(true)

    return(
        <AuthWrapper>
            {
                registration
                    ? <Registration dispatch={dispatch} state={state} setRegistration={setRegistration}/>
                    : <RegistrationFormSecond
                        dispatch={dispatch}
                        state={state}
                    />
            }
        </AuthWrapper>
    )
}

export default RegistrationPage;