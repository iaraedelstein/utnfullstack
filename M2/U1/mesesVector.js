const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let mes30 = [];
let mes31 = [];

for (let i = 0; i < meses.length; i++) {
  if (diasDelMes[i] == 30) {
    mes30.push(meses[i]);
  } else if (diasDelMes[i] == 31) {
    mes31.push(meses[i]);
  }
}

console.log("Meses con 30 días: ", mes30);
console.log("Meses con 31 días: ", mes31);
