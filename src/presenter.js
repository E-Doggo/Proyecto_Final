// import sumar from "./sumador";

const materia = document.querySelector("#materia");
const tarea = document.querySelector("#tarea");
const form = document.querySelector("#registrar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + materia.value +": "+ tarea.value + " Anotado! </p>";
});
