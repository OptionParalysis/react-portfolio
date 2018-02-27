import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => (
  <footer>
    <p>All work displayed, I am the author and/or co-creator of.  I don't claim copyright for any work displayed unless stated otherwise. Please contact me if there are questions or <Link to="/contact">concerns</Link>.</p>
  </footer>
);

export default Footer;