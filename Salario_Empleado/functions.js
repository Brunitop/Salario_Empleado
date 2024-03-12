const opciones = {
    "Salario Por Hora": {
        "Nombre": "text",
        "Horas diarias": "number"
    },
    "Salario Por Mes": {
        "Nombre": "text",
        "Horas diarias": "number"
    }
    // Agrega más métodos según sea necesario
};

function configurarInterfaz(opcionSeleccionada) {
    const inputContainer = document.querySelector('.input');
    inputContainer.innerHTML = ''; // Limpiar el contenido anterior

    // Obtener las especificaciones de entrada para la opción seleccionada
    const especificaciones = opciones[opcionSeleccionada];

    // Crear las cajas de texto según las especificaciones
    for (const campo in especificaciones) {
        const tipo = especificaciones[campo];
        const label = document.createElement('label');
        label.textContent = campo + ": ";
        const input = document.createElement('input');
        input.type = tipo;
        input.name = campo.toLowerCase().replace(/\s+/g, '-'); // Convertir el nombre del campo en nombre de atributo
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        
        // Agregar dos saltos de línea al final de cada caja de texto
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        inputContainer.appendChild(br1);
        inputContainer.appendChild(br2);
    }
}

function inicializarInterfaz() {
    // Crear los botones de opciones y configurar su funcionalidad
    const opcionesContainer = document.querySelector('.options');
    for (const opcion in opciones) {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.addEventListener('click', function() {
            configurarInterfaz(opcion);
        });
        opcionesContainer.appendChild(boton);
    }
}

window.addEventListener('DOMContentLoaded', inicializarInterfaz);