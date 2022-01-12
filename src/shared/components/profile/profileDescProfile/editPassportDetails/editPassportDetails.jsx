import React from 'react'

const EditPassportDetails = ({setEditPassport}) => {
    return(
        <div className='editPassportDetails editPersonalPassportData'>
            <p className='profileData__title'>Паспортные данные</p>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button onClick={() => setEditPassport(false)}>click</button>
        </div>
    )
}

export default EditPassportDetails