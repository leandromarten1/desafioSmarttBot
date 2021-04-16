let array = [
  '60607.00000000',
  '60607.00000001',
  '60607.00000001',
  '60627.88955812',
  '60602.17980632',
  '60618.44711090'
];

console.log("Open: ", array[0]);
console.log("Close: ", array[array.length - 1])
console.log("Max: ", Math.max(...array))
console.log("Min: ", Math.min(...array))