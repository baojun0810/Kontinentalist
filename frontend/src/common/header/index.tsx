import React, { useState } from 'react'
import { Main } from './style'
import { useMediaQuery } from '../../hook/useMediaQuery'
import MobileNavBar from './components/mobileNavBar';
import NavBar from './components/navbar';
import Banner from './components/banner';
import { Outlet } from 'react-router-dom';

const Header = () => {

    const isMobile = useMediaQuery('(max-width: 992px)');

  return (
    <Main>
        {isMobile ? <MobileNavBar/> : <NavBar/>}
        <Banner/>
        <Outlet/>
    </Main>
  )
}

export default Header