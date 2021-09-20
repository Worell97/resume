import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    max-width: 1980px;
    height: auto;
    max-height: 90vh;
    &:before,
    &:after{
        content: " ";
    display: table;
    }
    &:after{
        clear: both;
    }

`

export const Row = styled.div`
    width auto;
    height: 100%;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after{
        content: " ";
    display: table;
    }
    &:after{
        clear: both;
    }

`;

type Props = {
    gridLength: number;
    children: React.ReactNode;
}

export const Column = ({ gridLength, children }: Props) => {
    return (
      <GridColumn gridLength={gridLength}>
        {children}
      </GridColumn>
    );
};

const GridColumn = styled.div<Props>`
    float: left;
    padding: 0.5rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 768px){
        width: ${props => (props.gridLength ? props.gridLength / 12 * 100: '8.33')}%;    
    }
`;
