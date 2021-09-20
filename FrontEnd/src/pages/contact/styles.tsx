import styled from 'styled-components';

export const Grid = styled.section`
    margin: auto;
`;

export const CustomList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const Sidebar = styled.div`
    grid-area: sidebar;
    padding: 5px;
`;

export const Content = styled.div`
    grid-area: content;
    align-items: space-between;
    padding: 5px;
`;

export const CustomItem = styled.li`
    text-align: center;
`;

export const SocialMedia = styled.div`
    grid-area: techs;
    display: flex;
    padding: 5px;
`;

export const SocialMediaPicture = styled.img`
    padding: 5px;
    min-width: 50px;  
    max-width: 50px;
    max-height: 50px;
    margin: 0 auto;
    border-radius: 15%;
`;