document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    // Crear el objeto
    const xhr = new XMLHttpRequest();

    // Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // Carga página
    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);
        }
    }

    // Enviar datos
    xhr.send();
}