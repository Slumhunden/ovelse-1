document.body.innerHTML += "Hello Javascript!";
// alert("Hello Dat.js);");
//console.log("Hello Dat.js");
//console.log(" Buenos Dias Studentos");
//console.log("Los codos maximus");


function sayHello() {
    document.querySelector("h3").textContent = "hej " + document.querySelector("input").value
}
document.querySelector("button").addEventListener("click",sayHello)
