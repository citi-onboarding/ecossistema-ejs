import React from 'react'
import './Footer.css';

import {
  Footertext,
} from '../../Components';

function Footer(){
  return (
    <div className="footer-content">
        <div id="footer">
          <div id="footer-left">
            <Footertext footertext="Copyright©2021" justify="left"/>
        </div>
        <div id="footer-right">
            <Footertext footertext="Made with &lt;/&gt; and ❤ by CITI" justify="right"/>
        </div>
     </div>
    </div>

  );
}

export default Footer;