var salariosPorCargo = {
    "Jefe de departamento": 750,
    "Gerente": 600,
    "Supervisor": 450,
    "Empleado": 300
};

function SalarioPorDia() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <div class="input-container">
            <label for="id-empleado">ID Empleado:</label>
            <input type="text" id="id-empleado" name="id-empleado">
        </div>
        <br></br>
        <div class="input-container">
            <label for="horas-trabajadas">Horas trabajadas:</label>
            <input type="text" id="horas-trabajadas" name="horas-trabajadas">
        </div>
        <br></br>
        <div class="input-container">
            <label for="dias-trabajados">Días trabajados:</label>
            <input type="text" id="dias-trabajados" name="dias-trabajados">
        </div>
        <br></br>
        <div class="input-container">
            <label for="tipo-cargo">Tipo de Cargo:</label>
            <select id="tipo-cargo">
                <option value="Jefe de departamento">Jefe de departamento</option>
                <option value="Gerente">Gerente</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Empleado">Empleado</option>
            </select>
        </div>
        <br></br>
        <button id="calcularSalarioPorDia" class="calculate-button">Calcular</button>
        <div id="resultado"></div>
    `;

    document.getElementById("calcularSalarioPorDia").onclick = function () {
        calcularSalarioPorDia();
    };
}

function calcularSalarioPorDia() {
    var resultadoElement = document.getElementById("resultado");
    var idEmpleado = document.getElementById("id-empleado").value;
    var horasTrabajadas = parseFloat(document.getElementById("horas-trabajadas").value);
    var diasTrabajados = parseFloat(document.getElementById("dias-trabajados").value);
    var tipoCargo = document.getElementById("tipo-cargo").value;

    if (isNaN(horasTrabajadas) || isNaN(diasTrabajados) || horasTrabajadas <= 0 || diasTrabajados <= 0) {
        resultadoElement.innerText = "Error: Las horas y días trabajados deben ser números positivos.";
        return;
    }

    var salarioPorHora = salariosPorCargo[tipoCargo];
    if (salarioPorHora === undefined) {
        resultadoElement.innerText = "Error: Tipo de cargo no válido.";
        return;
    }

    var salarioTotal = salarioPorHora * horasTrabajadas * diasTrabajados;
    resultadoElement.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana.";
}

function SalarioPorMes() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <div class="input-container">
            <label for="id-empleado">ID Empleado:</label>
            <input type="text" id="id-empleado" name="id-empleado">
        </div>
        <br></br>
        <div class="input-container">
            <label for="tipo-cargo">Tipo de Cargo:</label>
            <select id="tipo-cargo">
                <option value="Jefe de departamento">Jefe de departamento</option>
                <option value="Gerente">Gerente</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Empleado">Empleado</option>
            </select>
        </div>
        <br></br>
        <button id="calcularSalarioPorMes" class="calculate-button">Calcular</button>
        <div id="resultado"></div>
    `;

    document.getElementById("calcularSalarioPorMes").onclick = function () {
        calcularSalarioPorMes();
    };
}

function calcularSalarioPorMes() {
    var resultadoElement = document.getElementById("resultado");
    var idEmpleado = document.getElementById("id-empleado").value;
    var tipoCargo = document.getElementById("tipo-cargo").value;

    var salarioPorMes = salariosPorCargo[tipoCargo];
    if (salarioPorMes === undefined) {
        resultadoElement.innerText = "Error: Tipo de cargo no válido.";
        return;
    }

    var salario = salarioPorMes * 30;
    resultadoElement.innerText = "El empleado " + idEmpleado + " gana $" + salario + " mensuales.";
}

function SalarioPorHora() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <div class="input-container">
            <label for="id-empleado">ID Empleado:</label>
            <input type="text" id="id-empleado" name="id-empleado">
        </div>
        <br></br>
        <div class="input-container">
            <label for="horas-trabajadas">Horas trabajadas:</label>
            <input type="text" id="horas-trabajadas" name="horas-trabajadas">
        </div>
        <br></br>
        <div class="input-container">
            <label for="tipo-cargo">Tipo de Cargo:</label>
            <select id="tipo-cargo">
                <option value="Jefe de departamento">Jefe de departamento</option>
                <option value="Gerente">Gerente</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Empleado">Empleado</option>
            </select>
        </div>
        <br></br>
        <button id="calcularSalarioPorHora" class="calculate-button">Calcular</button>
        <div id="resultado"></div>
    `;

    document.getElementById("calcularSalarioPorHora").onclick = function () {
        calcularSalarioPorHora();
    };
}

function calcularSalarioPorHora() {
    var resultadoElement = document.getElementById("resultado");
    var idEmpleado = document.getElementById("id-empleado").value;
    var horasTrabajadas = parseFloat(document.getElementById("horas-trabajadas").value);
    var tipoCargo = document.getElementById("tipo-cargo").value;

    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
        resultadoElement.innerText = "Error: Las horas trabajadas deben ser un número positivo.";
        return;
    }

    var salarioPorHora = salariosPorCargo[tipoCargo];
    if (salarioPorHora === undefined) {
        resultadoElement.innerText = "Error: Tipo de cargo no válido.";
        return;
    }

    var salarioTotal = salarioPorHora * horasTrabajadas;
    resultadoElement.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana.";
}
