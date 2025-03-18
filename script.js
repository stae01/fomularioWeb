const botonRegistrar = document.getElementById("agregar");
const tabla = document.getElementById("tablaCarro").getElementsByTagName('tbody')[0];  


botonRegistrar.onclick = function(event) {
    event.preventDefault(); 

}


function agregarCarro() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let año = document.getElementsByName("año")[0].value;
    let precio = document.getElementsByName("contra")[0].value;
    let registro = document.getElementsByName("registro")[0].value;
    let estado = document.getElementById("status").value;
    let tipo = document.querySelector('input[name="tipo"]:checked')?.value;
    
    if (nombre === "" || año === "" || precio === "" || registro === "" || !tipo) {
        alert("Por favor, completa todos los campos.");
        return;
    }

     // Crear una nueva fila en la tabla
     let fila = document.createElement("tr");

     // Crea la celdas 
     let celdaNombre = document.createElement("td");
     celdaNombre.textContent = nombre;
     
     let celdaAño = document.createElement("td");
     celdaAño.textContent = año;
     
     let celdaPrecio = document.createElement("td");
     celdaPrecio.textContent = precio;
     
     let celdaRegistro = document.createElement("td");
     celdaRegistro.textContent = registro;
     
     let celdaEstado = document.createElement("td");
     celdaEstado.textContent = estado;
     
     let celdaTipo = document.createElement("td");
     celdaTipo.textContent = tipo;
     
     // aqui se crea el espacio para el edtiar y eliminar
     let celdaAcciones = document.createElement("td");

     // Eliminar botón
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-danger");
    botonEliminar.onclick = function() {
        fila.remove();
    };

    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonEliminar);

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaAño);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaRegistro);
    fila.appendChild(celdaEstado);
    fila.appendChild(celdaTipo);
    fila.appendChild(celdaAcciones);

    tabla.appendChild(fila);

    // se limopia el formulario después de agregar
    document.querySelector("form").reset();
}