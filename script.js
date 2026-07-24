// =====================
// PANTALLA DE CARGA
// =====================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2000);

});





// =====================
// SIN INTERNET
// =====================


const offline = document.getElementById("offline");


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






// =====================
// WHATSAPP PRODUCTOS
// =====================


const botones =
document.querySelectorAll(".whatsapp");



botones.forEach((boton)=>{


    boton.addEventListener("click",(e)=>{


        e.preventDefault();


        const producto =
        boton.parentElement.querySelector("h3").innerText;



        const mensaje =
        "Hola, me interesa el producto: " + producto;



        const numero =
        "5491171005652";



        window.open(

        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(mensaje),

        "_blank"

        );


    });


});







// =====================
// ANIMACIÓN AL BAJAR
// =====================


const elementos =
document.querySelectorAll(
".producto,.tarjeta,.pregunta,.calidad-items div"
);



function mostrar(){

elementos.forEach((elemento)=>{


let posicion =
elemento.getBoundingClientRect().top;



if(posicion < window.innerHeight - 100){


elemento.style.opacity="1";

elemento.style.transform="translateY(0)";


}


});


}



elementos.forEach((elemento)=>{

elemento.style.opacity="0";

elemento.style.transform="translateY(50px)";

elemento.style.transition="1s";

});



window.addEventListener(
"scroll",
mostrar
);


mostrar();







// =====================
// EFECTO HEADER
// =====================


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY>50){


header.style.background="#ffffffee";


}else{


header.style.background="#ffffffcc";


}



});






console.log(
"🧽 Pérez Limpieza funcionando correctamente"
);
