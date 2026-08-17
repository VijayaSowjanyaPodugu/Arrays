let array = [];
function onClickPush() {
   
    let numbers = Number(document.getElementById("txtNum").value);
    array.push(numbers);
    document.getElementById("pResult").innerHTML = array;
}


function onClickSorting() {
    debugger;
    let sorting = array.sort((a, b) => (a - b));
    document.getElementById("pResult1").innerHTML = sorting;
}

function onClickWhileLoop() {
    debugger;

    let target = 9;
    let left = 0;
    let right = array.length - 1;
    let sum = [];
    let count = 0;
    while (left < right) {
        sum = (array[left]+array[right])
        if (sum == target) {
            left++;
            right--;
            count++;
        }
        else if (sum > target) {
            right--;
        }
        else if (sum < target) {
            left++;

        }
        
    }
    document.getElementById("pResult2").innerHTML = "count:"+count;
    document.getElementById("pResult3").innerHTML = "sum:"+sum;
}


//subtraction
function onCLickSub() {
    debugger;

    let target = 9;
    let left = 0;
    let right = array.length - 1;
    let sub = [];
    let count = 0;
    while (left < right) {
        sub = (array[right]-array[left])
        if (sub == target) {
            left++;
            right--;
            count++;
        }
        else if (sub > target) {
            right--;
        }
        else if (sub < target) {
            left++;

        }
        
    }
    document.getElementById("pResult4").innerHTML ="count:"+ count;
    document.getElementById("pResult5").innerHTML = "Subtraction:"+sub;
}

//Multiplication
function onCLickMulti() {
    debugger;

    let target = 9;
    let left = 0;
    let right = array.length - 1;
    let multi = [];
    let count = 0;
    while (left < right) {
        multi = (array[right]*array[left])
        if (multi == target) {
            left++;
            right--;
            count++;
        }
        else if (multi > target) {
            right--;
        }
        else if (multi < target) {
            left++;

        }
        
    }
    document.getElementById("pResult6").innerHTML = "count:"+count;
    document.getElementById("pResult7").innerHTML ="multiplication:"+ multi;
}




