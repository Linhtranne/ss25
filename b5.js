let n = parseInt(prompt("Nhập số nguyên n:"));

if (!isNaN(n)) {
    let countEvenDigits = 0;
    n = Math.abs(n);

    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {
            countEvenDigits++;
        }
        n = Math.floor(n / 10);
    }

    console.log("Số lượng chữ số chẵn trong n là: " + countEvenDigits);
} else {
    console.log("Vui lòng nhập vào một số nguyên.");
}
