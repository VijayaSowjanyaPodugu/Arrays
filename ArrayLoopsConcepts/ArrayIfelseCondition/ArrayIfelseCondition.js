let list = ["BMW", "Aeroplane", "Audi", "Hero", "Honda", "Beta", "Car", "Carrot", "Apple", "Beetroot", "Suzuki"];
function onClickAplhabeticalOrder() {
    debugger;
    let Aresult = '';
    let Bresult = '';
    let Cresult = '';
    let result = '';
    for (i = 0; i < list.length; i++) {

        if (list[i].startsWith("A")) {
            Aresult += list[i] + ",";
            document.getElementById("result").innerHTML = Aresult;
        }
        else if (list[i].startsWith("B")) {
            Bresult += list[i] + ",";
            document.getElementById("result1").innerHTML = Bresult;
        }
        else if (list[i].startsWith("C")) {
            Cresult += list[i] + ",";
            document.getElementById("result2").innerHTML = Cresult;
        }
        else {
            result += list[i] + ",";
            document.getElementById("Other").innerHTML = result;
        }
    }





}