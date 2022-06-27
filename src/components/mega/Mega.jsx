import React, {useState} from "react";
import gerarNumeros from "./randomNum" 

export default props =>{

    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = gerarNumeros(qtd)
    const [numeros, setNumeros] = useState(numerosIniciais)
    


    return(
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' - ')}</h3>
            <div>
                <label >Quantidade de numeros</label>
                <input type="number" value={qtd} onChange={e => {
                        setQtd(+e.target.value) 
                        setNumeros(gerarNumeros(+e.target.value))}}
                />
            </div>
            {/**<button onClick={_ => setNumeros(gerarNumeros(qtd))}>
                Gerar Numeros
            </button> */}
        </div>
    )
}