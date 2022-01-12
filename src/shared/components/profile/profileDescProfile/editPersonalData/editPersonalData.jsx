import React from 'react'

const EditPersonalData = ({setEditPersonal}) => {
    return(
        <div className='editPersonalData editPersonalPassportData'>
            <p className='profileData__title'>Персональные данные</p>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button onClick={() => setEditPersonal(false)}>click</button>
        </div>
    )
}

export default EditPersonalData