import React from 'react'
import ProfilePersonalData from "./profilePersonalData/profilePersonalData";
import ProfilePassportData from "./profilePassportData/profilePassportData";

const ProfileDescProfile = ({data, setData}) => {

    return(
        <div className='profileDescProfile'>
            <ProfilePersonalData data={data} setData={setData} />
            <ProfilePassportData data={data} setData={setData}/>
        </div>
    )
}

export default ProfileDescProfile