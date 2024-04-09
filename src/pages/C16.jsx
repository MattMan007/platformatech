import React from 'react'
import { Cp16, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C16() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Odata ce apare acest ecran, configurarea  este completa si ecranul v-a primi  continut.</p>
        <img src={Cp16} alt="Cp16" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C15" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C16