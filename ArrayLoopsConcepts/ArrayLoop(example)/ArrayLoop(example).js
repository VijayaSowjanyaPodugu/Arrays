let vegetables = []; 
function onClickAddingItems(){
    debugger;
    let add= document.getElementById("List").value;
    let result= vegetables.push(add);
    document.getElementById("result").innerHTML=vegetables;
}


function onClickArrayLoop() {
    debugger;
    let answer = '';
    for (i = 0; i < vegetables.length; i++) {
        answer += i+1 +"."+vegetables[i] +"<br/>";
    }
     document.getElementById("result").innerHTML = answer;
}


