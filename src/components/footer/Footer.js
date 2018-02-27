import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => (
  <footer>
    <p>All work displayed, I am the author and/or co-creator of.  I don't claim copyright for any work displayed unless stated otherwise. Please <Link to="/contact">contact me</Link> if there are questions or concerns.</p>
  </footer>
);

export default Footer;