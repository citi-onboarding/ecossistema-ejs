import React from 'react'
import './Footer.css';

import {
  Footertext,
} from '../../Components';

function Footer(){
  return (
    <div id="footer">
        <div id="footer-left">
            <Footertext footertext="Copyright©2021"/>
        </div>
        <div id="footer-right">
            <Footertext footertext="Made with &lt;/&gt; and ❤ by <strong>CITI</strong>"/>
        </div>
    </div>
  );
}

export default Footer;