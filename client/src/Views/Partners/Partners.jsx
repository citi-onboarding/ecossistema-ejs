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
  PartnersComponent,
} from '../../Components';


function Partners() {
  return (
    <div className="Partners-div">
     <div className="PartnersContent"> 
       <h1 className="PartnersTitle" >Empresas parceiras do ecossistema </h1>
       <div className="PartnersGrid">
         <PartnersComponent partnericon={nubank} itemName="item1"/>
         <PartnersComponent partnericon={nestle} itemName="item2"/>
         <PartnersComponent partnericon={microsoft} itemName="item3"/>
         <PartnersComponent partnericon={brasiljunior} itemName="item4"/>
         <PartnersComponent partnericon={google} itemName="item5"/>
         <PartnersComponent partnericon={citipartner} itemName="item6"/>
         <PartnersComponent partnericon={inter} itemName="item7"/>
         <PartnersComponent partnericon={jewc} itemName="item8"/>
         <PartnersComponent partnericon={nubank} itemName="item9"/>
         <PartnersComponent partnericon={nestle} itemName="item10"/>
         <PartnersComponent partnericon={microsoft} itemName="item11"/>
         <PartnersComponent partnericon={brasiljunior} itemName="item12"/>
       </div>
      </div> 
    </div>
  );
}

export default Partners;