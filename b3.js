
let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập vào một số nguyên dương hợp lệ.");
} else {
    let sum = 0;
    let m = 0;
    while (sum < n) {
        m++;
        sum += m;
    }
    m--;

    console.log("Số nguyên dương m lớn nhất sao cho tổng 1+2+3+...+m nhỏ hơn " + n + " là: " + m);
}