import styled from 'styled-components';

type Props ={
    customstyle: string 
}

export const DeafaultSection = styled.section<Props>`
    scroll-snap-align: start;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 90vh;
    padding: 5%;
    ${props => (props.customstyle !== '' ? props.customstyle : '')}
`;

export const Header = styled.h1` 
    text-align: center;
`;