import React from 'react'
import { Cp5, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C5() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Pentru meniul de “Display Orientation” ,  daca avem optiunea vom alege “AUTO”, daca nu exista aceasta optiune alegem varianta potrivita pozitionarii ecranului</p>
        <img src={Cp5} alt="Cp5" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C4" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C6" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C5