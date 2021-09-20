import React from 'react';
import ProfilePictureAsset from '../../assets/Perfil.jpg';
import {CentralizedContent, ProfilePicture, Resume, Content, Grid, Sidebar} from './styles';
import Section from '../../components/section';

function Home(){
    return(
        <Section elementName="Home" HeaderText='' customstyle="background-color: var(--black);">
            <Grid>
                <Sidebar>
                    <ProfilePicture src={ProfilePictureAsset} alt="Eu"/>
                    <div style={{textAlign: 'center'}}></div>
                </Sidebar>
                <Content>
                    <CentralizedContent>
                        <Resume>
                            <h1># Hi there My name is Oscar Worell Filho 👋</h1>
                        </Resume>
                    </CentralizedContent>
                </Content>
            </Grid>
        </Section>
    );
}

export default Home;