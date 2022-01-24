import React from 'react'
import MainWrapperSidebar from "./MainWrapperSidebar";
import MainWrapperHeader from "./MainWrapperHeader";

const MainWrapper = ({children, setMenu, menu, data, setActiveItem, activeItem}) => {

    return (
        <div className="mainWrapper">
            <MainWrapperSidebar menu={menu} setMenu={setMenu} setActiveItem={setActiveItem} activeItem={activeItem}/>
            <div className="mainWrapper__contentGroup">
                <MainWrapperHeader data={data} setActiveItem={setActiveItem}/>
                <div className='mainWrapper__contentGroup__info'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainWrapper