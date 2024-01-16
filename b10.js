let inputNumber = parseInt(prompt("Nhập số nguyên dương n: "));
console.log("Phân giải", inputNumber, "thành tích của các số nguyên tố là:");

for (let divisor = 2; divisor <= inputNumber; divisor++) {
    while (inputNumber % divisor === 0) {
        console.log(divisor);
        inputNumber /= divisor;
    }
}
