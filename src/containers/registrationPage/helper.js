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