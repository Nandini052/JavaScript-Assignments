// Find the Smaller Angle
let hour = 3;
let minute = 30;

let minuteAngle = minute * 6;
let hourAngle = (hour * 30) + (minute * 0.5);

let angle = Math.abs(hourAngle - minuteAngle);
let result = Math.min(angle, 360 - angle);

console.log(result);

// Leap Year or not
let N = 2024;

if ((N % 400 == 0) || (N % 100 != 0 && N % 4 == 0)) {
    console.log("Leap Year");
}
else {
    console.log("Non Leap Year");
}

//  Perfect Number Check
let n = 30;
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        sum += i;
    }
}
if (sum == n) {
    console.log("Yes");
}
else {
    console.log("No");
}

// Reverse
let num = 3456;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = (reverse * 10) + digit;
    num = Math.floor(num / 10);
}
console.log(reverse);

// Substring Check
let S1 = "Bytes";
let S2 = "PrepBytes";

if (S2.includes(S1)) {
    console.log("Yes");
}
else {
    console.log("No");
}