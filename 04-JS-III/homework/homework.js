// No cambies los nombres de las funciones.

//const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}
lista1 = [2,9,8,7,6,5,4,14,7,19,19,19,19,20]
//console.log(devolverPrimerElemento(lista1))

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}
//console.log(devolverUltimoElemento(lista1))

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
//console.log(obtenerLargoDelArray(lista1))

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i=0; i<array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}
//console.log(incrementarPorUno(lista1))

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return array;
}
//console.log(agregarItemAlFinalDelArray(lista1, 5))

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
//console.log(agregarItemAlComienzoDelArray(lista1,5))

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabrasUnidas = ""
  for (i=0; i<palabras.length; i++){
      palabrasUnidas += palabras[i] + " ";
  }
  palabrasUnidas = palabrasUnidas.slice(0,-1)
  return palabrasUnidas;
}
lista2 = ["Hola", "Cómo","Estas"];
//console.log(dePalabrasAFrase(lista2))

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0; i<array.length; i++){
      if (array[i] === elemento){
          return true;
      }
  } 
  return false; 
}
//console.log(arrayContiene(lista2,"Hola"))

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma1 = 0;
  for (i=0; i<numeros.length; i++){
    suma1 += numeros[i];
    }
    return suma1;
}
//console.log(agregarNumeros(lista1))

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma1 = 0;
  for (i=0; i<resultadosTest.length; i++){
    suma1 += resultadosTest[i]
  }
  suma1 = suma1 / (resultadosTest.length)
  return suma1;
}
lista3 = [10,10,1]
//console.log(promedioResultadosTest(lista3))

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  nGrande = 0;
  for (i=0; i<numeros.length; i++){
      if (numeros[i] > nGrande) nGrande = numeros[i]
  }
  return nGrande;
}
//console.log(numeroMasGrande(lista1))

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  total = 1;
  for (i=0; i<arguments.length; i++){
    total *= arguments[i];
  }
  if (arguments.length === 0){ 
    return 0
  }else return total
}
//console.log( multiplicarArgumentos(5,2,10,8))

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var counter = 0;
  for (let i=0; i<arreglo.length; i++){
    if (arreglo[i] > 18){
      counter += 1;
    }
  }
  return counter;
}
//console.log(cuentoElementos(lista1))

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia == 1 || numeroDeDia == 7){
    return "Es fin de semana"
  }else if (numeroDeDia < 7) return "Es dia Laboral"
} 
//console.log( diaDeLaSemana(7))

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nine = String(n);
  if (nine[0] == 9) return true;
  else return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i=0; i<arreglo.length - 1; i++){
    if (arreglo[i] != arreglo[i+1]) return false
  }
  return true
} 
//console.log(todosIguales(lista3))

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for (i in array){          // for para añadir los meses pedidos
    if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
        meses.push(array[i]);
    }
  }
  if (!(meses.includes("Enero") && meses.includes("Marzo") && meses.includes("Noviembre"))){  
    return "No se encontraron los meses pedidos"
  }else return meses
}
lista6 = ["Noviembre", "Agosto", "Diciembre", "Enero", "Marzo"];
//console.log(mesesDelAño(lista6))

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var lista4 = [];
  for (i=0; i<array.length; i++){
    if (array[i] > 100){
        lista4.push(array[i]);
    }
  }
  return lista4;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  lista5 = []
  for (i=0; i<10; i++){
    numero +=2;
    lista5.push(numero)
    if (numero == i+1) return "Se interrumpió la ejecución";
  }
  return lista5;
}
//console.log(breakStatement(2))


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}
//console.log(continueStatement(2))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
