const salariosPorCargo = {
    "Jefe de departamento": 750,
    "Gerente": 600,
    "Supervisor": 450,
    "Empleado": 300
};

const ispt_index = [1.92, 6.4, 10.88, 16, 17.92, 21.36, 23.52, 30, 32, 34, 35];

function limiteISPT(salarioTotal){
    if (salarioTotal > 0.01 && salarioTotal < 496.07){
        return ispt_index[0];
    }
    else if(salarioTotal > 496.08 && salarioTotal < 4210.41){
        return ispt_index[1];
    }
    else if(salarioTotal > 4210.42 && salarioTotal < 7399.42){
        return ispt_index[2];
    }
    else if(salarioTotal > 7399.43 && salarioTotal < 8601.5){
        return ispt_index[3];
    }
    else if(salarioTotal > 8601.51 && salarioTotal < 10298.35){
        return ispt_index[4];
    }
    else if(salarioTotal > 10298.36 && salarioTotal < 20770.29){
        return ispt_index[5];
    }
    else if(salarioTotal > 20,770.3 && salarioTotal < 32736.83){
        return ispt_index[6];
    }
    else if(salarioTotal > 32736.84 && salarioTotal < 62500){
        return ispt_index[7];
    }
    else if(salarioTotal > 62500.01 && salarioTotal < 83333.33){
        return ispt_index[8];
    }
    else if(salarioTotal > 83333.34 && salarioTotal < 250000){
        return ispt_index[9];
    }
    else if(salarioTotal > 250000.01){
        return ispt_index[10];
    }
}

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
    var resultadoTotal = document.getElementById("salario-total");
    var resultadoISPT = document.getElementById("salario-impuesto");
    var idEmpleado = document.getElementById("id-empleado").value;
    var horasTrabajadas = parseFloat(document.getElementById("horas-trabajadas").value);
    var diasTrabajados = parseFloat(document.getElementById("dias-trabajados").value);
    var tipoCargo = document.getElementById("tipo-cargo").value;

    var salarioPorHora = salariosPorCargo[tipoCargo];
    if (isNaN(horasTrabajadas) || isNaN(diasTrabajados) || horasTrabajadas <= 0 || diasTrabajados <= 0) {
        resultadoTotal.innerText = "Error: Las horas y días trabajados deben ser números positivos.";
        return;
    }
    else if (salarioPorHora === undefined) {
        resultadoTotal.innerText = "Error: Tipo de cargo no válido.";
        return;
    }
    else{
        var salarioTotal = salarioPorHora * horasTrabajadas * diasTrabajados;
        var lim_ispt = limiteISPT(salarioTotal);
        var salarioISPT = salarioTotal - (salarioTotal * lim_ispt)/100;

        console.log("El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana.")
        resultadoTotal.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana."
        resultadoISPT.innerText = "Salario con impuesto (ISPT): " + salarioISPT;
    }
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
    var resultadoTotal = document.getElementById("salario-total");
    var resultadoISPT = document.getElementById("salario-impuesto");
    var idEmpleado = document.getElementById("id-empleado").value;
    var tipoCargo = document.getElementById("tipo-cargo").value;

    var salarioPorMes = salariosPorCargo[tipoCargo];
    if (salarioPorMes === undefined) {
        resultadoTotal.innerText = "Error: Tipo de cargo no válido.";
        return;
    }
    else{
        var salarioTotal = salarioPorMes * 30;
        var lim_ispt = limiteISPT(salarioTotal);
        var salarioISPT = salarioTotal - (salarioTotal * lim_ispt)/100;

        resultadoTotal.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana."
        resultadoISPT.innerText = "Salario con impuesto (ISPT): " + salarioISPT;
        //resultadoElement.innerText = "El empleado " + idEmpleado + " gana $" + salario + " mensuales.";
    }
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
    var resultadoTotal = document.getElementById("salario-total");
    var resultadoISPT = document.getElementById("salario-impuesto");
    var idEmpleado = document.getElementById("id-empleado").value;
    var horasTrabajadas = parseFloat(document.getElementById("horas-trabajadas").value);
    var tipoCargo = document.getElementById("tipo-cargo").value;

    var salarioPorHora = salariosPorCargo[tipoCargo];

    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
        resultadoTotal.innerText = "Error: Las horas trabajadas deben ser un número positivo.";
        return;
    }
    else if (salarioPorHora === undefined) {
        resultadoTotal.innerText = "Error: Tipo de cargo no válido.";
        return;
    }
    else{
        var salarioTotal = salarioPorHora * horasTrabajadas;
        var lim_ispt = limiteISPT(salarioTotal);
        var salarioISPT = salarioTotal - (salarioTotal * lim_ispt)/100;

        resultadoTotal.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana."
        resultadoISPT.innerText = "Salario con impuesto (ISPT): " + salarioISPT;
        //resultadoElement.innerText = "El empleado " + idEmpleado + " ganó $" + salarioTotal + " esta semana.";
    }
}
