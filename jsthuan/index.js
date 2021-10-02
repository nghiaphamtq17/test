const array = [2, 3, 4, 5, 7, 12, 13, 17, 22, 3, 4, 5, 7, 12, 13, 17, 50, 1];
let newArray = [];

let min = array[0];
let max = array[0];
// 1. Viết hàm tìm min/max
for (let index = 0; index < array.length; index++) {
  if (min > array[index]) {
    min = array[index];
  }
}

// 1. Viết hàm tìm min/max
for (let index = 0; index < array.length; index++) {
  if (max < array[index]) {
    max = array[index];
  }
}

// 2. Sử dung for/forEach loai trừ phần tử trùng nhau trong mảng
array.forEach((element) => {});

// 3. Tìm index của 1200
let index22;
for (let index = 0; index < array.length; index++) {
  const element = array[index];

  if (array[index] == 22) {
    index22 = index;
  }
}

// 4: Viết hàm kiểm tra, nếu mảng tăng dần => log ra tăng dần, giảm dần => log ra giảm dần

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const element1 = array[i+1];
    

        if (element > element1) {
            console.log('Số '+element + ' tới ' + element1 + ' là giảm dần');
        }
        if(element < element1){
            console.log('Số '+element + ' tới ' + element1 + ' là tăng dần');
        } else {
            console.log('Số '+element + ' tới ' + element1 + ' là bằng nhau');
        }
        
    
    
}




// 5: Viết hàm kiểm tra trong mảng nếu có số lớn hơn 100 => trả về true
let kiemtra = false;

for (let index = 0; index < array.length; index++) {
  if (array[index] > 100) {
    kiemtra = true;
  }
}

// 6: Viết hàm kiểm tra tất cả phần tử trong mảng có lớn hơn 100 hay ko
let newArray2 = [];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (array[index] > 20) {
    newArray2.push(element);
  }
}

// 7: Tìm các số nguyên tố trong mảng: output [17,13]
for (let index = 0; index < array.length; index++) {
  let checknguyento = true;

  for (let count = 2; count < array[index]; count++) {
    if (array[index] % count == 0) {
      checknguyento = false;
    }
  }

  if (checknguyento == false) {
    console.log("Số " + array[index] + " không phải là số nguyên tố");
  } else {
    console.log("Số " + array[index] + " là số nguyên tố");
  }
}

console.log("1 : Gia tri nho nhat : " + min);
console.log("1 : Gia tri lon nhat : " + max);

console.log("2 : Gia tri nho nhat : " + min);
console.log("3 : index cua 22 : " + index22);
console.log("5 : kiểm tra xem có lớn hơn 100 k , kết quả : " + kiemtra);
console.log('trả ra mảng mới sau khi quét giá trị lớn hơn 20 : '+ newArray2);
console.log(array);
