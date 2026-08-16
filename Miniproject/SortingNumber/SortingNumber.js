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
    document.getElementById("pResult2").innerHTML = count;
    document.getElementById("pResult3").innerHTML = sum;
}



