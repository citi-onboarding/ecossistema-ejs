import React from 'react'
import './Partners.css'
import google from '../../assets/google.svg'
import brasiljunior from '../../assets/brasiljunior.svg'
import citipartner from '../../assets/citipartner.svg'
import nestle from '../../assets/nestle.svg'
import microsoft from '../../assets/microsoft.svg'
import jewc from '../../assets/jewc.svg'
import inter from '../../assets/inter.svg'
import nubank from '../../assets/nubank.svg'

import {
    Title,
} from '../../Components';

function Partners() {
  return (
    <div className="Partners-div">   
     <Title titleText="Empresas parceiras do ecossistema"/>
     <img src={nubank} height="70px" widht="168,69" alt="logo"/>
     <img src={nestle} height="113px" widht="177px" alt="logo"/>
     <img src={microsoft} height="59,83px" widht="224,85px" alt="logo"/>
     <img src={brasiljunior} height="148px" widht="224,85px" alt="logo"/>
     <img src={google} height="113" widht="113" alt="logo"/>
     <img src={citipartner} height="113px" widht="113px" alt="logo"/>
     <img src={inter} height="60,63px" widht="170px" alt="logo"/>
     <img src={jewc} height="148px" widht="166,72px" alt="logo"/>
     <img src={nubank} height="70px" widht="168,69" alt="logo"/>
     <img src={nestle} height="113px" widht="177px" alt="logo"/>
     <img src={microsoft} height="59,83px" widht="224,85px" alt="logo"/>
     <img src={brasiljunior} height="148px" widht="224,85px" alt="logo"/>
    </div>
  );
}

export default Partners;