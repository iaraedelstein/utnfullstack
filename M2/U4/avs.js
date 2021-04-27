// copia vs clonacion

//async: callback promise async awair generator

// Arrays
// Cómo copio un array?
// NO
const nombres = misNombres;
// SI Clonar el array y generar uno nuevo
const nombres = [...misNombres];

// Cómo copio un objeto
const persona1 = {
  nombre: "iara",
  apellido: "edelstein",
  edad: 26,
};
/* NO!!! const persona2 = persona1
 */
const persona2 = Object.assign("", persona1); //puedo tener problemas con ciertos valores que no sabe copiar
const persona3 = JSON.parse(JSON.stringify(persona1));

/**
 * 3 tipos de estructuras de datos
 **/
/*
1- const : no pueden cambiar su valor, la más recomendada a utilizar,
        JS las administra de forma diferente porque los punteros a estas variables no cambian.
2- let: variables que se consideran locales, destinadas a ser utilizadas dentro de la función.
3- var: variables que pueden ser globales y modicables. 
let/var : los valores pueden ir cambiando, menos eficiente. 
*/

/**
 * 3 formas de crear una función:
 **/

// 1- funciones nombradas
function sumar(a, b) {
  return a + b;
}
const resultSuma = sumar(2, 5);

/* 2- funciones anonimas: funcion para ser llamadas como parametro de otra función,se definen con los parametros que recibe la función
  function (a,b){
    return a + b;
  } */
array.find(
  (element) =>
    function (element) {
      return element > 10;
    }
);

/*  3- funciones arrow: no genera un ambiente propio, las funciones anonimas y nombradas generan el $this....
                    utilizar siempre que sea posible
  (a , b ) => {
    return a + b;
  } */

/* 2 formas de usas las funciones arrow
1- Como callback:
  - arrow completa
    array.find( (el) => return el > 10});
  - arrow con abreviación de parametros, solo si hay un solo param saco ()
    array.find( el => return el > 10});
  - arrow con abreviación de return, solo si es una linea. saco return y llaves
    array.find(el => el > 10);

2- Como función normal: se asigna a un variable el contenido de una función. Más eficiente
 */
const currenYear = 2021;
const esMayor = (yearBirth) => {
  if (currentYear - yearBirth >= 18) {
    console.log("Es mayor");
  } else {
    console.log("Es menor");
  }
  return currentYear - yearBirth;
};
console.log(esMayor(1995));
