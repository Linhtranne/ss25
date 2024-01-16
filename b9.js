let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b:"));
if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
    for (let i = a; i <= b; i++) {
        let digits = [];
        let temp = i;
        let isDistinct = true;
        while (temp > 0) {
            let digit = temp % 10;
            if (digits.includes(digit)) {
                isDistinct = false;
                break;
            }
            digits.push(digit);
            temp = Math.floor(temp / 10);
        }

        if (isDistinct) {
            console.log(i);
        }
    }
} else {
    console.log("Vui lòng nhập vào 2 số nguyên dương.");
}

























