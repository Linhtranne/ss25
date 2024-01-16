let n = parseInt(prompt("Nhập số nguyên dương n:"));

if (!isNaN(n) && n > 0) {
    let a = 0;
    let b = 1;
    let fibN;

    if (n === 1) {
        fibN = a;
    } else if (n === 2) {
        fibN = b;
    } else {
        for (let i = 3; i <= n; i++) {
            fibN = a + b;
            a = b;
            b = fibN;
        }
    }

    console.log("Số Fibonacci thứ " + n + " là: " + fibN);
} else {
    console.log("Vui lòng nhập vào một số nguyên dương.");
}
