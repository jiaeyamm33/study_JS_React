'use strict';



// 1. 동기와 비동기
// 자바스크립트는 동기적인 코드이다.
// hoisting : var, function declaration (자동으로 선언이 가장 맨위로 올라가는 것)


console.log('1');
setTimeout(()=> console.log('2'), 1000);
console.log('3');

function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('hello'));

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
        if(
            (id === 'ellie' && password === 'dream') || 
            (id === 'coder' && password === 'academy')
        ) {
            onSuccess(id);
        } else {
            onError(new Error('not found'));
        }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser
(id, 
password, 
(user)=> {
    userStorage.getRoles(
        user, 
        userWithRole => {
            alert(`Hellow ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        error => {
            console.log(error);
        }
    )    
}, 
error => {
    console.log(error);
})