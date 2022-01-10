import React, {useEffect, useState} from 'react';
import investImg1 from '../../shared/img/components/profileImg/investmently1.png'
import user from '../../shared/img/components/profileImg/user.png'
import vector from '../../shared/img/components/profileImg/Vector1.png'
import User from "../../shared/img/svg/user";
import FileText from "../../shared/img/svg/fileText";
import Grid from "../../shared/img/svg/grid";
import Briefcase from "../../shared/img/svg/briefcase";
import Info from "../../shared/img/svg/info";
import Pros from "../../shared/img/svg/pros";
import classnames from "classnames";
import Rouble from "../../shared/img/svg/rouble";
import Notification from "../../shared/img/svg/notification";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {getProfileInclude} from "./helper";
import EmailIcon from "../../shared/img/svg/EmailIcon";
import Settings from "../../shared/img/svg/settings";

const ProfilePage = () => {
    const history = useHistory();
    const [data, setData] = useState(null)
    const [addProfile, setAddProfile] = useState(false)
    const [buttonMail, setButtonMail] = useState(false)
    const [balance, setBalance] = useState(false)
    const [email, setEmail] = useState(false)
    const [activeItem, setActiveItem] = useState('invest')

    const navbarList = classnames({
        'profile__navbar__list': true,
        'profile__navbar__addProfile': addProfile
    })

    const navbarButton = classnames({
        'profile__navbar__button': true,
        'profile__navbar__buttonActive': addProfile
    })

    const profileHeaders = classnames({
        'profile__header__desc': true,
        'emailActive': email
    })

    const emailIcon = classnames({
        'profile__header__emailIcon': true,
        'activeIcon': email
    })

    const account = classnames({
        'profile__header__account': true,
        'accountActive': email && buttonMail
    })

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

    console.log(data)

    return data
        ? <div className='profile'>
            <div className='profile__navbar'>
                <div className='profile__navbar__logo'>
                    <img src={investImg1} alt=""/>
                </div>
                <div className='profile__navbar__line'/>
                <div className='profile__navbar__userInfo'>
                    <img src={user} alt="user"/>
                    <p>{data.user.roles[0].description}</p>
                    <p>{data.user.name}</p>
                    <p className={data.accreditation_status.value === 'Аккредитован' ? 'accredited' : 'noAccredited'}>{data.accreditation_status.value}</p>
                </div>
                <div
                    className='profile__navbar__select'
                    onClick={() => addProfile ? setAddProfile(false) : setAddProfile(true)}
                >
                    <p>Выбрать профиль</p>
                    <img
                        className={addProfile ? 'profile__navbar__selectImgActive' : 'profile__navbar__selectImg'}
                        src={vector}
                        alt="vector"
                    />
                </div>
                <div className='profile__navbar__line'/>
                <div className={navbarButton}>
                    <button>
                        <div className='buttonPros'>
                            <Pros/>
                        </div>
                        <span>Добавить профиль</span>
                    </button>
                    <div className='profile__navbar__line'/>
                </div>
                <div className={navbarList}>
                    <ul>
                        <a href="#" onClick={() => setActiveItem('invest')}>
                            <li className={activeItem === 'invest' ? 'navbarItemActive' : null}>
                                <Grid/>
                                <p>Инвестировать</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('briefcase')}>
                            <li className={activeItem === 'briefcase' ? 'navbarItemActive' : null}>
                                <Briefcase/>
                                <p>Ваш портфель</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('profile')}>
                            <li className={activeItem === 'profile' ? 'navbarItemActive' : null}>
                                <User/>
                                <p>Профиль</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('documentation')}>
                            <li className={activeItem === 'documentation' ? 'navbarItemActive' : null}>
                                <FileText/>
                                <p>Ваши документы</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('events')}>
                            <li className={activeItem === 'events' ? 'navbarItemActive' : null}>
                                <Info/>
                                <p>Ваши события</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className='profile__content'>
                <div className='profile__header'>
                    <div className={profileHeaders}>
                        <div className='profile__header__balance'>
                            <div onClick={()=> balance ? setBalance(false) : setBalance(true)}
                                 className={balance ? 'balanceActive activeIcon' : null}>
                                <Rouble/>
                            </div>
                            <p className={balance ? 'balanceActive' : 'balanceActiveNon'}><span>Баланс:</span>90 000 000,00 ₽</p>
                        </div>
                        <div className='profile__header__notification'>
                            <div className='profile__header__notification__desc'>
                                <span>10</span>
                            </div>
                            <Notification/>
                        </div>
                        <div className='profile__header__buttonMail'>
                            <div className='profile__header__buttonMail_desc'>
                                <div
                                    className={emailIcon}
                                    onClick={() => email ? setEmail(false) : setEmail(true)}
                                >
                                    <EmailIcon />
                                </div>
                                <span
                                    onClick={() => buttonMail ? setButtonMail(false) : setButtonMail(true)}
                                    className={email ? 'email__active' : null}
                                >
                                    {data.user.email}
                                </span>
                                <img
                                    className={buttonMail ? 'profile__navbar__selectImgActive' : 'profile__navbar__selectImg'}
                                    src={vector}
                                    alt="vector"
                                />
                            </div>
                            <div className={account}>
                                <div className='header__accountSettings'>
                                    <p>{data.user.email}</p>
                                    <Settings />
                                </div>
                                <div className='header__accountSettings_buttons'>
                                    <button>Выйти</button>
                                    <button>Аккаунт</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile__content-info'></div>
            </div>
        </div>
        : null

}

export default ProfilePage;