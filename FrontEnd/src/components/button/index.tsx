import React from 'react';
import {StyledNavBtn, StyledButton, StyledButtonList, StyledNavBtnLink} from './styles';

type ButtonProps = {
    caption: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type ListProps = {
    children: React.ReactNode;
}

type LinkProps = {
    children: React.ReactNode;
    to: string;
}

export function Button({caption, onClick}: ButtonProps){
    return(
        <StyledButton onClick={onClick}>
            {caption} 
        </StyledButton>
    );
};

export function ButtonList({children}: ListProps){
    return(
        <StyledButtonList>
            {children}
        </StyledButtonList>
    );
};

export function NavBtn({children}: ListProps){
    return(
        <StyledNavBtn>
            {children}
        </StyledNavBtn>
    );
};

export function NavBtnLink({children, to}: LinkProps){
    return(
        <StyledNavBtnLink href={to}>
            {children}
        </StyledNavBtnLink>
    );
}