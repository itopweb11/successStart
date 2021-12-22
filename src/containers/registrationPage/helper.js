export const people = {
    userType: '',
    mail: '',
    password: '',
    agreement: false
}

export const reducer = (state, action) => {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}