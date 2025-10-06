import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
    <div className="megaParentFooter">
        <h3 className="footerTitle">React Web Tutorial</h3>
        <p className="footerDesPara">
          Built with <span className="highlightFooterParaS">React</span> by <span className="highlightFooterParaS">Siddeque Sajeev</span>. 
         Learn, explore, and create modern web applications using the power of 
         <span className="highlightFooterParaS"> components</span> and 
         <span className="highlightFooterParaS"> reusable code</span>.
       </p>
       <p className="footerDesPara">
           &copy; 2025 <span className="highlightFooterParaS">React Tutorial</span>. All rights reserved.
         </p>
    </div>
  );
};

export default Footer;
