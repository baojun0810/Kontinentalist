import styled from "styled-components"

export const Main = styled.div`
    
`

export const NavBarWrapper =styled.div`
    width: 80%;
    margin: 0 auto;
    padding-bottom: 40px;

    @media (max-width: 1200px) {

        & {
            width: 90%;
        }
    }

    &.mobile {
        padding-bottom: 0;
    }
`

export const NavBarFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0 50px 0;

    &.mobile {
        padding: 20px 0;
        align-items: center;
    }

    &.mobile svg {
        font-size: 23px;
        cursor: pointer;
    }
`

export const NavSideBar = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    z-index: 100;
    transition: all 0.05s ease-in-out;
    
    &.show {
        right: 0;
    }
`

export const SidebarWrapper = styled.div`
    max-width: 600px;
    background: white;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;

    & > svg {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 22px;
        cursor: pointer;
    }

    & > a {
        display: block;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 20px 0;
        border-bottom: 1px solid #d2d2d2;
    }
`

export const HeaderTitle = styled.h1`
    font-weight: 700;
    font-size: 60px;
`

export const NavBarButtonSection = styled.div`
    display: flex;
    align-items: center;

    & button{
        height: 35px;
        width: 120px;
        font-weight:500;
        outline: none;
        border: 1px solid #D2D2D2;
        margin-left: 23px;
        font-size: 14px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    & button:hover{
        background: #FF1A50;
        color: white;
    }

    & button.signup{
        background: #FF1A50;
        color: white;
    }

    & button.signup:hover{
        background: #FF1A50;
        opacity: 0.8;
    }

    & button:first-child { margin-left: 0;}
`

export const NavBarSecondRow = styled.div`
    margin: 0 auto;
    display: flex;
    column-gap: 40px;
    align-items: center;
    justify-content: center;

    & a{
        font-weight: 600;
        font-size: 15px;
    }
`

export const BannerWrapper = styled.div`
    width: 100%;
    background:black;
    position: relative;
    overflow: hidden;
    margin-bottom: 40px;

    & > .background {
        width: 100%;
    }

    & > .mountain {
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    & > .santa {
        animation: fly 10s infinite;
        position: absolute;
        height: 60%;
    }

    @keyframes fly {

        0% {
            transform: rotateZ(0deg) translate(240%, -90%);
        }

        50%{
            transform: rotateZ(0deg) translate(120%, -150%);
        }

        100% {
            transform: rotateZ(0deg) translate(120%, -150%);
        }
    }
`