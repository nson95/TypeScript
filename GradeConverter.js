var lg = "";
// substituting hardcoded example grades with lack of prompt
for (var num = 55; num <= 100; num += 5) {
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
    fakeprint("Number Grade: " + num + "\n"
        + "Letter grade: " + lg);
}
function fakeprint(statement) {
    console.log(statement);
}
