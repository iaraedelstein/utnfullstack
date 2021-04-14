const asincronica = () => {
  setTimeout(() => {
    console.log("Paso 2 Promise");
  }, 3000);
  return new Promise((resolve, reject) => resolve());
};

// const asincronica = () => {
//   console.log("Paso 2");
//   return new Promise((resolve, reject) => resolve());
// };

console.log("Paso 1 Promises");
asincronica().then(() => console.log("Paso 3 Promises"));
console.log("Paso 4 Promises");

const asincronica2 = () => {
  setTimeout(() => {
    console.log("Paso 2 Async Await");
  }, 3000);
  return new Promise((resolve, reject) => resolve());
};

const applyAsync = async () => {
  console.log("Paso 1 Async Await");
  await asincronica2();
  console.log("Paso 3 Async Await");
};

applyAsync();
