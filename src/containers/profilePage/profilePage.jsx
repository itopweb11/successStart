import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {getProfileInclude} from "./helper";
import Profile from "../../shared/components/profile/profile";
import MainWrapper from "../../shared/components/wrapperComponents/MainWrapper";

const ProfilePage = () => {
    const history = useHistory();
    const [data, setData] = useState(null)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        axios.get(`https://api.investonline.su/api/v1/user/profile?include=${getProfileInclude.join(',')}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    accept: 'application/x.incrowd.v1+json',
                }
            },
        )
            .then(response => setData(response.data.profile.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (!localStorage.getItem('access_token')) history.push('/login')
    }, [])

    return data
        ? <MainWrapper menu={menu} setMenu={setMenu} data={data}>
            <Profile data={data} menu={menu}/>
        </MainWrapper>
        : null
}

export default ProfilePage;