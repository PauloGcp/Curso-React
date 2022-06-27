import React from "react";
import "./App.css"

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React (arrow) </h1>

            <div className="cards">

                <Card titulo="#13 - Desafio Mega" color="#B0006E">
                    <Mega qtd = {2}></Mega>
                      
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial ={10}></Contador>
                      
                </Card>
                
                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                   <Input></Input>
                      
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                      
                </Card>
                
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                      
                </Card>
                
                <Card titulo="#08 - Renderização Condicional" color="#3A9AD9">
                    <ParOuImpar numero = {20}/>  
                    <UsuarioInfo usuario = {{nome:"Fernando"}}/>
                      
                </Card>

                <Card titulo="#07 - Desafio Produtos" color="#3A9AD9">
                    <ListaProdutos/>        
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>        
                </Card>

                <Card titulo="#05 - Componenete com filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                        <FamiliaMembro nome="Ana" ></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio aleatorio" color="#FA6900">
                    <Random min={1} max={100} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parametro" color="#E8B71A">
                    <ComParametro
                        titulo="segundo componente"
                        subtitulo="muito legal">
                    </ComParametro>
                </Card>

                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}