import React from 'react'
import { ArrowDown, Network1, Network2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D3() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:w-[320px] ss:w-[425px] xs:ml-[30px] sm:max-w-[600px] lg:max-w-[1150px]">In meniu intrati in sub-meniul “Network” -- “Network Status”.</p>
        <img src={Network1} alt="Network" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
        <img src={ArrowDown} alt="arrow" className='w-[50px]' />
        <img src={Network2} alt="Network" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />

      </header>

      <div className='flex flex-row'>
        <a href="/D22" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D4" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D3