import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from  'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Robertson</span> <br/> Website Designer</span>
                <p className="introPara">Bla bla bla bla bla bla bla bla more bla bla bla bla bla bla</p>
                <Link><button className="btn"><img src={btnimg} alt="hireme" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;