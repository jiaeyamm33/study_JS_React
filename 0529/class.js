'use strict';

// class : template
// object : instance of a class;

class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    speak () {
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);

console.log(ellie.name);
console.log(ellie.age);

ellie.speak();

// 2. Getter and setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        // // throw Error('age can not be nagative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1); 

console.log(user1.age);

// 3. public과 private 

class Experimet {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experimet();

console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. static 

class Article {
    static publisher = 'Dream Coding';
    constructor(aritcleNumber) {
        this.aritcleNumber = aritcleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

 const article1 = new Article(1);
 const article2 = new Article(2);

 console.log(Article.publisher);
 Article.printPublisher();

 // 스태틱은 데이터와 상관 없이 공통적으로 클래스에서 사용가능한거라면 스태틱과 스태틱 메서드를 사용해야 메모리 사용 줄임 

 
 // 5. 상속과 다양성

 class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
 }
 
 class Rectangle extends Shape {}
 class Triangle extends Shape {
    // 재정리한 오버 라이딩
    draw() {
        super.draw();// 부모의 클래스 함수도 같이 호출
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    
    toString() {
        return `triangle : ${this.color}색상입니다.`
    }
 }

 const rectangle = new Rectangle(20, 20, 'blue');
 rectangle.draw();
 console.log(rectangle.getArea());

 const triangle = new Triangle (20, 20, 'red');
 triangle.draw();
 console.log(triangle.getArea());

 // 6. instatnce of

 console.log(rectangle instanceof Rectangle);
 console.log(triangle instanceof Rectangle);
 console.log(triangle instanceof Triangle);
 console.log(triangle instanceof Shape);
 console.log(triangle instanceof Object);
 
 console.log(triangle.toString());