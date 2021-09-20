import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const StyledButton = styled.button`
    color: var(--white);
    border: none;
    background-color: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;  
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export const StyledButtonList = styled.div`

`;

export const StyledNavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const StyledNavBtnLink = styled.a`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
        transition: all 0.2s ease-in-out;
        background: #256ce1;
        color: #010606;
    }    
`;


export const StyledSandWichButton = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1,8rem;
        cursor: pointer;
    }
`;