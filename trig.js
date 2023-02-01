function deg(func) {
    // radians = degrees * PI / 180

    switch (func) {
        case 'sin':
            x = Math.sin(degree * Math.PI / 180).toFixed(2);
            console.log(x)
            break;
        case 'cos':
            x = Math.cos(degree * Math.PI / 180).toFixed(2);
            break;
        case 'tan':
            if (degree == 90) {
                x = undefined
            }
            else {
                x = Math.tan(degree * Math.PI / 180).toFixed(2);
            }
            break;
        case 'cosec':
            if (degree == 0) {
                x = undefined
            }
            else {
                x = Math.sin(degree * Math.PI / 180).toFixed(2);
                x = 1 / x;
            }
            break;
        case 'sec':
            if (degree == 90) {
                x = undefined
            }
            else {
                x = Math.cos(degree * Math.PI / 180).toFixed(2);
                x = 1 / x;
            }
            break;
        case 'cot':
            if (degree == 0) {
                x = undefined
            }
            else {
                x = Math.tan(degree * Math.PI / 180).toFixed(2);
                x = 1 / x;
            }
            break;

    }

    ip2.value = x;
}

function trigo(valx) {
    if (ip1.value.length >= 5) {
        nums = ip1.value.match(/(\d+)/);
        degree = nums[0]
    }
    else {
        degree = ip2.value
    }

    switch (valx) {
        case 'sin':
            sin();
            break;
        case 'cos':
            cos();
            break;
        case 'tan':
            tan();
            break;
        case 'cosec':
            cosec()
            break;
        case 'sec':
            sec();
            break;
        case 'cot':
            cot();
            break;


    }
}

function sin() {
    ip1.value = "sin(" + degree + ")"
    deg('sin')

}
function cos() {
    ip1.value = "cos(" + degree + ")"
    deg('cos')

}
function tan() {
    ip1.value = "tan(" + degree + ")"
    deg('tan')

}
function cosec() {
    ip1.value = "cosec(" + degree + ")"
    deg('cosec')

}
function sec() {
    ip1.value = "sec(" + degree + ")"
    deg('sec')

}
function cot() {
    ip1.value = "cot(" + degree + ")"
    deg('cot')

}