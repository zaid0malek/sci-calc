num1 = 0;
op = "";
num2 = "";
arr = []
function btnclick(x) {
    y = document.getElementById("s1").value + x
    document.getElementById("s1").value = y;

    num2 = num2 + x;
    document.getElementById("s2").value = eval(num2);
    // calculate(num2);


}
function opclick(x) {
    y = document.getElementById("s1").value + x
    document.getElementById("s1").value = y;

    num2 = num2 + x;
    // y = document.getElementById("s1").value + x
    // document.getElementById("s1").value = y;
    // arr = arr.concat(num2);
    // arr = arr.concat(x);
    // op = x;
    // num1 = z;
    // num2 = "";

    // console.log(arr);

}
// function calculate(num) {

//     switch (op) {
//         case '+':
//             z = Number(num1) + Number(num);
//             break;
//         case '-':
//             z = Number(num1) - Number(num);
//             break;
//         case 'x':
//             z = Number(num1) * Number(num);
//             break;
//         case '÷':
//             z = Number(num1) / Number(num);
//             break;
//         default:
//             z = Number(num2);
//     }



//     


// }