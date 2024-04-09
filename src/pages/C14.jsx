import React from 'react'
import { Cp14, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C14() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Pentru a ajunge in acest meniu vom  apasa pe telecomanda butonul de  “HOME” , vom selecta optiunea “Player”</p>
        <img src={Cp14} alt="Cp14" className='max-w-[360px] max-h-[500px]' />
      </header>

      <div className='flex flex-row'>
        <a href="/C13" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/C15" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default C14