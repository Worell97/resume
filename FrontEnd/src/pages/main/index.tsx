import Home from '../home';
import Menu from '../../components/menu';
import AboutMe from '../aboutMe';
import Experience from '../experience';
import Contact from '../contact';
import Certifications from '../certifications';
import Container from '../../components/container';

function MainPage (){
    return(
        <Container HeaderText="" customstyle="">
            <Menu/> 
            <Home/>
            <AboutMe/>
            <Experience/>
            <Certifications/> 
            <Contact/> 
        </Container>
    );
};

export default MainPage;