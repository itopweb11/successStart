import React, {useState} from 'react'
import user from "../../img/components/profileImg/user.png";
import vector from "../../img/components/profileImg/Vector1.png";
import cover from "../../img/components/profileImg/cover-img1.png";
import Pros from "../../img/svg/pros";
import classnames from "classnames";
import ProfileDescProfile from "./profileDescProfile/profileDescProfile";
import ProfileDescProps from "./profileDescProps/profileDescProps";
import ProfileDescCheck from "./profileDescCheck/profileDescCheck";

const Profile = ({data, menu}) => {
    const [addProfile, setAddProfile] = useState(false)
    const [dataUser, setDataUser] = useState('profile')

    const navbarButton = classnames({
        'profile__user__button': true,
        'profile__user__buttonActive': addProfile
    })

    const profileInfo = classnames({
        'profile__user__info': true,
        'profileImgMobil': menu
    })

    const profileUser = classnames({
        'profile__user': true,
        'profile__userMobil': menu
    })

    return(
        <div className='profile'>
            <h3 className='profile__title'>Мой профиль</h3>
            <div className='profile__desc'>
                <div className={profileUser}>
                    <div className='profile__user__userInfo'>
                        <img src={user} alt="user"/>
                        <p>{data.user.roles[0].description}</p>
                        <p>{data.user.fio}</p>
                        <p className={data.accreditation_status.value === 'Аккредитован' ? 'accredited' : 'noAccredited'}>{data.accreditation_status.value}</p>
                    </div>
                    <div
                        className='profile__user__select'
                        onClick={() => addProfile ? setAddProfile(false) : setAddProfile(true)}
                    >
                        <p>Выбрать профиль</p>
                        <img
                            className={addProfile ? 'profile__user__selectImgActive' : 'profile__user__selectImg'}
                            src={vector}
                            alt="vector"
                        />
                    </div>
                    <div className={navbarButton}>
                        <button>
                            <div className='profile__user__buttonPros'>
                                <Pros/>
                            </div>
                            <span>Добавить профиль</span>
                        </button>
                    </div>
                </div>
                <div className={profileInfo}>
                    <img
                        src={cover}
                        alt="cover"
                    />
                    <div className='profile__user__tabs'>
                        <span
                            onClick={() => setDataUser('profile')}
                            className={dataUser === 'profile' ? 'user__tabTextActive' : null}
                        >
                            Данные профиля
                            {dataUser === 'profile' ? <div className='userTabLine'/> : null}
                        </span>
                        <span
                            onClick={() => setDataUser('props')}
                            className={dataUser === 'props' ? 'user__tabTextActive' : null}
                        >
                            Банковские реквизиты
                            {dataUser === 'props' ? <div className='userTabLine'/> : null}
                        </span>
                        <span
                            onClick={() => setDataUser('check')}
                            className={dataUser === 'check' ? 'user__tabTextActive' : null}
                        >
                            Виртуальный счет
                            {dataUser === 'check' ? <div className='userTabLine'/> : null}
                        </span>
                    </div>
                    <div className='profile__user__desc'>
                        {
                            dataUser === 'profile' ? <ProfileDescProfile data={data} />
                            : dataUser === 'props' ? <ProfileDescProps />
                                    : <ProfileDescCheck data={data} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile