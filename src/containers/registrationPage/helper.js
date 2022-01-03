/*export const people = {
    role userType: '',
    email mail: '',
    password password: '',
    confidentiality_acceptance agreement: false,
    without_patronymic noMiddleName: false,
    email_code confirmationCode: '',
    legal_form_type user: '',
    phone phone: '',
    phone_code phoneCode: '',
    fio fullName: ''
}*/

export const people = {
    role: '',
    email: '',
    password: '',
    confidentiality_acceptance: false,
    without_patronymic: false,
    email_code: '',
    legal_form_type: '',
    phone: '',
    phone_code: '',
    fio: ''
}

 export const reducer = (state, action) => {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}