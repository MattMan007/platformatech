import React from 'react'
import { Network1, Network2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D2() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">In meniu intrati in sub-meniul “Network” -- “Network Status”.</p>
        <img src={Network1} alt="Remote" className='max-w-[320px] max-h-[500px] my-[10px]' />
        <img src={Network2} alt="Remote" className='max-w-[320px] max-h-[500px] my-[10px]' />

      </header>

      <div className='flex flex-row'>
        <a href="/D2" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D4" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D2