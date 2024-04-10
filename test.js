let str ="pqrst";

// let rev = '';

// for (i = a.length-1; i>=0; i--){
//     rev = rev + a[i];
// }

// console.log(rev);

let a = str.split('');

for (let i = 0; i < a.length / 2; i++){
    // let first = a[index];
    // let last = a[a.length - i - 1];
        
    let temp = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temp;
}

console.log(a.join(''));


// for (i = 0; i < a.length; i++){

//     if (a[i] % 2 == 0) {
//         sum += a[i];
//     }

// }
