import React from 'react';

import './about.css';
import '../images/portrait.jpg'

const About = () => (

    <div className="about left-column-wrap">
        <div className="left-column">
            <div className="portrait-wrap">
                <img src="../images/portrait.jpg" alt="Portrait of Z" />
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sapiente, commodi rerum, hic quod aut eos quo at nesciunt laboriosam dolorem consequuntur ipsum provident ratione eum placeat rem nobis voluptatibus.</p>
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