import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/chawpaty.PNG";
import projImg2 from "../assets/img/payinGuest.PNG";
import projImg3 from "../assets/img/coviaid.PNG";
import projImg4 from "../assets/img/braille.jpg";
import projImg5 from "../assets/img/portfolio.PNG";
import projImg6 from "../assets/img/5124556.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PersonalProjects = () => {

  const projects = [
    {
      title: "Street Food",
      description: "Food delivery service website.",
      imgUrl: projImg1,
    },
    {
      title: "Rent Flat",
      description: "Renting service website.",
      imgUrl: projImg2,
    },
    {
      title: "Covi-aid App",
      description: "Check the risk of getting Covid.",
      imgUrl: projImg3,
    },
    {
      title: "Braille Ic",
      description: "Automatic speech to braille.",
      imgUrl: projImg4,
    },
    {
      title: "PortFolio",
      description: "Portfolio website",
      imgUrl: projImg5,
    },
    {
      title: "TFET",
      description: "work on progress",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You will find here all my projects that I have worked on as well as my ongoing projects. Send me a message to my Hireme section if you want to see my work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
