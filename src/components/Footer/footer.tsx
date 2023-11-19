import React from "react";
import CTJLogo from '../../images/Organizadores/ctj.jpg';
import JunioresLogo from '../../images/Organizadores/juniores.jpg';
import './style.css';


export default function Footer({classname}:{classname:string}) {
    return (
        <>
        <div className="centralizar">
          <div className="logo-organizadores">
            <img className='ctj' src={CTJLogo} alt="ctjunior logo" />
            <img className='juniores' src={JunioresLogo} alt="juniores logo" />
          </div>
        </div>
        </>
    );
}