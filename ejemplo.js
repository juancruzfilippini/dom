const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
  event.preventDefault();

  const { name, email, password } = event.target;

  console.log(name.value, email.value, password.value);

  if (name.value.length === 0) alert("El nombre no es válido");
};

form.addEventListener("submit", enviarFormulario);

const section = document.getElementById("seccion");
const titulo2 = document.querySelector("#tituloForm");

titulo2.addEventListener("click", (event) => {
  console.log(event.bubbles, event.cancelBubble);
  event.stopPropagation();
  console.log(event.bubbles, event.cancelBubble);
  console.log("CLICK EN EL TÍTULO");
});

section.addEventListener(
  "click",
  () => {
    console.log("CLICK EN LA SECCIÓN");
  },
  {
    capture: true,
  }
);
