let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập vào một số nguyên dương hợp lệ.");
} else {
    console.log("Các số nguyên dương từ 1 đến " + n + " và tổng của chúng (số lẻ nhỏ nhất):");

    let sum = 0;
    let i = 1;

    while (i <= n) {
        console.log(i);
        sum += i;
        i++;
    }
    if (sum % 2 == 0) {
    while (n > 1) {
        sum -= n;
        
        if(sum % 2 == 1){
            break;
        }
        n--
    }
}
    console.log("Tổng các số sau khi điều chỉnh là số lẻ nhỏ nhất: " + sum);
}
