// ======================
// PANTALLA DE CARGA
// ======================


window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2500);


});






// ======================
// SIN INTERNET
// ======================


const offline =
document.getElementById("offline");


function revisarConexion(){


if(!navigator.onLine){

offline.style.display="flex";


}else{


offline.style.display="none";


}


}



window.addEventListener(
"offline",
revisarConexion
);



window.addEventListener(
"online",
revisarConexion
);



revisarConexion();









// ======================
// FILTRO PRODUCTOS
// ======================


const botones =
document.querySelectorAll(".categoria");


const productos =
document.querySelectorAll(".producto");



botones.forEach(boton=>{


boton.addEventListener("click",()=>{


botones.forEach(b=>{

b.classList.remove("activo");

});


boton.classList.add("activo");



let categoria =
boton.dataset.cat;



productos.forEach(producto=>{


let tipo =
producto.dataset.tipo;



if(
categoria==="todos" ||
tipo===categoria
){


producto.style.display="block";


}else{


producto.style.display="none";


}



});


});


});









// ======================
// WHATSAPP PRODUCTOS
// ======================


const consultar =
document.querySelectorAll(".consultar");



consultar.forEach(boton=>{


boton.addEventListener("click",()=>{


let producto =
boton.parentElement.querySelector("h3").innerText;



let mensaje =
"Hola Pedro Clean, me interesa el producto: "
+
producto;



let numero =
"5491171005652";



window.open(

"https://wa.me/"
+
numero
+
"?text="
+
encodeURIComponent(mensaje),

"_blank"

);



});


});








// ======================
// SISTEMA DE ESTRELLAS
// ======================


const estrellas =
document.querySelectorAll(".estrellas span");


let puntuacion = 0;



estrellas.forEach(estrella=>{


estrella.addEventListener("click",()=>{


puntuacion =
estrella.dataset.star;



estrellas.forEach(e=>{


if(e.dataset.star<=puntuacion){

e.innerHTML="★";


}else{


e.innerHTML="☆";


}


});


});


});









// ======================
// CREAR OPINIONES
// ======================


const botonOpinion =
document.getElementById("enviar-opinion");


botonOpinion.addEventListener("click",()=>{


let comentario =
document.getElementById("comentario").value;



if(puntuacion==0){


alert("Elegí una cantidad de estrellas");


return;


}




if(comentario.trim()==""){


alert("Escribí un comentario");


return;


}




let caja =
document.createElement("div");


caja.className="opinion-usuario";



caja.innerHTML=`

<h3>
${"★".repeat(puntuacion)}
</h3>

<p>
${comentario}
</p>

`;




document
.getElementById("lista-opiniones")
.appendChild(caja);




document.getElementById("comentario").value="";



puntuacion=0;



estrellas.forEach(e=>{

e.innerHTML="☆";

});



});










// ======================
// ANIMACIONES AL SCROLL
// ======================


const elementos =
document.querySelectorAll(
".tarjeta,.producto,.pregunta,.calidad-items div"
);



elementos.forEach(elemento=>{


elemento.style.opacity="0";

elemento.style.transform=
"translateY(50px)";

elemento.style.transition=
"1s";


});





function aparecer(){


elementos.forEach(elemento=>{


let posicion =
elemento.getBoundingClientRect().top;



if(posicion <
window.innerHeight-100){


elemento.style.opacity="1";

elemento.style.transform=
"translateY(0)";


}



});


}



window.addEventListener(
"scroll",
aparecer
);


aparecer();








console.log(
"🧽 Pedro Clean iniciado correctamente"
);
