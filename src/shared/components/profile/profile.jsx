import React, {useState} from 'react'
import user from "../../img/components/profileImg/user.png";
import vector from "../../img/components/profileImg/Vector1.png";
import cover from "../../img/components/profileImg/cover-img1.png";
import Pros from "../../img/svg/pros";
import classnames from "classnames";

const Profile = ({data, menu}) => {
    const [addProfile, setAddProfile] = useState(false)

    const navbarButton = classnames({
        'profile__user__button': true,
        'profile__user__buttonActive': addProfile
    })

    return(
        <div className='profile'>
            <h3 className='profile__title'>Мой профиль</h3>
            <div className='profile__desc'>
                <div className='profile__user'>
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
                <div className='profile__user__info'>
                    <img
                        className={menu ? 'profileImgMobil' : 'profileImgMobilNone'}
                        src={cover}
                        alt="cover"
                    />
                    <div className='profile__user__desc'>
                        <div className='profile__personalData'>

                        </div>
                        <div className='profile__passportData'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile