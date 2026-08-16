let A = [
    [2, 4],
    [6, 5],
];
let B = [
    [1, 2],
    [3, 4]
];
let sum =[[0, 0],[0, 0]];
function onClickMatrix() {
    debugger;
    for (i = 0; i < A.length; i++) {
        for (j = 0; j < A[i].length; j++) {
            sum[i][j] = A[i][j] + B[i][j];
        }
    }
    document.getElementById("pResult").innerHTML=sum;
}

