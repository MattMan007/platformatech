import React from 'react'
import { Cp9, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C9() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Ecranul nostru ar trebui sa arate asa si sa  aibe datele de mai jos</p>
        <img src={Cp9} alt="Cp9" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C8" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C10" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C9