import React from 'react'
import MainWrapperSidebar from "./MainWrapperSidebar";
import MainWrapperHeader from "./MainWrapperHeader";

const MainWrapper = ({children, setMenu, menu, data}) => {

    return (
        <div className="mainWrapper">
            <MainWrapperSidebar menu={menu} setMenu={setMenu}/>
            <div className="mainWrapper__contentGroup">
                <MainWrapperHeader data={data}/>
                <div className='mainWrapper__contentGroup__info'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainWrapper