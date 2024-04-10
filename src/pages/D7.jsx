import React from 'react'
import { SNS, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D7() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Selectati "Connect to Server"</p>
        <img src={SNS} alt="Remote" className='max-w-[320px] max-h-[500px]' />
      </header>

      <div className='flex flex-row mt-[40px]'>
        <a href="/D61" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D8" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D7