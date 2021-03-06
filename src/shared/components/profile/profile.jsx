import React, {useState} from 'react'
import user from "../../img/components/profileImg/user.png";
import vector from "../../img/components/profileImg/Vector1.png";
import cover from "../../img/components/profileImg/cover-img1.png";
import Pros from "../../img/svg/pros";
import classnames from "classnames";
import ProfileDescProfile from "./profileDescProfile/profileDescProfile";
import ProfileDescCheck from "./profileDescCheck/profileDescCheck";
import ProfileDescBankDetails from "./profileDescBankDetails/profileDescBankDetails";

const Profile = ({data, setData, menu}) => {
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

    const renderTabContent = () => {
        switch (dataUser) {
            case 'profile': return <ProfileDescProfile setData={setData} data={data} />
            case 'requisites': return <ProfileDescBankDetails  data={data} setData={setData} />
            default: return <ProfileDescCheck data={data} />
        }
    }

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
                            onClick={() => setDataUser('requisites')}
                            className={dataUser === 'requisites' ? 'user__tabTextActive' : null}
                        >
                            Банковские реквизиты
                            {dataUser === 'requisites' ? <div className='userTabLine'/> : null}
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
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile