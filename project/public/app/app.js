import { handleStatus, log } from "./ultis/promisse-helpers.js"

document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
    
    .then(itens => {
        log
        return itens
    })
    .catch(log)

    