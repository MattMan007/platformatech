import React, { useState } from 'react'
import { Cp16, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'
import axios from "axios"

function C17() {

  const baseURL = "http://127.0.0.1:3000";

  function handleFinish(){
    axios.get(`${baseURL}/finalizare`);
  };

  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Odata ce apare acest ecran, configurarea este completa si ecranul v-a primi continut.</p>
        <img src={Cp16} alt="Cp16" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C16" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/Home" className='flex justify-end' onClick={handleFinish}><ButtonSm text="Finalizare"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C17