/* eslint-disable react/prop-types */

const FuncComponent = ({text, salario}) => {

    console.log(text, salario)
    return(
        <>
            <h1>Componente de {text}</h1>
            <p>Paragraph ejemplo</p>
            <h1>${salario}</h1>
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
                <li>Elemento 4</li>
                <li>Elemento 5</li>
            </ul>
        </>
    )
}

export default FuncComponent