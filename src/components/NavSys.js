import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

 export const NavSys = () =>{

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [open, setOpen] = useState(false);

  return (
    <Router>
         {/* <div style={{ display: 'block',
                  width: 700, padding: 30 }}> */}
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home" className='brand'>
        <h3><strong><span>JATIN</span></strong></h3>

        </Navbar.Brand>
        <Navbar.Toggle>
        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="basic-navbar-nav">
      </Button>
            <span className="navbar-toggler-icon"></span>    
        </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>
                Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>
                Skills
            </Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>
                Projects
            </Nav.Link>
            </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#https://github.com/Jatinpathak28"><img src={navIcon1} alt="linkden" /></a>
                <a href="#https://www.linkedin.com/in/jatinpathak28/"><img src={navIcon2} alt="facebook" /></a>
                <a href="#https://twitter.com/jatinpathak2002?s=09"><img src={navIcon3} alt="instagrsm" /></a>
            </div>
            <HashLink to="#connect">
            <button className="contat"><span>Hire Me</span></button>
            </HashLink>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* </div> */}
 </Router>
  );
 }