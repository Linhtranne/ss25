var userInput = prompt("Nhập vào một số nguyên dương:");
var limit = parseInt(userInput);
if (isNaN(limit) || limit <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Dãy Fibonacci có tổng giá trị nhỏ hơn " + limit + " là:");
    console.log(0);
    console.log(1);
    var a = 0;
    var b = 1;
    var sum = a + b;
    while (sum < limit) {
        console.log(sum);
        a = b;
        b = sum;
        sum = a + b;
    }
}

























