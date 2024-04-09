import React from 'react'
import { Cp13, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C13() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">In urma terminarii configurarii <br /> vom  vedea acest ecran.</p>
        <img src={Cp13} alt="Cp13" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C12" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C14" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C13