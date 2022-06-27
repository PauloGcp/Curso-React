import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            <DiretaFilho nome = "Daniel" idade ={20} bool = {true}></DiretaFilho>
            <DiretaFilho nome= "Gabriel" idade = {27} bool = {false}></DiretaFilho>
        </div>
    )
}