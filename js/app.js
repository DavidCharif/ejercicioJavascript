var nombre = prompt("Cual es su nombre?")


fullString =("Hello " + nombre +  " welcome to the world");
/*document.write(fullString);*/ 


let edad = prompt("Cual es su edad");

const anno = 2021;
let fecha_nacimiento = anno - edad;

var x = document.getElementById("resultado");
var conclu = document.getElementById("conclu");
if (edad < 30){
conclu.innerHTML = "Usted tiene menos de 30";
} else if (edad < 40){
    conclu.innerHTML = "Usted tiene menos de 40";
} else {
    conclu.innerHTML = "Usted tiene mas de 50";
}
x.innerHTML = fecha_nacimiento;
var button = document.getElementById("button");
var body = document.getElementById("body")
document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("button").innerHTML = "YOU CLICKED ME!";
    document.body.style.backgroundColor = "#AA0000";
  }
/*
if (edad < 30){
    document.write("<p> Su año de nacimiento es <p> " + fecha_nacimiento + 
    "<p> Y tiene menos de 30");
    } else if (edad < 40){
        document.write("<p>Tiene mas de 30 y nacio en el año</p> " + fecha_nacimiento);    
    }

     else {
    document.write("<p id='var1'>Tiene mas de 40 y nacio en el año</p> " + fecha_nacimiento);
}
*/
