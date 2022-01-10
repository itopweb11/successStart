import React from 'react';

const Menu = ({menu, setMenu}) => {
    return(
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => menu ? setMenu(false) : setMenu(true)}
            className={menu ? 'feather feather-menu profile__navbarButton' : 'feather feather-menu'}
        >
            <g>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </g>
        </svg>
    )
}

export default Menu;