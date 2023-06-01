'use strict';

// Array 

// 1. 배열 선언 (declation)

const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position을 이용한 배열 접근

const fruit = ['apple', 'banana'];

console.log(fruit);
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[fruit.length - 1]); // 마지막 데이터 접근

// 3. looping 
// 모든 과일 출력하기

console.clear();

// a.
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// b.
for(let fruits of fruit) {
  console.log(fruits);
}

// c.
fruit.forEach((fruit, index) => console.log(fruit, index));

// 4. 수정, 삭제, 복사

fruit.push('strawberry', 'peach');
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.unshift('remon', 'watermelon');
console.log(fruit);

fruit.shift();
console.log(fruit); 

// shift와 unshift는 pop과 push보다 느리다. pop과 push는 빈공간에 실행하지만, shift와 unshift는 기존 데이터의 공간을 수정하는 것

fruit.push('peach');

console.clear();
console.log(fruit);

fruit.splice(1, 1, 'hi', 'hi2');
console.log(fruit);


const fruit2 = ['lemon', 'ras'];

const newFruit = fruit.concat(fruit2);
console.log(newFruit);

// 5. searching (indexOf, includes, lastIndexOf)

console.clear();
console.log(fruit);

console.log(fruit.indexOf('banana')); // 없으면 -1 출력
console.log(fruit.includes('coconut')); // 없으면 false 출력


console.log(fruit);
fruit.push('hi');

console.log(fruit.indexOf('hi')); // hi의 첫번째 인덱스
console.log(fruit.lastIndexOf('hi')); // hi의 마지막 인덱스
