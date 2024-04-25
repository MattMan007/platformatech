import React from 'react'
import { lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D52() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px]">Router-ul nu are semnal sau nu e functional, incearca sa restartezi tot raftul. <br /> <br />In caz ca problema persista contacteaza-ne!</p>
      </header>

      <p className="my-[30px]">Telefon suport: <br /><a href="tel:+40215394507"><span className="spectext">+40215394507</span></a></p>

      <div className='flex flex-row mt-[50px]'>
        <a href="/D4" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
      </div>

    
      
    </div>
  )
}

export default D52