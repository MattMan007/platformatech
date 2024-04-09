import ButtonBg from "../components/ButtonBg";
import { Logo, lineLogo } from "../assets";

function Home(){
    return(
        <div className="flex flex-col items-center">
            <header className="flex flex-col items-center">
                <img src={Logo} alt="Logo" />
                <p className="flex justify-center my-[10px]">
                    Alegeti mai jos daca CONFIGURATI un ecran sau DIAGNOSTICATI un ecran nefunctional
                </p>
            </header>

            <a href="/C1"><ButtonBg text="Configurare"></ButtonBg></a>
            <a href="/D1"><ButtonBg text="Diagnoza"></ButtonBg></a>
            <a href="/Info"><ButtonBg text="Informatii"></ButtonBg></a>

            <img src={lineLogo} alt="Line Logo" className="size-2em" />
        </div>
    );
}

export default Home