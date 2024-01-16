let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));

// Kiểm tra xem giá trị nhập vào có phải là số nguyên dương hay không
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("Vui lòng nhập vào hai số nguyên dương hợp lệ.");
} else {
    // Đảm bảo a <= b để xác định khoảng giữa hai số
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            // Nếu là số chẵn, cộng vào tổng số chẵn
            sumEven += i;
        } else {
            // Nếu là số lẻ, cộng vào tổng số lẻ
            sumOdd += i;
        }
    }

    console.log("Tổng các số lẻ từ " + a + " đến " + b + ": " + sumOdd);
    console.log("Tổng các số chẵn từ " + a + " đến " + b + ": " + sumEven);
}