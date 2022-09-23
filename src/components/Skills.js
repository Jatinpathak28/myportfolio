import m1 from "../assets/img/meter1.svg";
import m2 from "../assets/img/meter2.svg";
import m3 from "../assets/img/meter3.svg";
import m4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min:1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min:464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min:0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>The skills I have gained from my work, which helps me grow faster in this fast growing era.</p> 
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={m1} alt="meter" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={m3} alt="meter" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={m4} alt="meter" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={m4} alt="meter" />
                                    <h5>react.js</h5>
                                </div>
                                <div className="item">
                                    <img src={m4} alt="meter" />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={m4} alt="meter" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={m2} alt="meter" />
                                    <h5>Cadence Virtuoso</h5>
                                </div>
                            
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
    }

