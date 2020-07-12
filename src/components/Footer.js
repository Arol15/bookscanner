import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">About Us</div>
      <div className="icons">
        <a href="https://github.com/Arol15">
          <i className="github icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/lorarusinouskaya/">
          <i className="linkedin alternate icon"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
