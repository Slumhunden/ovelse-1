document.body.innerHTML += "Tak for dit svar!";
// alert("Hello Dat.js);");
//console.log("Hello Dat.js");
//console.log(" Buenos Dias Studentos");
//console.log("Los codos maximus");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("#Navn").value;
}
document.querySelector("button").addEventListener("click", sayHello);

function sayNumber() {

    if (document.querySelector("#Alder").value <30)
      document.querySelector("h4").textContent =
        document.querySelector("#Alder").value + ", det er ingen alder! ";
    else document.querySelector("h4").textContent = document.querySelector("#Alder").value + ", shit gik du i klasse med Tollundmanden?";
}
document.querySelector("#mark").addEventListener("click", sayNumber);
function sayEmail() {
    document.querySelector("h2").textContent = "Din mail er: " + document.querySelector("#mail").value;
}
document.querySelector("#meal").addEventListener("click", sayEmail);