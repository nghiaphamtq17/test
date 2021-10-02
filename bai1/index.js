console.log("bai tap 1");
let a = [1, 2, 1];
let b = [3, 2, 1];

let UserA = 0;
let UserB = 0;

for (let i = 0; i < a.length; i++) {
  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      UserA += 1;
    }
    if (a[i] < b[i]) {
      UserB += 1;
    }
  }
}
console.log(UserA);

console.log(UserB);
