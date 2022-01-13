import React from 'react'
import MainWrapperSidebar from "./MainWrapperSidebar";
import MainWrapperHeader from "./MainWrapperHeader";

const MainWrapper = ({children}) => {

    return (
        <div className="mainWrapper">
            <MainWrapperSidebar />
            <div className="mainWrapper__contentGroup">
                <MainWrapperHeader />
                {children}
            </div>
        </div>
    )
}

export default MainWrapper