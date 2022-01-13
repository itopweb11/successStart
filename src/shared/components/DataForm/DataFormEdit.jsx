import React from 'react';

const DataFormEdit = ({data, state}) => {
    console.log(state)
    const formEditValue = Object.values(state.data)
    const DataFormEditFields = () => {

        return formEditValue.map(item => (
            <div className="dataFormEdi__fFields">
                <label>{}</label>
                <input value={item} type="text"/>
            </div>
        ))
    }




    return (
        <div>
            <DataFormEditFields />
        </div>
    )
}

export default DataFormEdit;