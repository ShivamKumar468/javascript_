// var roll =null;
// function chnageRoll(roll_Num){
//     roll = roll_Num;
// }

// console.log(roll);
// chnageRoll(5);

// console.log(roll);

function incrementAttendance(){
    let attendance =0;
    function change (){
        attendance++;
        console.log(attendance);
    }
    return change;
}

let Student1 = incrementAttendance();
Student1();
Student1();
Student1();

let Student2 = incrementAttendance();
Student2();
Student2();
