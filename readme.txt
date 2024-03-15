Calculadora de Salario

Resumen:
Este programa es una calculadora de salario. 
Permite calcular el salario total de un empleado según el número de horas trabajadas, 
los días trabajados y el tipo de cargo que ocupa. 
También calcula el salario neto después de aplicar el impuesto sobre la renta (ISPT) correspondiente.

Instrucciones de Uso:
1. Abre el archivo index.html en tu navegador web.
2. Selecciona una de las siguientes opciones de cálculo de salario:
   - Por Hora: Ingresa el ID del empleado, las horas trabajadas y selecciona el tipo de cargo.
   - Por Día: Ingresa el ID del empleado, las horas y los días trabajados, y selecciona el tipo de cargo.
   - Por Mes: Ingresa el ID del empleado y selecciona el tipo de cargo.
3. Haz clic en el botón "Calcular" para obtener el resultado del salario total y el salario neto.

Requisitos:
- Navegador web compatible con HTML5 y JavaScript.
- Conexión a Internet (para cargar archivos CSS y JavaScript externos si no están presentes localmente).

Impuesto:
El impuesto Sobre la Renta (ISR) o Impuesto Sobre el Producto del trabajo (ISPT) se aplica a 
los ingresos obtenidos por los trabajadores en relación de dependencia, ya sea por salario, 
sueldos, honorarios o cualquier otro tipo de retribución económica por el trabajo realizado.

En el código proporcionado, el impuesto ISPT se calcula utilizando una serie de rangos y 
porcentajes predefinidos. Estos rangos y porcentajes representan las tasas de impuesto 
aplicables a diferentes niveles de ingresos. El impuesto se calcula tomando el salario 
total del empleado y aplicando el porcentaje de impuesto correspondiente según el rango 
en el que se encuentre el salario total.

Por ejemplo, si el salario total de un empleado cae dentro del rango de $4210.42 a $7399.42, 
se aplica un impuesto del 10.88% sobre el monto que excede los $4210.41. Esto se repite para 
cada rango de ingresos definido en la función limiteISPT().

Dependiendo de la legislación fiscal del país y las regulaciones aplicables, 
los rangos y porcentajes de impuestos pueden variar. Los rangos y porcentajes están 
predefinidos en el arreglo ispt_index.

Notas: 
-Asegúrate de tener habilitada la ejecución de scripts en tu navegador web.
Es necesario para que el programa funcione correctamente.
-No se hace uso de ningún framework o biblioteca externa.
El programa está escrito en Javascript puro y se ejecuta en el navegador web, 
por lo que no requiere nignuna dependencia adicional.