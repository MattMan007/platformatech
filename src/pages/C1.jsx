import React from 'react'
import { Cp1, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C1() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">
          Configurarea incepe cu aceasta fereastra.Selectati “Hi!”
        </p>
        <img src={Cp1} alt="Cp1" className='max-w-[360px] max-h-[600px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/Home" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C2" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C1