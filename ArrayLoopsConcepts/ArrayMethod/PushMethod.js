let fruits = []
function onClickPush() {
    debugger
    let add = document.getElementById("list").value;
    fruits.push(add);
    alert(fruits)

}
function onClickPop() {
    debugger
    let add = document.getElementById("list").value;
    fruits.pop(add);
    alert(fruits)

}
function onClickUnshift() {
    debugger
    let add = document.getElementById("list").value;
    fruits.unshift(add);
    alert(fruits)

}
function onClickShift() {
    debugger
    let add = document.getElementById("list").value;
    fruits.shift(add);
    alert(fruits)

}
function onClickIncludes() {
    debugger;

    let add = document.getElementById("list").value;

    if (fruits.includes(add)) {
        alert(true);
    } else {
        alert(false);
    }
}
function onClickindexOf() {
    debugger
    let add = document.getElementById("list").value;
    let result =fruits.indexOf(add);
    alert(result)

}
function onClickJoin() {
    debugger
    let add = document.getElementById("list").value;
    let result=fruits.join(", ");
    alert(result)

}
function onClickConcat() {
    debugger
    let add = document.getElementById("list").value;
     let result=fruits.concat(add);
    alert(result)

}
function onClickReverse() {
    debugger
    let add = document.getElementById("list").value;
    fruits.reverse(add);
    alert(fruits)

}
function onClickSort() {
    debugger
    let add = document.getElementById("list").value;
    fruits.sort(add);
    alert(fruits)

}
let fruit=[]
let vegetables=[]
 function onClickVegetables(){
    debugger;
    let list1=document.getElementById("items").value
    let list2 =document.getElementById("veg").value;

    fruit.push(list1);
    vegetables.push(list2);
  
    let result=vegetables.concat(fruit);
    alert(result);
 }