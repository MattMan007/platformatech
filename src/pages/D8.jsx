import React from 'react'
import { ConServ, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D8() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px]">Introduceti ca Server Adress: ds4.dsaas.ro, si selectati SAVE.</p>
        <img src={ConServ} alt="Remote" className='max-w-[320px] max-h-[500px]' />
      </header>

      <p className="my-[30px]">Daca este deja introdusa contactati-ne!<br /><a href="tel:+40215394507"><span className="spectext">+40215394507</span></a></p>


      <div className='flex flex-row'>
        <a href="/D7" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D8