const botonRegistrar = document.getElementById("agregar");
const tabla = document.getElementById("tablaCarro").getElementsByTagName('tbody')[0];  
let filaEditando = null;  

botonRegistrar.onclick = function(event) {
    event.preventDefault(); 
    if (filaEditando) {
        actualizarCarro();  
    } else {
        agregarCarro(); 
    }
};

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

     let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("btn");
    botonEditar.classList.add("btn-warning");
    botonEditar.onclick = function() {
        // aqui se wdevuelve al form los datos de la tabla
        document.getElementsByName("nombre")[0].value = nombre;
        document.getElementsByName("año")[0].value = año;
        document.getElementsByName("contra")[0].value = precio;
        document.getElementsByName("registro")[0].value = registro;
        document.getElementById("status").value = estado;
        document.querySelector(`input[name="tipo"][value="${tipo}"]`).checked = true;

        filaEditando = fila;
    };
    

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

function actualizarCarro() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let año = document.getElementsByName("año")[0].value;
    let precio = document.getElementsByName("contra")[0].value;
    let registro = document.getElementsByName("registro")[0].value;
    let estado = document.getElementById("status").value;
    let tipo = document.querySelector('input[name="tipo"]:checked')?.value;

    filaEditando.cells[0].textContent = nombre;
    filaEditando.cells[1].textContent = año;
    filaEditando.cells[2].textContent = precio;
    filaEditando.cells[3].textContent = registro;
    filaEditando.cells[4].textContent = estado;
    filaEditando.cells[5].textContent = tipo;

    document.querySelector("form").reset();
    
    filaEditando = null;
}
