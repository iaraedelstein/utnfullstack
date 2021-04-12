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

let i = 0;
const tableContent = document.querySelector("#tableContent");

const interval = setInterval(() => {
  const row = document.createElement("tr");
  const dataMonth = document.createElement("td");
  const dataDays = document.createElement("td");
  const month = document.createTextNode(meses[i]);
  const days = document.createTextNode(diasDelMes[i]);
  dataMonth.appendChild(month);
  dataDays.appendChild(days);
  row.appendChild(dataMonth);
  row.appendChild(dataDays);
  tableContent.appendChild(row);
  i++;
  if (i >= meses.length) {
    clearInterval(interval);
  }
}, 1000);
