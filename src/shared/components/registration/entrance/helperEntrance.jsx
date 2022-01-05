export const people = {
    email: '',
    password: ''
}

export const reducer = (state, action) => {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}