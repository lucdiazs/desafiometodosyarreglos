// ARREGLO = Cajita //
const listadetareas = [
    { ID: 16, Tarea: "lucianococina", completada: false }, 
    { ID: 60, Tarea: "lucianojuega", completada: false },
    { ID: 24, Tarea: "lucianoduerme", completada: false }
];

// LINKEAR inputTarea DE JS A HTML //
const inputTarea = document.getElementById("input");
// LINKEAR inputBoton de JS a HTML, es una clase así que va con (".xxx")
const inputBoton = document.querySelector(".button");
const inputHtml = document.getElementById("listaTareas");
const inputTotal = document.getElementById("cuenta");
const inputRealizada = document.getElementById("aprobadas");


// Realizar EventListener, para que cuando se apriete el botón se agregue una tarea
inputBoton.addEventListener("click", () => {
    const informacion = inputTarea.value; // Con esto guardamos la información
    listadetareas.push({ ID: listadetareas.length + 1, Tarea: informacion, completada: false }); // Agregamos nuevo objeto al arreglo, el arreglo es listadetareas
    inputTarea.value = ""; // Con esto reiniciamos lo que estaba escrito en la caja de texto
    imprimirlista();
});

function imprimirlista() {
    let html = "";
    for (let tarea of listadetareas) {
        html += `<li>${tarea.ID}${tarea.Tarea}<button onclick="borrartarea(${tarea.ID})">Borrar</button><button onclick="cambiartarea(${tarea.ID})">Realizado</button></li>`;
    }
    inputTotal.innerHTML = `Total: ${listadetareas.length}`;
    const tareasCompletadas = listadetareas.filter((elemento) => elemento.completada).length;
    inputRealizada.innerHTML = `Realizadas: ${tareasCompletadas}`;
    inputHtml.innerHTML = html; // Inyectar nuestra variable html al documento html
}

// BORRAR UNA TAREA
function borrartarea(ID) {
    const index = listadetareas.findIndex((elemento) => elemento.ID === ID);
    listadetareas.splice(index, 1);
    imprimirlista();
}

// CAMBIAR UNA TAREA
function cambiartarea(ID) {
    const index = listadetareas.findIndex((elemento) => elemento.ID === ID);
    listadetareas[index].completada = !listadetareas[index].completada;
    imprimirlista();
}

imprimirlista();