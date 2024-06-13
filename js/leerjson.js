//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('js/restaurantes.json')
//espero respuesta
.then(response => {
    //almacena los datos obtenidos convertidos a json
    return response.json()
    })
    // cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
    // utilizamos una variable, en ésta oportunidad ocupamos el nombre DATA
    
.then(data => {
   console.log(data[0].name)
    for (let i=0; i < data.length; i++){
        console.log(data[i].nombre)
        document.getElementById('.  restaurantes').innerHTML +=/*html*/`
        <article class="resto">
        <div class="imagen_resto"></div>
        <div class="desc_resto">
            <h4>${data[i].direccion}</h4>
            <h6>${data[i].horario}</h6>
            <p>9:00-23hs</p>
            <div class="precio_val">
                <div class="valoracion">
                    <i class="iconos">${data[i].puntuacion}</i>
                    <i class="iconos">star</i>
                    <i class="iconos">star_half</i>
                    (72)
                </div>
                <div class="precio">
                    <i class="iconos">attach_money</i>
                    <i class="iconos">attach_money</i>
                    <i class="iconos gris_txt">attach_money</i>

                </div>
            </div>
        </div>
        <div class="puntuacion f20">${data[i].puntuacion}</div>
        <div class="distancia">3KM</div>
    </article>`
    }
})