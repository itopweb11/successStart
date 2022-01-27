export const init = data => {
    const dataFormat = {};
    const fieldDesc = {};
    const dataIcon = {};

    data.forEach(item => dataFormat[item.key] = item.value)
    data.forEach(item => fieldDesc[item.key] = item.label)
    data.forEach(item => dataIcon[item.key] = item.Icon)

    return {
        data: {...dataFormat},
        fieldDesc: {...fieldDesc},
        dataIcon: {...dataIcon},
        errorFields: []
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        default:
            const newErrorFields = [...state.errorFields];
            const removeElemIdx = newErrorFields.indexOf(action.payload.key);

            if(!action.payload.value.length) {
               newErrorFields.push(action.payload.key)
            } else if(removeElemIdx !== -1) {
                newErrorFields.splice(removeElemIdx, 1)
            }

            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.key]: action.payload.value
                },
                errorFields: newErrorFields
            }
    }
}
