import React from "react"
import Produtos from "../../data/produtos"
import "./ListaProduto.css"

export default props =>{
    const produtos = Produtos.map((produto, i) =>{
        return (
            <tr key = {produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    }) 
    return (
        <div className="TabelaProdutos">
            <table border ="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos}
                </tbody>
                

            </table>
        </div>
    )
}