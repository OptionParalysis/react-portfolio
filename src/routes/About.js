import React from 'react';

import './about.css';
import img from '../images/portrait.jpg'
import resume from '../images/zach-janice-resume-2018.doc';

const About = () => (

    <div className="about left-column-wrap">
        <div className="left-column">
            <div className="portrait-wrap">
                <img src={img} alt="Portrait of Z" />
                <ul>
                    <li>Zach Janice</li>
                    <li>Front End Developer</li>
                    <li>Kansas City</li>
                </ul>
            </div>
        </div>
        <div className="right-column">
            <div className="copy-wrap">
                <h1 className="page-title">About</h1>
                <p>Hello, my name is Zach Janice and I’m a Front-End Developer based in Kansas City.</p>
                <p>I believe in craftsmanship, attention to detail, and the sweet spot between concept and execution. The work I create is driven by insight, strategy and purpose.</p>
                <p>I create websites with an emphasis on client-side technologies and Web Accessibility standards, using HTML5, jQuery/JavaScript, and CSS3, while utilizing pre-processors like Less. I can use design tools such as Photoshop, Sketch App, Illustrator, and InDesign to create pixel perfect sites, and I am experienced in creating and coding email campaigns that are responsive and render correctly in popular desktop and mobile clients.</p>
                <p>Using NPM and Grunt, I created a build system that helps speed up my team’s development and create products for our sales team. I also train and develop new team members, while informing and coaching internal stakeholders and clients about best practices and processes.</p>
                <p>I'm currently expanding my tool belt with React.js and Redux with Firebase.io.</p>
                <p>You can view my resume on <a href="http://www.linkedin.com/in/zach-janice-06121266" target="_blank" rel="noopener noreferrer">Linkedin</a> or download it <a href={resume} rel="noopener noreferrer">here</a>.</p>
                <h2>Tool Box</h2>
            </div>

            <div className="chart-wrap">
                <figure className="chart html">
                <figcaption>HTML</figcaption>
                <div className="devicons devicons-html5 icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>
            <div className="chart-wrap">
                <figure className="chart less">
                <figcaption>Less</figcaption>
                <div className="devicons devicons-less icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>
            <div className="chart-wrap">
                <figure className="chart jquery">
                <figcaption>jQuery</figcaption>
                <div className="devicons devicons-jquery icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>
            <div className="chart-wrap">
                <figure className="chart js">
                <figcaption>JS</figcaption>
                <div className="devicons devicons-javascript_badge icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>
            <div className="chart-wrap">
                <figure className="chart react">
                <figcaption>Angular</figcaption>
                <div className="devicons devicons-react icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>
            <div className="chart-wrap">
                <figure className="chart grunt">
                <figcaption>Grunt</figcaption>
                <div className="devicons devicons-grunt icon"></div>
                <svg width="100" height="100">
                    <circle className="outer" cx="50" cy="50" r="35" transform="rotate(-90, 50, 50)"/>
                </svg>
                </figure>
            </div>

        </div>

    </div>
);

export default About;