//!  Range 1-10 & 50-100
let num = 1;
while (num <=10) {
    console.log("Number: ",num);
    num++;
}

let num1 = 50;
while (num1 <= 100) {
    console.log("Number: ",num1);
    num1++;
}

// ! SUM

let num2 = 1;
let sum = 0;
while (num2 <= 10) {
  console.log(num2);
  sum += num2;
  console.log("Sum: ", sum);
  num2++;
}
  console.log("Sum: ", sum);

// ! Even Number

let num3 = 1;

while (num3 <= 10) {
  console.log(num3);
  if(num3 % 2 === 0) {
    console.log("Even Number: ", num3);
  }
  num3++;
}

// ! Odd Number

let num4 = 1;

while (num4 <= 10) {
  console.log(num4);
  if (num4 % 2 !== 0) {
    console.log("Odd Number: ", num4);
  }
  num4++;
}
