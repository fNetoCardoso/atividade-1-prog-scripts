import trevo from "../../assets/trevo-lotofacil.png"
import "./LotoFacil.css";
import { Contexto } from "../../contexts";
import { useContext } from "react";
function LotoFacil() {
    const { lotoFacil, loaded } = useContext(Contexto)

    return (
        <>

            <div className="container" style={{ display: loaded ? "" : "none" }}>
                <div className="col-1">
                    <div className="header-container">
                        <div className="image-header">
                            <img src={trevo} alt="" />
                        </div>
                        <div className="logo-header">
                            <h3 >LOTOFÁCIL</h3>
                        </div>

                    </div>
                    <div className="descricao">
                        Estimativa de prêmio do próximo concurso. Sorteio em {lotoFacil.dataApuracao}
                    </div>
                    <div className="valor">
                        <h2>{loaded?lotoFacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
                    </div>

                </div>


                <div className="col-2">
                    <div className="">
                        <ul>
                            {lotoFacil.dezenas ? lotoFacil.dezenas.map((el) =>
                                <li>
                                    {el}
                                </li>
                            ) : ""}

                        </ul>
                    </div>
                    <h1 className="numero-vencedor">
                        {lotoFacil.acumulado ? "ACUMULOU!" : lotoFacil.quantidadeGanhadores + " GANHADORES!!"}
                    </h1>

                    <p className="descricao-jogo">
                        Concurso {lotoFacil.numeroDoConcurso} - {lotoFacil.dataPorExtenso}
                    </p>
                </div>

            </div>

        </>




    )
}
export default LotoFacil;