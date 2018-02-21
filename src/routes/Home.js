import React from 'react';

import './home.css';
import videoMp4 from '../images/laptop.mp4';
import videoWebm from '../images/laptop.webm';

const Home = () => (
    <div className="home">
        <video src={videoMp4} id="bgvid" autoPlay muted loop>
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
        </video>
        <div className="content">
            <h2 className="frame-1">Hello</h2>
            <h2 className="frame-2">I am Zach Janice</h2>
            <h2 className="frame-3">A Front-End Developer</h2>
            <h2 className="frame-4">I work for a living, but I live to make cool stuff.</h2>
            <h2 className="frame-5">Thanks for visiting, <br /> Please don't break anything.</h2>
        </div>
    </div>
);

export default Home;