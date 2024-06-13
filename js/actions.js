// console.log("hola");
// let comida=document.getElementById("comida")
// console.log(comida.innerText)

// let lista=document.querySelector("li")
// console.log(lista)

// let listas=document.querySelectorAll("li")
// console.log(listas[2].innerText)

// let titulo2=document.querySelector("#comida")
// console.log(titulo2)

// let iconos=document.querySelector(".iconos")
// console.log(iconos)

// let classlistas =Document.getElementByClassName("iconos")
// console.log(classlistas[0].innerHTML)

//getElementById es unico no debuelbe elemntos
//querySelector muestra el primero que encuentra

// const listaElementos = document.querySelectorAll("ul > li , ul >h2");

// listaElementos.forEach((elemento) => {
//   console.log(elemento);
// });
// //creamos el elmento Li mediante el metodo createElement
// let listaDesordenada = document.createElement("ul");
// document.body.appendChild(listaDesordenada);
// //l
// let listaElemento1 = document.createElement("li");
// listaElemento1.textContent = "Es gratis";
// listaDesordenada.appendChild(listaElemento1);

// let listaElemento2 = document.createElement("li");
// listaElemento2.textContent = "Es impresionante";
// listaDesordenada.appendChild(listaElemento2);
// listaDesordenada.removeChild(listaElemento2);


// function borrar(){
//     listaDesordenada.removeChild(listaElemento2)
// }
// let borrarbtn =document.getElementById


// //hola aca continuamoos archivo 03 ppipipip

// let cambioh1 = document.querySelector("h1")
// cambioh1.style.backgroundColor="red"
// cambioh1.style.fontSize="50px"


// cambioh1.classList.add("iconos")
// cambioh1.classList.toggle("iconos")

let catidad = document.getElementById("cantidad") 
let  cant=1
let btnrestar=document.getElementById("restar")
let btnsumar=document.getElementById("sumar")
let subtotal=document.getElementById("subtotal")
let precioUnit=document.querySelector(".puntu_resto")
let unit=1890
precioUnit.innerText=`$${unit}`
cantidad.innerText=cant
btnrestar.innerText="block"
function restar(){
  if (cant>1){
    btnrestar.innerText="remove";
    cant=cant-1
    cantidad.innerText=cant
  }
  if(cant==1){
    btnrestar.innerText="block"
  }
  if(cant<15){
    btnsumar.innerText="add"
  }
}
function sumar(){
  if(cant<15){
    btnsumar.innerText="add"
    cant=cant+1    
    cantidad.innerText=cant
  }
  if(cant==15){
    btnsumar.innerText="block"
  }
  if(cant>1){
    btnrestar.innerText="remove";
  }

}