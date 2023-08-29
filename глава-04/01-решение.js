//Сумма диапазонов

let array = [];
function range(start, end, percent) {
  if (percent && percent > 0) {
    array.push(start);
    for (let i = start + percent; i <= end; i = i + percent) {
      array.push(i);
    }
    console.log(array);
  } else if (percent && percent < 0) {
    percent = Math.abs(percent);

    if (start > end) {
      array.push(start);
      for (let i = start - percent; i >= end; i = i - percent) {
        array.push(i);
      }
    }
  } else {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  }
  console.log(array);

  return array;
}
let newArray = range(5, 2, -1);

let totalSum = 0;
function sum(a) {
  for (let i = 0; i <= a.length - 1; i++) {
    totalSum += a[i];
  }
  console.log(totalSum);
}

sum(newArray);
