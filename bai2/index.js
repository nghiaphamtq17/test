let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 11],
];

const length = matrix.length;
let count1 = 0,
  count2 = 0;

for (let i = 0; i < length; i++) {
  count1 += matrix[i][i];
  count2 += matrix[length - 1 - i][i];
}
console.log(count1);
console.log(count2);
console.log(Math.abs(count1 - count2));
