
//Memory Store: stores output to memory/localstorage
function ms() {
    localStorage.setItem("Memory", op.value)

}
//Memory Recall: prints value which is available in memory
function mr() {
    ip1.value = localStorage.getItem("Memory")
    calculate()
}
//Memory Add: takes the number on the display, adds it to the memory, and puts the result into memory
function mplus() {
    ip1.value = localStorage.getItem("Memory") + "+" + op.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "+" + op.value))
    calculate()
}
//Memory Subtract: takes the number on the display, subtracts it from memory, and puts the result into memory
function mminus() {
    ip1.value = localStorage.getItem("Memory") + "-" + op.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "-" + op.value))
    calculate()
}
//Memory Clear:sets the memory to 0
function mclr() {
    localStorage.setItem("Memory", 0)
}
