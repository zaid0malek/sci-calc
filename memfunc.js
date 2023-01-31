
function ms() {
    localStorage.setItem("Memory", ip2.value)

}
function mr() {
    ip1.value = localStorage.getItem("Memory")
    calculate()
}
function mplus() {
    ip1.value = localStorage.getItem("Memory") + "+" + ip2.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "+" + ip2.value))
    calculate()
}
function mminus() {
    ip1.value = localStorage.getItem("Memory") + "-" + ip2.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "-" + ip2.value))
    calculate()
}
function mclr() {
    localStorage.setItem("Memory", 0)
}