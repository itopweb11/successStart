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
        dataIcon: {...dataIcon}
    }
}

export const reducer = (state, action) => {
    return {...state}
}
