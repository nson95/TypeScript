let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers);
numbers.push(7, 8, 9);
numbers[numbers.length] = 100;
console.log(numbers);
numbers.pop();
console.log(numbers);
let gap = numbers.splice(2, 5);
console.log(numbers)
console.log(gap)