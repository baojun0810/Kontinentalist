import styled from "styled-components";

export const PostSection = styled.div`
    margin: 0 auto;
    width: 75%;

    @media (max-width: 992px) {
        width: 90%;
    }
`

export const PostContentWrapper = styled.div`
    padding-bottom: 70px;
    overflow: hidden;
`

export const PostContentContainer = styled.div`
    padding-bottom: 40px;
    width: 100%;

    & h2 {
        padding-bottom: 30px;
    }

    & h3 {
        padding-bottom: 20px;
    }
    
    & img {
        width: 100%;
        border-radius: 10px;
    }
`

export const SearchBarWrapper = styled.div`
    width: 100%;
    position: relative;

    & input {
        outline: none;
        border: 1px solid #d2d2d2;
        width: 100%;
        padding: 15px 40px 15px 15px;
        font-size: 16px;
    }

    & svg {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        color:black;
        font-size: 18px;
    }
`

export const PostTitle = styled.h1`
    text-align: center; 
    padding-bottom: 40px;
    font-size: 35px;
`

export const LoadingSection = styled.div`
    text-align: center;
`

export const LoadMoreButton = styled.button`
    margin-top: 15px;
    padding: 17.5px 40px;
    font-weight:500;
    outline: none;
    border: 1px solid #D2D2D2;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #FF1A50;
    color: white;

    &:hover{
        background: #FF1A50;
        opacity: 0.8;
    }
`

export const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 6px #FF1A50 double;
    border-left-style: solid;
    border-radius: 50%;
    animation: spin 0.75s infinite linear;
    margin: 0 auto;
    visibility: hidden;

    &.show{
        visibility: visible;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`