var codificar = document.querySelector("#btcodificar")
var decodificar = document.querySelector("#btdecodificar")
var output = document.querySelector("#Texto")
var formulario = document.querySelector("#formzz")

function eventoForm(Event) {
    Event.preventDefault()
}

formulario.addEventListener("submit", eventoForm)

codificar.addEventListener("click",  () => {
    output.value = btoa(output.value);
})

decodificar.addEventListener("click",  () => {
    output.value = atob(output.value);
})
