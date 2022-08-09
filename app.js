/**
 * Basic problem solving
 */
// gloval array
const globalNumbers = [31, 10, 45, 5, 7, 11, 78, 91, 55, 52, 25, 12];
// how to find unique name form an  array
const personNames = [
  "Rakibul",
  "limon",
  "hanif",
  "alamin",
  "afif",
  "anis",
  "liton",
  "liton",
  "anis",
  "Rakibul",
  "limon",
  "hanif",
];

function findUniqueName(names) {
  const uniqeName = [];
  for (let i = 0; i < personNames.length; i++) {
    const index = names[i];

    if (uniqeName.includes(index) === false) {
      uniqeName.push(index);
    }
  }
  return uniqeName;
}

let uniqueNameFinalResult = findUniqueName(personNames);
console.log(uniqueNameFinalResult);

// how to find odd or even number from an array
function oddNumber(numbers) {
  for (let i = 0; i <= numbers.length; i++) {
    const index = numbers[i];
    if (index % 2 === 1) {
      console.log("Odd number is: " + index);
    } else {
      console.log("Even number is: " + index);
    }
  }
}

oddNumber(globalNumbers);

// Total sum in an array
// step 1 use in for loop
function totalSum(numbers) {
  let sum = 0;
  for (let i = 0; i < globalNumbers.length; i++) {
    const index = numbers[i];
    sum += index;
  }
  return sum;
}
const totalSUmResult = totalSum(globalNumbers);
console.log("Total sum is: " + totalSUmResult);

// step 2 use in map
function totalSumInMap(numbers) {
  let sum = 0;
  numbers.map((items) => {
    sum += items;
  });
  return sum;
}

const sumInMap = totalSumInMap(globalNumbers);
console.log(`Total sum is: ${sumInMap}`);

// step 3 use in reduce
function totalSumInReduce(numbers) {
  let sum = 0;
  numbers.reduce((items) => {
    sum += items;
  });
  return sum;
}

const sumInReduce = totalSumInReduce(globalNumbers);
console.log(`Total sum is: ${sumInMap}`);

// How to find a large number from an array
// step 1 use in for loops
function findLargeNumer(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let index = numbers[i];

    if (index > largest) {
      largest = index;
    }
  }
  return largest;
}

let toGetLargestNumber = findLargeNumer(globalNumbers);
console.log(`Largest number is: ${toGetLargestNumber}`);

// note for lowest number find use lassthen(< sign)
// console.log(`Lowest number is: ${toGetLargestNumber}`);

// stap 2 use in forEach loop

function findLowestNumberForEach(numbers) {
  let lowest = numbers[0];
  numbers.forEach((items) => {
    if (items < lowest) {
      lowest = items;
    }
  });
  return lowest;
}

let lowestForEach = findLowestNumberForEach(globalNumbers);
console.log(`Lowest number is: ${lowestForEach}`);

// how to get fibo number in Javascript
function fiboCalculation(fibo) {
  for (let i = 2; i <= 15; i++) {
    let result = (fibo[i] = fibo[i - 1] + fibo[i - 2]);
    console.log(result);
  }
}
fiboCalculation([0, 1]);

// How to convert temptrature pherienhit to celcius
let pher;
let getCelcius;
function pherienhit(temp) {
  pher = temp;
  getCelcius = (temp - 32) / 1.8;
}

pherienhit(94);
console.log(
  `${pher} deg F to today ${getCelcius.toFixed(2)} deg celcius temp.`
);

// how caluclation facturial in number
// 3! = 3*2*1
let isUserFactNumner;
function facturial(numbers) {
  isUserFactNumner = numbers;
  let count = 1;
  for (let i = numbers; i >= 1; i--) {
    count *= i;
  }
  return count;
}
let getFact = facturial(3);
console.log(`For ${isUserFactNumner} facturial number is: ${getFact} `);

// typeof check
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a number";
  }

  return num1 + num2;
}
let finalRestult = add(10, 34);
console.log("Sum is:  ", finalRestult);

var student = [4, 5, 6, 7];
console.log((student[student.length - 1] = 10));
console.log(student);

// how to most lengthy name find

const friendsName = [
  "Hasiqul",
  "Nazrul",
  "Nurzaman",
  "Hafiz Ripon Ali",
  "Liton",
  "Ismail",
  "Sazon",
];

function bestFriends(name) {
  let blankName = name[0];
  for (let frName of name) {
    if (frName.length > blankName.length) {
      blankName = frName;
    }
  }
  return blankName;
}

let bigLenghtName = bestFriends(friendsName);
console.log("Most lengthy name is : ", bigLenghtName);
