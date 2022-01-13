import React, {useState} from 'react'
import ProfilePersonalData from "./profilePersonalData/profilePersonalData";
import ProfilePassportData from "./profilePassportData/profilePassportData";

const ProfileDescProfile = ({data}) => {

    return(
        <div className='profileDescProfile'>
            <ProfilePersonalData data={data} />
            <ProfilePassportData data={data} />
        </div>
    )
}

export default ProfileDescProfile