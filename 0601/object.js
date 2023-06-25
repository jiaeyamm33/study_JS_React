
// object = { key : value }

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jiae = {
    name: 'jiae',
    age: 29
}

print(jiae);

// 객체 생성 방법

// 1. 
const obj1 = {}

// 2.
const obj2 = new Object();

// 추후 객체의 property 값 추가
jiae.hasJob = '백수';

console.log(jiae.hasJob);

// 객체의 property 값 삭제
delete jiae.hasJob; 

// 2. 계산된 프로퍼티
// key는 string 타입으로 지정해서 받아 와야 한다.
console.log(jiae.name); 
console.log(jiae['name']); // string 형태로 접근 가능

jiae['hasJob'] = '백수';
console.log(jiae.hasJob);

// 어떤 경우에 어떤 방식을 사용하는가?
console.log(jiae.name); // 코딩을 하는 순간 사용
console.log(jiae['name']); // 실시간으로 원하는 값을 받아오고 싶을 때 사용

function printValue(obj, key) {
    console.log(obj[key]); // 코딩하는 당시 어떤 값(property)을 출력할지 알 수가 없음
}

printValue(jiae, 'name');
printValue(jiae, 'hasJob');

const person1 = {
    name: 'daegil',
    age: 30
}

const person2 = {
    name: 'jammin',
    age: 25
}

const person3 = {
    name: 'mindol',
    age: 29
}

const person4 = new Person('younge', 25);

// 4. Constructor Function
console.log(person4);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator : 키 확인

console.log('name' in jiae); // 키값이 있는지 확인했기 때문에 true
console.log('hasJob' in person2);

// 6. for in, for of

console.clear();
for(key in jiae) {
    console.log(key);
}

const array = [1, 2, 3, 4];

for(value of array) {
    console.log(value);
}


// 7. cloning (객체 복사)
const user = { name: 'jiae', age: 29 };
const user2 = user;

// 옛 방식, 빈 객체를 만들고 for in 문 사용하여 복사
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}

console.log(user3);


// 새 방식
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // fruit2의 값이 출력됨, 뒤에 항목이 앞을 뒤집어 씌움

console.log(mixed.color);
console.log(mixed.size);

// 번외편

// 함수의 arguments 프로퍼티 = 매개변수가 아니며 모든 전달인자를 배열 형식으로 받아두는 프로퍼티이다.

function print(a,b,...c){
    for(let i = 0 ; i < arguments.length ; i++){
      console.log(arguments[i]);
    }
  
    console.log(' '); 
  
    console.log(a);
    console.log(b);
    
    console.log(' '); 
  
    for(let i = 0 ; i < c.length; i++){
      console.log(c[i]);
    }
  }
  
  print('명지애','김민돌','강재민','전찬혁','불광천 산책러 번따남');