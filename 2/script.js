// Find Grades
let M = parseInt (prompt("enter marks")) // parseInt is used to convert num into int
switch(true){

case (M <= 10):
console.log('E');
break

case (M>=11 && M<=20):
console.log('D');
break

case (M>=21 && M<=30):
console.log('C');
break

case (M>=31 && M<=40):
console.log('B');
break

case (M>=41 && M<=50):
console.log('A');
break
}

// Get Value
let c = (prompt("enter character"))

switch(true){

    case (c == "P"):
    console.log('PrepBytes');
    break

    case( c == "p"):
    console.log('PrepBytes');
    break

    case( c == "z"):
    console.log('Zenith');
    break

    case( c == "Z"):
    console.log('Zenith');
    break
    
    case(c == "e"):
    console.log('Expert Coder');
    break

    case(c == "E"):
    console.log('Expert Coder');
    break

    case(c == "d"):
    console.log('Data Structure');
    break

    case(c == "D"):
    console.log('Data Structure');
    break

    default: console.log('Invalid Input');
    
}

// Maximum of 3 numbers
let g = parseInt (prompt("Enter Number 1"))
let q = parseInt (prompt("Enter Number 2"))
let r = parseInt (prompt("Enter Number 3"))

if(g>=0, q>=0, r>=0){
    if(g>q && p>r){
        console.log(p);
    }
    else if(q>g && q>r){
        console.log(q);
    }
    else if(r>g && r>q){
        console.log(r);
    }
    else{
        console.log('-1-1');
    }
}

// Second Smallest Integer
let u = parseInt(prompt('Enter integer 1'))
let v = parseInt(prompt('Enter integer 2'))
let w = parseInt(prompt('Enter integer 3'))

if ((u < v && u > w) || (u > v && u < w)){
    console.log(u, "is the second smallest integer");
}
else if((v < u  && v > w) || (v > u && v < w)){
    console.log(v, "is the second smallest ineteger");
}
else{
    console.log(w, "is the second smallest integer");
    
}

// Chcek whether the triangle is Acute or Obtuse
let A = parseInt (prompt("Enter Angle 1"))
let B = parseInt (prompt("Enter Angle 2"))
let C = parseInt (prompt("Enter Angle 3"))

if(A + B + C == 180){
    if( A<90 && B<90 && C<90){
        console.log('Acute Triangle');
    }
    else if(A>90 || B>90 || C>90){
        console.log('Obtuse Triangle');
    }
}
    else{
        console.log('Invalid');
    }

