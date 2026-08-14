let number = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function onClickMap() {
    let multiple = number.map(s => s * 2);
    result = multiple;
    document.getElementById("pResult").innerHTML = result
}