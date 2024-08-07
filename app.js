let elementoTexto = document.getElementById("textoUsuario");

// fucion para eliminar el texto despues de que la tag p "texto" tenga el foco
function eliminarTexto() {

    if (elementoTexto.textContent.trim() ==="Ingresa el texto aqui") {
        elementoTexto.setAttribute("style","color:white");
        return elementoTexto.innerHTML = "";
    }
}
// fucion para regresar el texto despues de que la tag p "texto" pierda el foco
function regresarTexto(){

    if(elementoTexto.textContent.trim() === ""){
        return document.getElementById("textoUsuario").innerText="Ingresa el texto aqui";
    } 
}
//funcion para copiar la respuesta en el portapapeles:

