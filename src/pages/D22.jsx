import React from 'react'
import { Remote2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D22() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Pentru Navigarea meniului vom folosi &nbsp;<span className='text-red-600'> SAGETILE</span>&nbsp; si pentru a selecta vom folosi tasta &nbsp;<span className='text-green-600'> ENTER</span>.</p>
        <img src={Remote2} alt="Remote" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/D2" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D3" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D22