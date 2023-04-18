import { Contexto } from "../../contexts";
import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { GetJogo} from "../../services/JogoService";

function LoadingPage() {
    const {loaded,setLotoFacil, setMegaSena, setLoaded} = useContext(Contexto)
    useEffect(()=>{
        setTimeout(()=>{
            GetJogo().then((r)=>{
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setLoaded(true)
            })

        }, 3000)

    },[setLoaded, setLotoFacil, setMegaSena])
    return (
        <>

            <div className="loadingPage" style={{ display: loaded ? "none" : "" }}>
                <div className="loading">
                    <h1>
                        Carregando Resultados...
                    </h1>
                </div>
            </div>
          <hr style={{ display: loaded ? "" : "none" }} />
        </>
    )
}
export default LoadingPage;