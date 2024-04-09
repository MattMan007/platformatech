import React from 'react'
import { lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D53() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Contacteaza-ne in callcenter si te vom ajuta noi!</p>
      </header>

      <p className="my-[30px]">Telefon suport: <br /> <span className="spectext">+40215394507</span></p>

      <div className='flex flex-row mt-[50px]'>
        <a href="/D4" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
      </div>

    
      
    </div>
  )
}

export default D53