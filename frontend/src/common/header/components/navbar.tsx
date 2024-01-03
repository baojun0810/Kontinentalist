import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarWrapper, NavBarFirstRow, HeaderTitle, NavBarButtonSection, NavBarSecondRow } from '../style'

const NavBar = () => {
  return (
    <NavBarWrapper>
        <NavBarFirstRow>
            <HeaderTitle>LOGO</HeaderTitle>
            <NavBarButtonSection>
                <button>Demo</button>
                <button>Login</button>
                <button className='signup'>Sign Up</button>
            </NavBarButtonSection>
        </NavBarFirstRow>
        <NavBarSecondRow>
            <NavLink to="/">Task 1</NavLink>
            <NavLink to="managePost">Task 2</NavLink>
        </NavBarSecondRow>
    </NavBarWrapper>
  )
}

export default NavBar