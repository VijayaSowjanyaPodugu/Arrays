let number=[];
function onlickEven(){
    debugger;
    let value=Number(document.getElementById("Num").value);
    if(value%2==0){
        let result=value;
        number.push(result);
        document.getElementById("result").innerHTML=number;
    }
    
}