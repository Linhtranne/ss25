var inputNum = prompt("Nhập vào 1 số nguyên dương bất kì?");
var num =(inputNum);
if ( !isNaN(num)){
    console.log("Nhập sai rồi");
}else{
    console.log("Các số nguyên tố nhỏ hơn " + num + " là:");
    for (var i = 2; i < num; i++) {
        var input = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                input = false;
                break;
            }
        }
        if (input) {
            console.log(i);
        }
    }
}
