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


function Partners() {
  return (
    <div className="Partners-div">  
     <h1 className="PartnersTitle" >Empresas parceiras do ecossistema </h1>
     <img src={nubank} height="70px" widht="168,69" alt="logo" className="nubank1"/>
     <img src={nestle} height="113px" widht="177px" alt="logo" className="nestle1"/>
     <img src={microsoft} height="59,83px" widht="224,85px" alt="logo" className="microsoft1"/>
     <img src={brasiljunior} height="148px" widht="224,85px" alt="logo" className="brasiljunior1"/>
     <img src={google} height="113" widht="113" alt="logo" className="google"/>
     <img src={citipartner} height="113px" widht="113px" alt="logo" className="citipartner"/>
     <img src={inter} height="60,63px" widht="170px" alt="logo" className="inter"/>
     <img src={jewc} height="148px" widht="166,72px" alt="logo"className="jewc"/>
     <img src={nubank} height="70px" widht="168,69" alt="logo" className="nubank2"/>
     <img src={nestle} height="113px" widht="177px" alt="logo"className="nestle2"/>
     <img src={microsoft} height="59,83px" widht="224,85px" alt="logo"className="microsoft2"/>
     <img src={brasiljunior} height="148px" widht="224,85px" alt="logo"className="brasiljunior2"/>
    </div>
  );
}

export default Partners;