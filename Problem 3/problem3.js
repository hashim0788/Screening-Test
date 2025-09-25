
function generateOddSeries(a) {
  
    let n = (a % 2 !== 0) ? a : a - 1;

    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(2 * i - 1);
    }

    return result;
}

let a = 6; 
console.log(generateOddSeries(a));