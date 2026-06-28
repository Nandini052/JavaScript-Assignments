// Product
let arr = prompt("Enter array elements");
let product = 1;

for (let i = 0; i < arr.length; i++){
    product *= Number(arr[i]);
}
console.log("Product = " ,product);

// Sum
let sum = 0;

for (let i = 0; i < arr.length; i++){
    sum += Number(arr[i]);
}
console.log("Sum = " ,sum);

//Count Occurences
let A = [1, 2, 3, 8, 4, 9, 2];
let K = 2;
let count = 0;

for (let i = 0; i < A.length; i++) {
    if (A[i] == K) {
        count++;
    }
}
console.log(count);

// Even Odd
let C = [2,5,6,7,2,9,10,3];
let evensum = 0;
let oddsum = 0;

for(let i = 0; i < C.length; i++){
    if(C[i] % 2 == 0){
        evensum += C[i];
    }
    else{
        oddsum += C[i];
    }
}
let B = [evensum , oddsum]
console.log(B);

// Number is present or not
let ar = prompt("Enter Array")
let n = prompt("Enter a Number")
let found = false;

for(let i = 0 ; i < ar.length; i++){
    if (ar[i] == n){
        found = true;
        break
    }
}
if(found){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

// Higher Age
let age = [20, 5, 6, 54, 60, 10, 15, 70];
let output = [];

for(let i = 0; i< age.length; i++){
    if( age[i]> 18){
        output.push(age[i]);
    }
}
console.log(output);

// Increment Array Elements
let S = [23, 45, 67, 4, 6,78];
let g = S.map(x=> x+1);
console.log(g);

// Pass or Fail
let marks = [34, 44, 56, 45, 58];
let pass = 0;
let fail = 0;

for( let i = 0; i < marks.length; i++){
    if(marks[i] >= 32){
        pass++;
    }
    else{
        fail++;
    }
}
if (pass == marks.length){
    console.log("Yes");
}
else{
    console.log("No");
    
}

//Unique Colour Shirt
let N = 7;
let Colour = [1, 2, 3, 2, 4, 5, 5];
let counts = {};

for (let i = 0; i < N; i++) {
    if (counts[Colour[i]]) {
        counts[Colour[i]]++;
    }
    else {
        counts[Colour[i]] = 1;
    }
}

let M = 0;

for (let key in counts) {
    if (counts[key] == 1) {
        M++;
    }
}
console.log(M);

// Min and Max
let m = [56, 78, 23, 34, 90, 76, 12];
let max = m[0];
let min = m[0];

for (let i = 0; i < m.length; i++){
    if(m[i] < min){
        min = m[i];
    }
    if(m[i] > max){
        max = m[i]
    }
}
console.log(min, max);
