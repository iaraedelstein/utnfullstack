var vector = [22, 25, 60, 98, 11, 78, 4, 33, 85, 10];

var mayor, menor, posicionMayor, posicionMenor;

mayor = vector[0];
menor = vector[0];
posicionMayor = 0;
posicionMenor = 0;

for (let i = 0; i < vector.length; i++) {
  if (mayor < vector[i]) {
    mayor = vector[i];
    posicionMayor = i;
  }
  if (menor > vector[i]) {
    menor = vector[i];
    posicionMenor = i;
  }
}

console.log(
  "El mayor es %s y se encuentra en la posición %s",
  mayor,
  posicionMayor
);
console.log(
  "El menor es %s y se encuentra en la posición %s",
  menor,
  posicionMenor
);
