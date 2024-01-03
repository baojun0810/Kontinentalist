import styled from "styled-components";

export const ColorButton = styled.button`
    padding: 12px 30px;
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

export const NoColorButton = styled.button`
    padding: 12px 30px;
    font-weight:500;
    outline: none;
    border: 1px solid #D2D2D2;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #FF1A50;
        color: white;
    }
`