import React from "react";

export default props =>{
    return (
        <div>
            <label htmlFor="passoInp ut">Passo: </label>
            <input type="passoInput" type="number" 
                value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
        </div>
    )
}