const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("menu-show");
});

// // Agregar un listener de clics al documento
// document.addEventListener("click", function (event) {
//   // Comprobar si el clic ocurrió dentro o fuera del menú
//   if (
//     !toggleMenuElement.contains(event.target) &&
//     event.target !== mainMenuElement
//   ) {
//     // Si el clic ocurrió fuera del menú, ocultarlo
//     mainMenuElement.style.display = "none";
//   }
// });
