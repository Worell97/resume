import React, { useEffect } from 'react';
import { StyledContainer } from './styles';
import {
    Events,
    scrollSpy
  } from "react-scroll";
import ScrollSnap from 'scroll-snap';
  
type Props = {
    children: React.ReactNode;
    HeaderText: string;
    customstyle: string;
}
const snapConfig = {
    snapDestinationY: '90vh',
    timeout: 100,
    duration: 300,
    threshold: 0.2,
    snapStop: false,
  }

function callBack() {
    console.log('snapped')    
}

function Container(content: Props){
    const container = React.createRef<HTMLDivElement>();

    function bindScrollSnap(){
        const element = container.current;
        if (element){
            const snapElement = new ScrollSnap(element, snapConfig);
            snapElement.bind(callBack);
        }
    };

    useEffect(() => {
        bindScrollSnap();
        Events.scrollEvent.register("begin", function() {
        console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function() {
        console.log("end", arguments);
        });        

        scrollSpy.update();
    });
    
    return(
        <StyledContainer>
            {content.children}
        </StyledContainer>
    )
}

export default Container;