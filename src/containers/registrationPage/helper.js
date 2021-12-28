export const people = {
    userType: '',
    mail: '',
    password: '',
    agreement: false,
    confirmationCode: '',
    user: '',
    phone: '',
    phoneCode: '',
    fullName: ''
}

 export const reducer = (state, action) => {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}