import React from 'react'
import { NetworkStatus, NetworkError1, NetworkError2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D4() {
  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Alegeti una din variantele de mai jos prin a da click pe poza.</p>
        <a href="/D51"><img src={NetworkStatus} alt="internet" className='max-w-[320px] max-h-[500px] my-[10px]' /></a>
        <a href="/D52"><img src={NetworkError1} alt="No internet" className='max-w-[320px] max-h-[500px] my-[10px]' /></a>
        <a href="/D53"><img src={NetworkError2} alt="No internet" className='max-w-[320px] max-h-[500px] my-[10px]' /></a>
      </header>

        <a href="/D3" className='flex justify-start'><ButtonSm text="Inapoi"></ButtonSm></a>
      
    </div>
  )
}

export default D4