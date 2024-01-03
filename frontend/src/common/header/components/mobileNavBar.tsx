import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { NavBarWrapper, NavBarFirstRow, HeaderTitle, NavSideBar, SidebarWrapper } from '../style';

const MobileNavBar = () => {

    const [sidebarShow, setSideBarShow] = useState(false);

    useEffect(() => {
        if(sidebarShow)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'unset';
     }, [sidebarShow]);

  return (
    <NavBarWrapper className='mobile'>
        <NavBarFirstRow className='mobile'>
            <HeaderTitle>LOGO</HeaderTitle>
            <FontAwesomeIcon icon={faBars} onClick={() => setSideBarShow(true)}/>
        </NavBarFirstRow>
        <NavSideBar className={sidebarShow ? "show" : ""}>
            <SidebarWrapper>
                <FontAwesomeIcon icon = {faX} onClick={() => setSideBarShow(false)}/>
                <Link to = "">Demo</Link>
                <Link to = "">Login</Link>
                <Link to = "">Sign Up</Link>
                <NavLink to="">Task1</NavLink>
                <NavLink to="managePost">Task 2</NavLink>
            </SidebarWrapper>
        </NavSideBar>
    </NavBarWrapper>
  )
}

export default MobileNavBar;