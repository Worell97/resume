import React from 'react';
import {StyledMenu, StyledNavMenu, NavMenuItem} from './styles';
import {NavBtn, NavBtnLink, Button} from '../button';
import { StyledSandWichButton } from '../button/styles';

const Menu = () => {

    function scrollToElement(elementId: string){
        var element = document.getElementById(elementId);
        console.log(elementId)
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
    }
    return(
        <StyledMenu>
                <Button caption="Oscar Worell Filho" onClick={(event: React.MouseEvent<HTMLElement>) => {scrollToElement("Home")}}/>
            <StyledSandWichButton/>
            <StyledNavMenu>               
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => {scrollToElement("AboutMe")}}>About me</NavMenuItem> 
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => {scrollToElement("Experience")}}>Career</NavMenuItem>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => {scrollToElement("Certifications")}}>Certification</NavMenuItem>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => {scrollToElement("Contact")}}>Contact</NavMenuItem>
            </StyledNavMenu>
            <NavBtn> 
                <NavBtnLink to="https://github.com/Worell97">
                    Github
                </NavBtnLink>
            </NavBtn>
        </StyledMenu>
    ); 
}

export default Menu;
