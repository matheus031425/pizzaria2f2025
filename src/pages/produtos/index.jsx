//ferramenta de consumo de rotas (endpoints) do beckend
import axios from "axios"
// Hooks do react - estado e renderização 
import { useState, useEffect } from "react"

const Produtos = () => {
    // Estado com lista de pizzas
const [pizzas, setPizzas] = useState(['calabresa', 'Muçarela', 'Baiana'])

    // Consumo de um endpoint com as pizzas
    // Get - buscar os dados do endpoint ou rota
    // THEN - é uma promise - método assíncrono
    // catch - tratamento de erros
    useEffect(()=>{
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response=>{
        console.log(response.data.data)
        setPizzas(response.data.data)
    })
    .catch(errors=>console.log(errors))
    } ,[])

    // Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza=><li>{pizza.nome}</li>)

    return (
        <div>
            <ul>
              {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos