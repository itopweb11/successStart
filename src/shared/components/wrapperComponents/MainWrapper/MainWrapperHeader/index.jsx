import React, {useState} from 'react';
import Rouble from "../../../../img/svg/rouble";
import Notification from "../../../../img/svg/notification";
import EmailIcon from "../../../../img/svg/EmailIcon";
import vector from "../../../../img/components/profileImg/Vector1.png";
import Settings from "../../../../img/svg/settings";
import {useHistory} from "react-router-dom";
import classnames from "classnames";
import Search from "../../../../img/svg/search";

const MainWrapperHeader = ({data, setActiveItem}) => {
    const history = useHistory();
    const [buttonMail, setButtonMail] = useState(false)
    const [balance, setBalance] = useState(false)
    const [email, setEmail] = useState(false)

    const profileHeaders = classnames({
        'mainWrapperHeader__desc': true,
        'emailActive': email
    })

    const emailIcon = classnames({
        'mainWrapperHeader__emailIcon': true,
        'activeIcon': email
    })

    const account = classnames({
        'mainWrapperHeader__account': true,
        'accountActive': email && buttonMail
    })

    const transitionEntrance = () => {
        setEmail(false)
        setButtonMail(false)
        history.push("/login")
    }

    const onClickEmail = () => {
        if(email) {
            setEmail(false)
            setButtonMail(false)
        } else setEmail(true)
    }

    const onClickProfile = () => {
        setActiveItem('profile')
        setEmail(false)
        setButtonMail(false)
    }
    return (
        <div className='mainWrapperHeader'>
            <div className='mainWrapperHeader__search'>
                <Search />
                <input
                    type="text"
                    placeholder='search...'
                />
            </div>
            <div className={profileHeaders}>
                <div className='mainWrapperHeader__balance'>
                    <div onClick={()=> balance ? setBalance(false) : setBalance(true)}
                         className={balance ? 'balanceActive activeIcon' : null}>
                        <Rouble/>
                    </div>
                    <p className={balance ? 'balanceActive' : 'balanceActiveNon'}><span>????????????:</span>90 000 000,00 ???</p>
                </div>
                <div className='mainWrapperHeader__notification'>
                    <div className='notificationPoint'></div>
                    <Notification />
                </div>
                <div className='mainWrapperHeader__buttonMail'>
                    <div className='mainWrapperHeader__buttonMail_desc'>
                        <div
                            className={emailIcon}
                            onClick={onClickEmail}
                        >
                            {!email ? <div className='emailPoint'></div> : null}

                            <EmailIcon />
                        </div>
                        <span
                            onClick={() => buttonMail ? setButtonMail(false) : setButtonMail(true)}
                            className={email ? 'email__active' : null}
                        >
                            {data.user.email}
                        </span>
                        <img
                            className={buttonMail ? 'mainWrapperSidebar__selectImgActive' : 'mainWrapperSidebar__selectImg'}
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
                            <button onClick={transitionEntrance}>??????????</button>
                            <button onClick={onClickProfile}>??????????????</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWrapperHeader;