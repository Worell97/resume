import React from 'react';
import { Element } from 'react-scroll';
import {DeafaultSection, Header} from './styles';


type Props = {
  elementName: string; // used on react-scroll
  children: React.ReactNode;
  HeaderText: string;
  customstyle: string;
};

function Section({elementName, children, HeaderText, customstyle }: Props) {
  return(
    <Element name={elementName}>
      <DeafaultSection customstyle={customstyle} id={elementName}>
          {(HeaderText !== ''? <Header>{HeaderText}</Header>:<></>)}
          {children}
      </DeafaultSection>
    </Element>      
  );
};
  
export default Section;