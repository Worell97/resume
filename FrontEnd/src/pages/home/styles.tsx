import styled from 'styled-components';

export const ProfilePicture = styled.img`
    max-width: 250px;
    min-width: 16px; 
    width: 100%;    
    border-radius: 50%;    
    border: 2px solid var(--grayMedium);
    margin: 0 auto;
`;

export const Resume = styled.div`
    padding: 24px;
    border: 0.1px solid var(--grayHigh);
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`;

export const CentralizedContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Grid = styled.section`
    display: grid; 
    flex-wrap: wrap;
    grid-template-areas: 
        "sidebar space"
        "sidebar content"
        "sidebar content"
        "sidebar space2"
    ;
    margin: auto;
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
