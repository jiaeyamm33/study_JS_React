
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

    function printSomething(num) {
        console.log(`'yo' ${num}`);
    }

    function alertNum(num) {
        alert(`Wow ${num}!`)
    }

const coolCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
