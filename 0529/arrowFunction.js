
// const object = {
//     name: '별코딩',
//     main : function () {
//     setTimeout(()=> {
//         console.log(this);
//     }, 1000)
//     }
// }

// const object2 = {
//     name: '다른 객체',
//     main : function () {
//         console.log(this);    
//     }
// }

// // const object3 = {
// //     name: '다객체2',
// //     mainArrow: object.mainArrow, // 화살표 함수를 둘러싸는 스코프 밖 호출
// // }

// object.main();
// // {name: 별코딩, main: f}
// object2.main();
// // {name: 다른 객체, main: f}

// // object.mainArrow();
// // window 출력, 화살표 함수의 this는 함수가 선언된 위치, 바뀌지 않는다. 

// // object3.mainArrow(); 
// // 윈도우값 출력 

// // 객체의 함수로는 화살표함수가 아닌 일반함수를 써라, 화살표 함수는 결국 객체의 다른 

// // this 값은 함수의 호출에 따라 결정된다 
// // runtime 바인딩(일반함수) 
