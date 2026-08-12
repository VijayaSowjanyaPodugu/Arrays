let fruits = ["apple", "banana", "grapes", "mango"];

function onClickFor(){
    debugger;
    let answer = '';
    for (i = 0; i < fruits.length; i++) {
        answer += i+1 +"."+fruits[i] +"<br/>";

    }
     document.getElementById("result").innerHTML = answer;
}

let vegetables =["Carrot","potato","tomato"];
function onClickForOf(){
    debugger;
    for (let list of vegetables);
    document.getElementById("p1").innerHTML=vegetables;
}

let Brand =["BMW","TATA","Honda","Audi"];
    function onClickForEach(){
        debugger;
        Brand.forEach(function(list){

        });
    document.getElementById("p2").innerHTML=Brand;
}


