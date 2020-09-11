let input = prompt(`Give a decimal number`);

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



let answer = console.log(`${dec7remainder}${dec6remainder}${dec5remainder}${dec4remainder} ${dec3remainder}${dec2remainder}${dec1remainder}${dec0remainder}`);