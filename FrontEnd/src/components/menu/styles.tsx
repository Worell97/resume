import styled from 'styled-components';

export const StyledMenu = styled.nav`
  width: 100%;
  height: 10vh;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  padding-left: 0.5rem;

  background: var(--primary);
  border-bottom: 0.2px solid var(--grayHigh);
`;


export const StyledNavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display:none;
    }
`;



export const NavMenuItem = styled.button`
    color: var(--white);
    border: none;
    background-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s, easy-in-out;  
    &:hover,
    &:focus {
        opacity: .5;
    }
`;