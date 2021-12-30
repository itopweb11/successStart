import React from 'react';
import investImg1 from '../../shared/img/components/profileImg/investmently1.png'
import user from '../../shared/img/components/profileImg/user.png'
import vector from '../../shared/img/components/profileImg/Vector1.png'
import User from "../../shared/img/svg/user";

const ProfilePage = ({state, dispatch}) => {
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
                <div className='profile__navbar__select'>
                    <p>Выбрать профиль</p>
                    <img src={vector} alt="vector"/>
                </div>
                <div className='profile__navbar__line'/>
                <div className='profile__navbar__list'>
                    <ul>
                        <a href="#">
                            <li>
                                <div></div>
                                <p>Инвестировать</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <div></div>
                                <p>Ваш портфель</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p>Профиль</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <div></div>
                                <p>Ваши документы</p>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <div></div>
                                <p>Ваши события</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className='profile__content'>
                <div className='profile__header'></div>
                <div className='profile__content-info'></div>
            </div>
        </div>
    )
}

export default ProfilePage;