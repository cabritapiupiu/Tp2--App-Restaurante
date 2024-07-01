function Plato(id) {
    localStorage.setItem("plato", id);
}

// Conecto con el archivo JSON 
fetch('json/resto_arg.json')
    // Espero respuesta y la convierto a JSON
    .then(response => response.json())
    // Cuando obtengo la conversión a un array de objetos, puedo comenzar a utilizarlos
    .then(data => {
        let resto = localStorage.getItem("num_resto");

        let menuHTML = "";
        
        for (let i of data) {

            if (i.id == localStorage.getItem("num_resto")) {
            document.querySelector('.header_menu').innerHTML+=
        
        `
            <h3>${i.nombre} </h3>
        `
            }}

        for (let i of data) {
            for (let x = 0; x<8; x++) {
            if (i.id == localStorage.getItem("num_resto")) {
                
                    let vegano = (i.menu[x].vegan === "true") ? "Apto para veganos" : "No es apto para veganos";
                    
                    document.querySelector('.menu_resto'). innerHTML +=
        `
                    <a href="plato.html" id="${i.menu[x].id}" class="plato" onclick="Plato(${i.menu[x].id})">
                        <div class="comida">
                            <div class="platillo">
                            
                            
                            <img src=${i.menu[x].image} class="ajustar" alt="">
                                <div class="precio_plato">$${i.menu[x].price}</div>
                            </div>
                        </div>
                        <div class="datos_platillo">
                            <h4>${i.menu[x].plato}</h4>
                            <span>${i.menu[x].description}</span>
                            <h6>${vegano}</h6>
                        </div>
                    </a>`;
                
            }
        }        }
    })



//     // Conecto con el archivo JSON
// fetch('json/resto_arg.json')
//     // Espero respuesta y la convierto a JSON
//     .then(response => response.json())
//     // Cuando obtengo la conversión a un array de objetos, puedo comenzar a utilizarlos
//     .then(data => {
//         data.forEach(menu=>{
//             if (menu.id == localStorage.getItem("num_resto")) {

                
//                         let vegano = (menu.vegan === "true") ? "Apto para veganos" : "No es apto para veganos"
//                         document.querySelector(".platillo").querySelector("ajustar").setAttribute("src",menu.image)
//                         document.querySelector(".platillo").querySelector(".precio_plato").innerHTML =  `
//                         ${`<i class="iconos">attach_money</i>`.repeat(menu.costo)}
//                         ${`<i class="iconos gris_txt">attach_money</i>`.repeat(3- menu.costo)}`
//                         // document.querySelector(".datos_platillo").querySelector("h6").innerText = vegano
//                         document.getElementById("vegano").innerText=vegano
//                         document.querySelector(".datos_platillo").querySelector("h4").innerText = menu.plato
//                         document.querySelector(".datos_platillo").querySelector("span").innerText = menu.description
//                         document.querySelector(".puntu_resto").innerText = menu.price
//                     }
//                 })
//             }
//         )
    

    
