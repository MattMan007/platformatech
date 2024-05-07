import React, {useState, useRef} from 'react'
import { NetworkStatus, NetworkError1, NetworkError2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D94() {

  const [select, setSelect] = useState(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef4 = useRef(null);

  function handleClick1(){
    setSelect("/D51");
    inputRef1.current.focus();
    inputRef1.current.style.border = "2px solid #D3AC2B";
    inputRef2.current.style.border = "";
    inputRef4.current.style.display = "block";

  }
  function handleClick2(){
    setSelect("/D52");
    inputRef2.current.focus();
    inputRef1.current.style.border = "";
    inputRef2.current.style.border = "2px solid #D3AC2B";
    inputRef4.current.style.display = "block";
  }



  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px] my-[10px]">Verificati mesajul din chenarul de pe ecran si selectati de mai jos varianta care se potriveste. Dupa selectare, apasati butonul de INAINTE.</p>
        <img src={NetworkStatus} alt="internet" onClick={handleClick1} ref={inputRef1} className='xs:w-[320px] ss:w-[425px] max-h-[500px] p-2' />
        <img src={NetworkError1} alt="No internet" onClick={handleClick2} ref={inputRef2} className='xs:w-[320px] ss:w-[425px] max-h-[500px] p-2' />
      </header>

      <div className='flex flex-row mt-[50px]'>
        <a href="/D3" className='flex justify-start'><ButtonSm text="Inapoi" disabled={select == null ? true : false}></ButtonSm></a>
        <a href={select} className={`ml-[40px] justify-end hidden`} ref={inputRef4} ><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D94