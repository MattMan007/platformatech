import React from 'react'
import { Remote, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D63() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Intra iar in meniul ecranului apasand butonul “MENU” de pe telecomanda.</p>
        <img src={Remote} alt="Remote" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/D53" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/D73" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D63