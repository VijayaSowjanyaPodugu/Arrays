let fruits = ["apple", "banana", "grapes", "mango"];

function onClickArrayLoop() {
    debugger;
    let answer = '';
    for (i = 0; i < fruits.length; i++) {
        answer += i+1 +"."+fruits[i] +"<br/>";

    }
     document.getElementById("result").innerHTML = answer;
}


