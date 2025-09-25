const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

const multiples = [1,2,3,4,5,6,7,8,9];

const countObj = {};

multiples.forEach(m => {
  countObj[m] = numbers.filter(num => num % m === 0).length;
});

console.log(countObj);