//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('js/resena.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
    })
    // cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
    // utilizamos una variable, en ésta oportunidad ocupamos el nombre resena
    
.then(resena => {
   console.log(resena[0].name)
    for (let i=0; i < 8; i++){
        let vegano = (resena[i].vegan == "true") ? "Apto para veganos" : "No es apto para veganos"
        
        document.querySelector('.menu_resto').innerHTML +=/*html*/
        `<a href="resto1.html" class="plato">
        <div class="comida">
            <div class="platillo">
                
                <div class="precio_plato">5
                    <i class="iconos">star</i>
                </div>
            </div>
        </div>
        <div class="datos_platillo">
            <h4>hola</h4>
            <span>Ta Potente</span>
            
        </div>
    </a>
    `
    }
})