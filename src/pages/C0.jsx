import React from 'react'
import { Remote2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C0() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px]">Pentru Navigarea meniului vom folosi <span className='text-red-600 block'> SAGETILE</span> si pentru a selecta vom folosi tasta <span className='text-green-600'> ENTER</span>.</p>
        <img src={Remote2} alt="Remote" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/Home" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C1" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C0