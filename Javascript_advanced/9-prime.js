function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j === 0){
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            count++;
        }
    }
return count;
}

const startTime = performance.now();
var count = countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing ${count} was ${endTime - startTime} milliseconds`);
