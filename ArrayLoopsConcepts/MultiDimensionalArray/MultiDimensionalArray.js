let numbers = 
[
    [10, 20],
    [30, 40],
    [70, 80],
]
function OnClickMultiDimensional(){
    debugger;
 let rowValue= document.getElementById("row").value;
 let columnValue= document.getElementById("column").value;
 let result=numbers[rowValue][columnValue];
 document.getElementById("pResult").innerHTML=result;
}


//For Loop

let number=[ [30,40],[50,60],[70,90]]
function onClickForLoop(){
    debugger;
    let sum =0;
    for(i=0;i<number.length;i++){
        for(j=0;j<number[i].length;j++){
            let value  = number[i][j];
            sum =sum + value;
        } 
    }
    document.getElementById("pResult1").innerHTML=sum;

}