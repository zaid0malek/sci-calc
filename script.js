ip1 = document.getElementById("s1")
op = document.getElementById("s2")
op.value = 0

//this fuction is called when user clicks various buttons 
//it adds value of that button to ip1(i.e. screen/inputbox)
function btnclick(x) {
    ip1.value += x;
    calculate();

}

//this fuction is called when user clicks on any operator
function opclick(x) {
    if (ip1.value.length == 0) {  //it checks if there is an empty textbox then it adds 0 before operator so that it doesnt give any error
        ip1.value = "0" + x;
    }
    else {
        lastchar = ip1.value.charAt(ip1.value.length - 1)
        //below if statement checks wheather the last element is an operator or not
        //if it is any operator than it remove that opeator and add the new one 
        //(eg: 2++ gives error) hence 2+ 
        if (lastchar == '+' || lastchar == '-' || lastchar == '*' || lastchar == '/' || lastchar == '%') {
            ip1.value = ip1.value.slice(0, -1)
            ip1.value += x;
        }
        else {
            ip1.value += x;
        }
    }
}

//this function clears the input box
function btnclear() {
    ip1.value = "";
    op.value = "0";

    document.getElementById('trignometry').getElementsByTagName('option')[0].selected = 'selected'
}

//removes 1 element from right
function btnback() {
    num2 = ip1.value.slice(0, -1)
    ip1.value = num2;
    if (num2 == "") {//if no elements then set output 0
        op.value = 0;

    }
    else {
        op.value = eval(num2);
    }
}

//this function performs arithmetic operations using inbuilt eval() function
function calculate() {
    val = ip1.value;

    try {
        if (val == "") {
            op.value = 0;

        }
        else {
            op.value = eval(val);
        }
    }
    catch (err) {
        op.value = "Error";
    }

    fnow()
}
function fnow() {
    ip1.focus();
    val = ip1.value;
    ip1.value = '';
    ip1.value = val;
    ip1.onblur = function () {
        ip.focus();


    }
}
//sets the value of output in input
//so that user can work with the output
function btnequals() {
    ip1.value = op.value;
}

//converts negative to positive and positive to negative
function btnplusminus() {
    op.value = op.value * -1;
}

//convert any number to positive 
//called by |x|
function abs() {
    op.value = Math.abs(op.value)
}

//perfroms square root of given input
function btnsqrt() {

    ip1.value = '\u221A' + ip1.value
    op.value = Math.sqrt(op.value)
}

//performs factorical of input
//called by n!
function fact() {
    f = 1
    n = op.value
    for (i = 1; i <= n; i++) {
        f *= i;

    }

    ip1.value = op.value + '!'
    op.value = f
}

//it finds power of 10
//called by 10^x
function pten() {
    ip1.value = "10**" + op.value
    calculate()
}

//performs log base 10
function log() {
    ip1.value = "log(" + op.value + ")"
    op.value = Math.log10(op.value)
}

//performs natural log
function nlog() {
    ip1.value = "ln(" + op.value + ")"
    op.value = Math.log(op.value)
}
