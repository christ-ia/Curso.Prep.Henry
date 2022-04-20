// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var lista = [];
  var listaAux = []
  for (key in objeto){
    listaAux = [];
    listaAux.push(key)
    listaAux.push(objeto[key])
    lista.push(listaAux);
  }
  return lista;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let counter = 0;
  let identificador = "";
  var objetoContenedor = {};
  let lista = string.split("")
  lista.sort();
  for (let i = 0; i < lista.length; i++){
    identificador = lista[i];
    counter = 0;
    for (let j = 0; j < lista.length; j++){
       if(identificador == lista[j]) {counter += 1;}
       objetoContenedor[identificador] = counter;
     }
  }
  return objetoContenedor;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let lista1 = s.split("");
  let listaMinusculas = [];
  let listaMayusculas = [];
  listaMinusculas = lista1.filter(function(elemento){
    if (elemento.charCodeAt() > 96){ return elemento}
  })

  listaMayusculas = lista1.filter(function(elemento){
   if (elemento.charCodeAt() < 97){ return elemento}
  });

  return listaMayusculas.join("") + listaMinusculas.join("")
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let toArray = str.split(" ");
  let list1 = toArray.map(function(el){
    elAux = [];
    for (let i = el.length -1; i >= 0; i--){ elAux.push(el[i])}
    return elAux.join("")
  });
  return list1.join(" ");
  // let listStr = str.split(" ");
  // let listaFinal = []
  // let elAux = [];
  // for (let i = 0; i < listStr.length; i++){
  //   elAux = [];
  //   for (let j = listStr[i].length -1; j >= 0; j--){
  //     elAux.push(listStr[i][j]);
  //   }
  //   listaFinal.push(elAux.join(""))
  // }
  // return listaFinal.join(" ");
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let converter = String(numero).split("")
                                .reverse()
                                .join("");
  if (numero == parseInt(converter)) return "Es capicua"; else return "No es capicua";
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let converter = cadena.split("")
                        .filter(function(el) {
                          if (el != "a" && el !="b" && el != "c") return el;});
  return converter.join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    return 0;
  });
}
console.log(sortArray(["You", "are", "beautiful", "looking"]))


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArray = arreglo1.filter( (el) =>{
      if (arreglo2.includes(el)){return el};
  });
  return newArray.sort( (a,b) => {return a-b});
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

