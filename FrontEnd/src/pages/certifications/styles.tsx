import styled from 'styled-components';

export const ProfilePicture = styled.img`
    max-width: 300px;
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
    height: 100%;
`;
