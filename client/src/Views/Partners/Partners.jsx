import React, { useEffect } from 'react'
import './Partners.css'
import {
  PartnersComponent,
  UnderlineTitle
} from '../../Components';

import axios from 'axios';

import { useState } from 'react';


function Partners() {
  const [partners, setpartners] = useState([])

  const getpartners = async () => {
    const res = await axios.get(`http://localhost:1337/parcerias`);
    const partners = res.data;
    console.log(res.data);
    setpartners(partners);
  };
  useEffect (() => {
    getpartners();
  }, [])
  return (
    <div className="Partners-div">
     <div className="PartnersContent"> 
       <UnderlineTitle title="Empresas parceiras do ecossistema"/>
       <div className="PartnersGrid">
        {partners?.map(({logo}) => (
         <PartnersComponent partnericon={logo?.url}/>
         ))}
        </div>
      </div> 
    </div>
  );
}

export default Partners;