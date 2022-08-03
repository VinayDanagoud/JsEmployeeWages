// UC1

const Is_ABSENT = 0
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if (EmpCheck == Is_ABSENT) {
    console.log("Employee is Absent");
    return;
} else {
    console.log("Employee is PRESENT");
}
