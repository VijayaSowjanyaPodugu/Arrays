let age = [15, 21, 18, 25, 17, 19, 24, 11, 32];
function onClickFilter() {
    debugger
    let adults =age.filter(a => a >18);
    document.getElementById("h1").innerHTML = adults;
    
}

let number=[120,70,90,80,100];
function onCickFind() {
    let add=number.find(a=> a >100);
    document.getElementById("h2").innerHTML=add;
}

let value=[20,30,40,10];
function onClickReduce(){
    let total = value.reduce((sum,items)=> sum+items);
    document.getElementById("h3").innerHTML=total;
}
