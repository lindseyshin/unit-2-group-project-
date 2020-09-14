let input = prompt(`Give a decimal number`);
//User input

//Figures out the binary by dividing and displaying the remainder
let dec0 = Math.floor(input/2);
let dec0remainder = (dec0%2);


let dec1remainder = (dec0%2);
let dec1 = Math.floor(dec0/2);


let dec2remainder = (dec1%2);
let dec2 = Math.floor(dec1/2);


let dec3remainder = (dec2%2);
let dec3 = Math.floor(dec2/2);

let dec4remainder = (dec3%2);
let dec4 =Math.floor(dec3/2);


let dec5remainder = (dec4%2);
let dec5 = Math.floor(dec4/2);


let dec6remainder = (dec5%2);
let dec6 = Math.floor(dec5/2);


let dec7remainder = (dec6%2);
let dec7 = Math.floor(dec6/2);

let dec8remainder = (dec7%2);
let dec8 = Math.floor(dec7/2);

//Finds the hexadecimal of the decimal input
remainder1 = input % 16
decimal1  = input / 16
remainder2 = Math.floor(decimal1) % 16

if(remainder1 == 10){
    remainder1 = "A"
}
if(remainder1 == 11){
    remainder1 = "B"
}
if(remainder1 == 12){
    remainder1 = "C"
}
if(remainder1 == 13){
    remainder1 = "D"
}
if(remainder1 == 14){
    remainder1 = "E"
}
if(remainder1 == 15){
    remainder1 = "F"
}

if(remainder2 == 10){
    remainder2 = "A"
}
if(remainder2 == 11){
    remainder2 = "B"
}
if(remainder2 == 12){
    remainder2 = "C"
}
if(remainder2 == 13){
    remainder2 = "D"
}
if(remainder2 == 14){
    remainder2 = "E"
}
if(remainder2 == 15){
    remainder2 = "F"
}
if(remainder2 == 0){
    remainder2 = "0"
}

//Outputs the results for the decimal to binary and hexadecimal to binary
let answer = console.log(`The binary of ${input} is ${dec7remainder}${dec6remainder}${dec5remainder}${dec4remainder} ${dec3remainder}${dec2remainder}${dec1remainder}${dec0remainder} \nThe hexadecimal of ${input} is ${remainder2}${remainder1}`);