var lg = "";
var numStr = window.prompt("Enter number grade: ");
var num = +numStr;
if (num <= 59) {
    lg = "F";
}
else if (num <= 69) {
    lg = "D";
}
else if (num <= 79) {
    lg = "C";
}
else if (num <= 89) {
    lg = "B";
}
else {
    lg = "A";
}
fakeprint("Letter grade: " + lg);
function fakeprint(statement) {
    console.log(statement);
}
