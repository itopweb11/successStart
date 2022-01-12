import React, {useState} from 'react'
import ProfilePersonalData from "./profilePersonalData/profilePersonalData";
import ProfilePassportData from "./profilePassportData/profilePassportData";
import EditPersonalData from "./editPersonalData/editPersonalData";
import EditPassportDetails from "./editPassportDetails/editPassportDetails";

const ProfileDescProfile = ({data}) => {
    const[editPersonal, setEditPersonal] = useState(false)
    const[editPassport, setEditPassport] = useState(false)

    return(
        <div className='profileDescProfile'>
            {editPersonal ? <EditPersonalData setEditPersonal={setEditPersonal}/> : <ProfilePersonalData data={data} setEditPersonal={setEditPersonal}/>}
            {editPassport ? <EditPassportDetails setEditPassport={setEditPassport}/> : <ProfilePassportData data={data} setEditPassport={setEditPassport}/>}
        </div>
    )
}

export default ProfileDescProfile