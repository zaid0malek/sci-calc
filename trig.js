//changes Button from DEG to RAD and RAD to DEG
//changes modes for tirgnometric calculations
function degrad() {
    btndegrad = document.getElementById("degrad").innerHTML
    if (btndegrad == 'DEG') {
        document.getElementById("degrad").innerHTML = "RAD"
    }
    else if (btndegrad == 'RAD') {
        document.getElementById("degrad").innerHTML = "DEG"
    }
}

//performs trignometric calculations
function deg(func) {
    // radians = degrees * PI / 180
    btndegrad2 = document.getElementById("degrad").innerHTML
    if (btndegrad2 == 'DEG') {

        switch (func) {
            case 'sin':
                x = Math.sin(trigval * Math.PI / 180).toFixed(2);
                break;
            case 'cos':
                x = Math.cos(trigval * Math.PI / 180).toFixed(2);
                break;
            case 'tan':
                if (trigval == 90) {
                    x = undefined
                }
                else {
                    x = Math.tan(trigval * Math.PI / 180).toFixed(2);
                }
                break;
            case 'cosec':
                if (trigval == 0) {
                    x = undefined
                }
                else {
                    x = Math.sin(trigval * Math.PI / 180).toFixed(2);
                    x = 1 / x;
                }
                break;
            case 'sec':
                if (trigval == 90) {
                    x = undefined
                }
                else {
                    x = Math.cos(trigval * Math.PI / 180).toFixed(2);
                    x = 1 / x;
                }
                break;
            case 'cot':
                if (trigval == 0) {
                    x = undefined
                }
                else {
                    x = Math.tan(trigval * Math.PI / 180).toFixed(2);
                    x = 1 / x;
                }
                break;

        }
    }
    else if (btndegrad2 == 'RAD') {
        switch (func) {
            case 'sin':
                x = Math.sin(trigval).toFixed(2);
                break;
            case 'cos':
                x = Math.cos(trigval).toFixed(2);
                break;
            case 'tan':
                x = Math.tan(trigval).toFixed(2);
                break;
            case 'cosec':
                x = Math.sin(trigval).toFixed(2);
                x = 1 / x;
                break;
            case 'sec':
                x = Math.cos(trigval).toFixed(2);
                x = 1 / x;
                break;
            case 'cot':
                x = Math.tan(trigval).toFixed(2);
                x = 1 / x;
                break;

        }
    }

    op.value = x;
}

//takes values from i
function trigo(valx) {

    fnow()

    if (ip1.value.length >= 5) {
        nums = ip1.value.match(/(\d+)/);
        trigval = nums[0]
    }
    else {
        trigval = op.value
    }


    switch (valx) {
        case 'sin':
            ip1.value = "sin(" + trigval + ")"
            deg('sin')
            break;
        case 'cos':
            ip1.value = "cos(" + trigval + ")"
            deg('cos')
            break;
        case 'tan':
            ip1.value = "tan(" + trigval + ")"
            deg('tan')
            break;
        case 'cosec':
            ip1.value = "cosec(" + trigval + ")"
            deg('cosec')
            break;
        case 'sec':
            ip1.value = "sec(" + trigval + ")"
            deg('sec')
            break;
        case 'cot':
            ip1.value = "cot(" + trigval + ")"
            deg('cot')
            break;


    }
}
