let grade = [];
function onClickMarks() {
    debugger;
    let telugu = document.getElementById("Tel").value;
    grade.push(telugu);
    let hindi = document.getElementById("Hin").value;
    grade.push(hindi);
    let english = document.getElementById("Eng").value;
    grade.push(english);
    let math = document.getElementById("Math").value;
    grade.push(math);
    let science = document.getElementById("Sci").value;
    grade.push(science);
    let social = document.getElementById("Soc").value;
    grade.push(social);

    let result = [];
    for (i = 0; i < grade.length; i++) {
        if ((grade[i] >= 90) && (grade[i] <= 100)) {
            result .push("A+");
        } else if ((grade[i] <= 89) && (grade[i] >= 80)) {
            result .push("A");
        } else if ((grade[i] <= 79) && (grade[i] >= 70)) {
            result .push("B+");
        } else if ((grade[i] <= 69) && (grade[i] >= 60)) {
            result .push("B");
        } else if ((grade[i] <= 59) && (grade[i] >= 50)) {
            result .push("C");
        } else if ((grade[i] <= 49) && (grade[i] >= 40)) {
            result .push("D");
        } else {
            result.push("Fail");
        }
    }
    document.getElementById("pResult1").innerHTML = result[0];
    document.getElementById("pResult2").innerHTML = result[1];
    document.getElementById("pResult3").innerHTML = result[2];
    document.getElementById("pResult4").innerHTML = result[3];
    document.getElementById("pResult5").innerHTML = result[4];
    document.getElementById("pResult6").innerHTML = result[5];
}