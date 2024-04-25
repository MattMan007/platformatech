import React from 'react'
import { Network1, OpenNetwork, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D73() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">In meniu intrati in sub-meniul “Network” -- “ Open Network Settings”.</p>
        <img src={Network1} alt="Remote" className='max-w-[320px] max-h-[500px] my-[10px]' />
        <img src={OpenNetwork} alt="Remote" className='max-w-[320px] max-h-[500px] my-[10px]' />

      </header>

      <div className='flex flex-row'>
        <a href="/D63" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D83" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D73