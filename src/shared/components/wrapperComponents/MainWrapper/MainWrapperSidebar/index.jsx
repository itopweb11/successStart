import React, {useState} from 'react';
import Menu from "../../../../img/svg/menu";
import LogoDark from "../../../../img/components/profileImg/LogoDark.svg";
import User from "../../../../img/svg/user";
import Grid from "../../../../img/svg/grid";
import Briefcase from "../../../../img/svg/briefcase";
import FileText from "../../../../img/svg/fileText";
import Info from "../../../../img/svg/info";

const MainWrapperSidebar = ({menu, setMenu}) => {
    const [activeItem, setActiveItem] = useState('profile')

    return (
        <div className='mainWrapperSidebar'>
            <div className='mainWrapperSidebar__logo'>
                <Menu menu={menu} setMenu={setMenu}/>
                <img
                    className={menu ? 'mainWrapperSidebarMobilLogo' : null}
                    src={LogoDark}
                    alt="LogoDark"
                />
            </div>
            <div className='mainWrapperSidebar__list'>
                <ul>
                    <a href="#" onClick={() => setActiveItem('profile')}>
                        <li className={activeItem === 'profile' ? 'sidebarItemActive' : null}>
                            <User/>
                            <p className={menu ? 'mainWrapperSidebarMenuText' : null}>Профиль</p>
                        </li>
                    </a>
                    <a href="#" onClick={() => setActiveItem('invest')}>
                        <li className={activeItem === 'invest' ? 'sidebarItemActive' : null}>
                            <Grid/>
                            <p className={menu ? 'mainWrapperSidebarMenuText' : null}>Инвестировать</p>
                        </li>
                    </a>
                    <a href="#" onClick={() => setActiveItem('briefcase')}>
                        <li className={activeItem === 'briefcase' ? 'sidebarItemActive' : null}>
                            <Briefcase/>
                            <p className={menu ? 'mainWrapperSidebarMenuText' : null}>Ваш портфель</p>
                        </li>
                    </a>
                    <a href="#" onClick={() => setActiveItem('documentation')}>
                        <li className={activeItem === 'documentation' ? 'sidebarItemActive' : null}>
                            <FileText/>
                            <p className={menu ? 'mainWrapperSidebarMenuText' : null}>Ваши документы</p>
                        </li>
                    </a>
                    <a href="#" onClick={() => setActiveItem('events')}>
                        <li className={activeItem === 'events' ? 'sidebarItemActive' : null}>
                            <Info/>
                            <p className={menu ? 'mainWrapperSidebarMenuText' : null}>Ваши события</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default MainWrapperSidebar;