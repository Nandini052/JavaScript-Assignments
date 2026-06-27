// Count Characters
let S = "AABCDDAA";
let countA = 0;
let countD = 0;

for(let i = 0; i < S.length; i++){ 
    if (S[i] == "A"){
        countA++ ; 
    }
    else if (S[i] == "D"){
        countD++ ;
    }
}
let B = [countA, countD];
console.log(B);


// Count the Heads
let s = "PrepBytes";
let result = "";

for (let i = 0; i < s.length; i++) {
    let count = 0;

    for (let j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
            count++;
        }
    }

    if (s.indexOf(s[i]) == i) {
        if (count > 1) {
            result += s[i] + count;
        } else {
            result += s[i];
        }
    }
}
console.log(result);


// Count the vowels
let p = "prepbytes";
let count = 0;

for (let i = 0; i < S.length; i++) {
    if (p[i] == "a" || p[i] == "e" || p[i] == "i" || p[i] == "o" || p[i] == "u" ||
        p[i] == "A" || p[i] == "E" || p[i] == "I" || p[i] == "O" || p[i] == "U") {
        count++;
    }
}
console.log(count);


//Concatenate Strings
let S1 = "Prep";
let S2 = "Bytes";
let S3 = S1  + S2;
console.log(S3);


// Find length
let r = "This is a String";
let l = r.length;
console.log(l);


// Winner
let g = "AADDAAD";   
let aditya = 0;
let danish = 0;

for (let i = 0; i < g.length; i++) {
    if (g[i] == "A") {
        aditya++;
    }
    else if (g[i] == "D") {
        danish++;
    }
}

if (aditya > danish) {
    console.log("Aditya");
}
else if (danish > aditya) {
    console.log("Danish");
}
else {
    console.log("Draw");
}


// Join Strings
let f = "hello";
let h = "world";
let res = f + h;
console.log(res);


// Pallindrome Check
let k = "Naman";
let reverse = "";

for (let i = k.length - 1; i >= 0; i--) {
    reverse += k[i];
}

if (k.toLowerCase() == reverse.toLowerCase()) {
    console.log("True");
}
else {
    console.log("False");
}


// Reverse
let y = "Hello";
let rev = "";

for (let i = y.length - 1; i >= 0; i--) {
    rev += y[i];
}
console.log(rev);


// Match the Strings
let m = "hello";
let n = "hello";

if (m == n){
    console.log("Yes");
}
else{
    console.log("No");
    
}


// String Replace
let G = "Hi I am You";
let pattern = "You";
let text = "PrepBytes";
result = "";

for (let i = 0; i < G.length; i++) {
    let match = true;

    for (let j = 0; j < pattern.length; j++) {
        if (G[i + j] != pattern[j]) {
            match = false;
            break;
        }
    }

    if (match) {
        result += text;
        i += pattern.length - 1;
    }
    else {
        result += G[i];
    }
}
console.log(result);


// Split the String
let K = "Hello I am a Human";
let word = "";
re = [];

for (let i = 0; i < K.length; i++) {
    if (K[i] == " ") {
        re.push(word);
        word = "";
    }
    else {
        word += K[i];
    }
}
re.push(word);
console.log(re);


// Count Vowels and Consonants
let F = "PrepBytes";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < F.length; i++) {
    let ch = F[i].toLowerCase();

    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        vowels++;
    }
    else if ((ch >= "a" && ch <= "z")) {
        consonants++;
    }
}
console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);