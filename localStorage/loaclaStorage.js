let studentName=[];
function onClickMark(){
    debugger;
    let list=document.getElementById("name").value;
    studentName.push(list);
    alert(studentName);
    localStorage.setItem("students",studentName);
}