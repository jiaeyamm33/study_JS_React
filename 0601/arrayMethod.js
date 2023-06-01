
// 1. 주어진 배열을 string으로 변환하기 (join 메서드 사용)
const fruit = ['apple', 'banana', 'orange'];
const result = fruit.join(', ');
console.log(result);


// 2. split을 사용하여 문자를 배열로 만들기
const fruits = '사과, 바나나, 체리';
const result2 = fruits.split(',', 2); // ,로 구분하고 2개의 값만 리턴받음(사이즈 리밋)-필수값은 아님
console.log(result2);


// 3. 배열 거꾸로 만들기
const array = [1, 2, 3, 4, 5];
const result3 = array.reverse();
console.log(result3); // array도 함께 revers 됨


// 4. 두가지 element만 받은 새로운 배열 만들기
const array2 = [1, 2, 3, 4, 5];
const result4v = array2.splice(0, 2);
console.log(array2); // 3, 4, 5 출력
console.log(result4v); // 1, 2 출력
// 새로운 배열을 반환하지 않고 기존 배열을 자르기 때문에 사용 x

const array3 = [1, 2, 3, 4, 5];
const result4 = array3.slice(2, 5); // 마지막 인덱스+1을 end값으로 지정하여 마지막 요소까지 반환
console.log(result4);


// 5. 클래스 문법 + 배열 
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const student = [
  new Student('jiae', 29, true, 79),
  new Student('daegil', 30, true, 68),
  new Student('jammin', 25, false, 87),
  new Student('younge', 25, false, 90),
  new Student('mindol', 29, true, 95),
];

// 5. 학생의 점수가 90점인 학생 찾기

const result5 = student.find((student)=> student.score === 90); // 하나, 조건에 해당하는 첫번째 배열 반환
console.log(result5);


// 6. enrolled 가 true인 학생 찾기
const result6 = student.filter((student)=> student.enrolled);
console.log(result6);


// 7. 점수만 들어있는 새 배열 만들기
const result7 = student.map((student)=> student.score); // value나 item 보다는 최대한 이해하기 쉬운 인자를 사용하자 
console.log(result7);


// 8. 학생들 중에 점수가 50점보다 낮은 사람이 있는지 확인 (false 반환)
  const result8 = student.some((student)=> student.score < 50); // 어떤 배열에 하나 조건식 대입
  console.log(result8);

  const result82 = !student.every((student)=> student.score >= 50); // 모든 배열에 조건식 대입
  console.log(result82); 


// 9. 모든 학생들의 평균 점수 구하기
// reduce 는 배열을 돌면서 누적 값을 구할 때 사용, reduceRight은 맨뒤에부터 값 전달받음
  const result9 = student.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result9 / student.length);


// 10. 학생들의 모든 점수를 string으로 변환하기 ( + 90 점이상인 애들)
const result10 = student.map((student)=> student.score).filter((score)=> score >= 90).join();
console.log(result10);


// last bonus 낮은 점수순으로 string 변환
const resultBonus = student.map((student)=>student.score)
.sort((a, b) => a-b) // 큰순은 b-a
.join();
console.log(resultBonus);