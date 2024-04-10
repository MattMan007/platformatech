import React, {useState, useRef} from 'react'
import { NetworkStatus, NetworkError1, NetworkError2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D4() {

  const [select, setSelect] = useState(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1(){
    setSelect("/D51");
    inputRef1.current.focus();
    inputRef1.current.style.border = "2px solid #D3AC2B";
    inputRef2.current.style.border = "";
    inputRef3.current.style.border = "";
  }
  function handleClick2(){
    setSelect("/D52");
    inputRef2.current.focus();
    inputRef1.current.style.border = "";
    inputRef2.current.style.border = "2px solid #D3AC2B";
    inputRef3.current.style.border = "";
  }
  function handleClick3(){
    setSelect("/D53");
    inputRef3.current.focus();
    inputRef1.current.style.border = "";
    inputRef2.current.style.border = "";
    inputRef3.current.style.border = "2px solid #D3AC2B";
  }


  return (
    <div className="flex flex-col items-center">
      <header className='flex flex-col items-center'>
        <a href="/Home"><img src={lineLogo} alt="Line Logo" /></a>
        <p className="flex justify-center">Alegeti una din variantele de mai jos prin a da click pe poza.</p>
        <img src={NetworkStatus} alt="internet" onClick={handleClick1} ref={inputRef1} className='max-w-[340px] max-h-[500px] p-2' />
        <img src={NetworkError1} alt="No internet" onClick={handleClick2} ref={inputRef2} className='max-w-[340px] max-h-[500px] p-2' />
        <img src={NetworkError2} alt="No internet" onClick={handleClick3} ref={inputRef3} className='max-w-[340px] max-h-[500px] p-2' />
      </header>

      <div className='flex flex-row mt-[50px]'>
        <a href="/D3" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi" disabled={select == null ? true : false}></ButtonSm></a>
        <a href={select} className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
      </div>
      
    </div>
  )
}

export default D4