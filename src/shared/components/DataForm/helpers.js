export const init = data => {
    const dataFormat = {};
    const fieldDesc = {};

    data.forEach(item => dataFormat[item.key] = item.value)
    data.forEach(item => fieldDesc[item.key] = item.label)

    return {
        data: {...dataFormat},
        fieldDesc: {...fieldDesc}
    }
}

export const reducer = (state, action) => {
    return {...state}
}
