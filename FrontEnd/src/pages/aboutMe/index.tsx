import React from 'react';
import Delphi from '../../assets/icons8-delphi-ide-50.png';
import Html from '../../assets/icons8-html-5-50.png';
import CSS from '../../assets/icons8-css3-50.png';
import JavaScript from '../../assets/icons8-javascript-50.png';
import ReactPng from '../../assets/icons8-react-50.png';
import JavaPng from '../../assets/icons8-java-50.png';
import {Content, Grid, Resume, TechnologyPicture, Techs} from './styles';
import Section from '../../components/section';

function AboutMe(){
    return(
        <>
            <Section elementName="AboutMe" HeaderText="About Me" customstyle="background-color var(--primary);">
                <Grid>
                    <Content>
                        <Resume>
                            <p>- I’m currently working as a web developer with React.Js on this personal project where I still working on the front-end but I want to make this dynamic
                                cosuming an API on node.js that I'll make soon as possible.
                            </p>
                            <p>- I’m learning web development(React, node.js, css, typescript) and flutter for mobile at <a href="https://app.balta.io">balta.io</a></p>
                            <p>- I really want to work on web projects because on my studies with web 
                            development I'm fell very excited when I saw the things that I can do on web, like this website that I'm making by myself.</p>
                            <p>- Studing Systems Analysis and Development (SAD) at Unicesumar</p>
                            <p>- Studing English for +2 years</p>
                        </Resume>
                    </Content>
                    <Techs>
                        <div>
                            <h3 style={{textAlign: 'center'}}>Technolgies that I know</h3>
                            <TechnologyPicture src={Delphi} alt="Delphi"/>
                            <TechnologyPicture src={Html} alt="HTML"/>
                            <TechnologyPicture src={CSS} alt="CSS"/>
                            <TechnologyPicture src={JavaScript} alt="JavaScript"/>
                            <TechnologyPicture src={ReactPng} alt="React"/>
                            <TechnologyPicture style={{borderRadius: '50%'}} src={JavaPng} alt="Java"/>
                        </div>                   
                    </Techs>
                </Grid>
            </Section>
        </>
    )
}
export default AboutMe;