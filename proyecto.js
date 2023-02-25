//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Recargos extra
var propiedad_recargo = 0.35; // 35% por propiedad
var ingresos_recargo = 0.05; // 5% sobre el salario del asegurado

//Recargo total
var recargo_total = 0;

//Mensajes de alerta para ingresar datos 
var nombre;
var edad;
var casado;
var edad_conyuge;
var hijos;
var cantidad_hijos;
var propiedades;
var salario;

//Ciclo para solicitar cotizaciones hasta que se ingrese "Salir"
while (true) {
    //Solicitar datos al usuario
    nombre = prompt("Ingrese su nombre, por favor (o escriba 'Salir' para terminar)");

    //Verificar si se debe salir del ciclo
    if (nombre.toUpperCase() == "SALIR") {
        break;
    }

    edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");

    casado = prompt("¿Está casado actualmente?");
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no");
    }

    hijos = prompt("¿Tiene hijos o hijas?");
    //Comprobamos la cantidad de hijos solamente si los tienen
    if ("SI" == hijos.toUpperCase()) {
        cantidad_hijos = prompt("¿Cuántos hijos tiene?");
    } else {
        cantidad_hijos = 0;
    }

    //convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad);
    var edad_conyuge_numero = 0;
    //convirtiendo la edad del cónyuge si se esta casado/a
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge_numero = parseInt(edad_conyuge);
    }

    //convirtiendo la cantidad de hijos a número
    cantidad_hijos = parseInt(cantidad_hijos);

    //Aquí debe calcular el recargo total basado en las respuestas ingresadas
    recargo_total = 0;

    //Recargo por edad del asegurado 
    if (edad_numero >= 18 && edad_numero < 25) {
        //Calculamos el recargo en base a la edad 
        recargo_total = recargo_total + precio_base * edad_18;
    } else if (edad_numero >= 25 && edad_numero < 50) {

        //Calculamos el recargo en base a la edad
        recargo = precio_base * edad_25
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }
    else if (edad_numero >= 50) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * edad_50
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }

    // Recargo por la edad del conyuge
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_18
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }
    else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_25
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }
    else if (edad_conyuge_numero >= 50) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_50
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }

    // Recargo por la cantidad de hijos
    if (cantidad_hijos == 1) {
        //Calculamos el recargo en base a la cantidad de hijos
        recargo = precio_base * hijos_recargo
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }
    else if (cantidad_hijos == 2) {
        //Calculamos el recargo en base a la cantidad de hijos
        recargo = precio_base * hijos_recargo * 2
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }
    else if (cantidad_hijos > 2) {
        //Calculamos el recargo en base a la cantidad de hijos
        recargo = precio_base * hijos_recargo * 2.5
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }

    // Recargo por cantidad de propiedades
    propiedades = prompt("¿Cuantas propiedades tiene?")
    // Comprobamos la cantidad de propiedades
    var cantidad_propiedades = parseInt(propiedades)
    if (cantidad_propiedades > 0) {
        // Calculamos el recargo en base a la cantidad de propiedades
        recargo = precio_base * 0.35 * cantidad_propiedades
        // Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }

    // Recargo por ingresos del asegurado
    salario = prompt("¿Cuál es su salario mensual en quetzales?")
    // Convertimos el ingreso a número
    var ingresos_numero = parseInt(salario)
    if (ingresos_numero > 0) {
        // Calculamos el recargo en base a los ingresos del asegurado
        recargo = ingresos_numero * 0.05
        // Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
    }

    precio_final = precio_base + recargo_total

    //Resultado
    alert("Para el asegurado " + nombre)
    alert("El recargo total sera de: " + recargo_total)
    alert("El precio sera de: " + precio_final)
}

