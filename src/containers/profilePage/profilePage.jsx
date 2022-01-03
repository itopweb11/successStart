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

const ProfilePage = ({state, dispatch}) => {
    const[addProfile, setAddProfile] = useState(false)
    const[buttonMail, setButtonMail] = useState(false)
    const[activeItem, setActiveItem] = useState('invest')

    const navbarList = classnames({
        'profile__navbar__list': true,
        'profile__navbar__addProfile': addProfile
    })

    const navbarButton = classnames({
        'profile__navbar__button': true,
        'profile__navbar__buttonActive': addProfile
    })

    return(
        <div className='profile'>
            <div className='profile__navbar'>
                <div className='profile__navbar__logo'>
                    <img src={investImg1} alt=""/>
                </div>
                <div className='profile__navbar__line'/>
                <div className='profile__navbar__userInfo'>
                    <img src={user} alt="user"/>
                    <p>sfgdfgsds</p>
                    <p>ffff ffffffff hfggggggggg</p>
                    <p>не аккредитован</p>
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
                            <li className={activeItem === 'invest' ?'navbarItemActive' :null}>
                                <Grid/>
                                <p>Инвестировать</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('briefcase')}>
                            <li className={activeItem === 'briefcase' ?'navbarItemActive' :null}>
                                <Briefcase/>
                                <p>Ваш портфель</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('profile')}>
                            <li className={activeItem === 'profile' ?'navbarItemActive' :null}>
                                <User/>
                                <p>Профиль</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('documentation')}>
                            <li className={activeItem === 'documentation' ?'navbarItemActive' :null}>
                                <FileText/>
                                <p>Ваши документы</p>
                            </li>
                        </a>
                        <a href="#" onClick={() => setActiveItem('events')}>
                            <li className={activeItem === 'events' ?'navbarItemActive' :null}>
                                <Info/>
                                <p>Ваши события</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className='profile__content'>
                <div className='profile__header'>
                    <div className='profile__header__time'>
                        <p>30 декабря, четверг, 16:26</p>
                    </div>
                    <div className='profile__header__desc'>
                        <div className='profile__header__balance'>
                            <Rouble />
                            <p>Баланс:</p>
                            <p>90 000 000,00 ₽</p>
                        </div>
                        <div className='profile__header__notification'>
                            <div className='profile__header__notification__desc'>
                                <span>10</span>
                            </div>
                            <Notification />
                        </div>
                        <div
                            className='profile__header__buttonMail'
                            onClick={() => buttonMail ? setButtonMail(false) : setButtonMail(true)}
                        >
                            <button>nebop61635@zherben.com</button>
                            <img
                                className={buttonMail ? 'profile__navbar__selectImgActive' : 'profile__navbar__selectImg'}
                                src={vector}
                                alt="vector"
                            />
                        </div>
                    </div>
                </div>
                <div className='profile__content-info'></div>
            </div>
        </div>
    )
}

export default ProfilePage;