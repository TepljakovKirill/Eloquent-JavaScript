//Массив в обратном порядке

//1-я часть
let array = [1, 2, 3, 4, 5];
function reversArray(newArray) {
  return newArray.reverse();
}
console.log(reversArray(array));

//2-я часть
function reverseArrayinPlace(newArray) {
  let totalArray = [];
  for (let number of newArray) {
    totalArray.unshift(number);
  }
  return totalArray;
}

console.log(reverseArrayinPlace(array));
