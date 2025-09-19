const Produtos = () => {
    //Objetos com a lista de pizzas
    const pizzas =[
        'pizza de muçarela',
        'pizza de calabresa',
        'pizza de portuguesa',
    ]
    // Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                <li>pizza de muçarela</li>
                <li>pizza de calabresa</li>
                <li>pizza de portuguesa</li>
                <li>pizza de quatro quijo</li>
            </ul>
        </div>
    )
}

export default Produtos