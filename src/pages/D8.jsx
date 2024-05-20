import React, {useEffect} from 'react'
import { ConServ, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'
import axios from 'axios';

function D8() {
  
  const baseURL = "http://127.0.0.1:3000";

  useEffect(() =>{
    axios.get(`${baseURL}/count`);
  });

  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:w-[320px] ss:w-[425px] sm:max-w-[600px] lg:max-w-[1150px] my-[20px] ml-[20px]">Introduceti ca Server Adress: ds4.dsaas.ro, si selectati SAVE.</p>
          <img src={ConServ} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px]' />
        </header>

        <p className="my-[30px]">Daca este deja introdusa contactati-ne!<br /><a href="tel:+40215394507"><span className="spectext">+40215394507</span></a></p>


        <div className='flex flex-row'>
          <a href="/D7" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D8