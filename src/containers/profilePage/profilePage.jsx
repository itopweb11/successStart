import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {getProfileInclude} from "./helper";
import Profile from "../../shared/components/profile/profile";
import MainWrapper from "../../shared/components/wrapperComponents/MainWrapper";
import Investments from "../../shared/components/investments/investments";
import YourBag from "../../shared/components/yourBag/yourBag";
import DocumentationComp from "../../shared/components/documentationComp/documentationComp";
import YourEvents from "../../shared/components/yourEvents/yourEvents";
import ProjectFeed from "../../shared/components/projectFeed/ProjectFeed";

const ProfilePage = () => {
    const history = useHistory();
    const [data, setData] = useState(null)
    const [menu, setMenu] = useState(false)
    const [activeItem, setActiveItem] = useState('profile')

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

    const content = () => {
        switch (activeItem) {
            case 'profile': return <Profile data={data} setData={setData} menu={menu}/>
            case 'invest': return <Investments setActiveItem={setActiveItem}/>
            case 'briefcase': return <YourBag />
            case 'documentation': return <DocumentationComp />
            case 'events': return <YourEvents />
            case 'projectFeed': return <ProjectFeed />
            default: return null
        }
    }

    return data
        ? <MainWrapper menu={menu} setMenu={setMenu} data={data} activeItem={activeItem} setActiveItem={setActiveItem}>
            {content()}
        </MainWrapper>
        : null
}

export default ProfilePage;