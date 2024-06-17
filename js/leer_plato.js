//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('js/plato.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
    })
    // cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
    // utilizamos una variable, en ésta oportunidad ocupamos el nombre plato
    
.then(plato => {
   console.log(plato[0].name)
    for (let i=0; i < 8; i++){
        let vegano = (plato[i].vegan == "true") ? "Apto para veganos" : "No es apto para veganos"
        
        document.querySelector('.menu_resto').innerHTML +=/*html*/
        `<a  href="resto1.html"class="plato">
        <div class="comida">
            <div class="platillo">

            <img src=${plato[i].image} class="ajustar"  alt="">
                <div class="precio_plato">${plato[i].price}</div>
            </div>
        </div>
        <div class="datos_platillo">
            <h4>${plato[i].plato}</h4>
            <span>${plato[i].description}</span>
            <h6>${vegano}</h6>
            
        </div>
    </a>      
    `
    }
})