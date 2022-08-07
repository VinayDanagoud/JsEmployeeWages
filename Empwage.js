//UC1

const Is_ABSENT = 0
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if (EmpCheck == Is_ABSENT) {
    console.log("Employee is Absent");
    return;
} else {
    console.log("Employee is PRESENT");
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;


function getWorkingHours(empCheck) {
switch (empCheck) {
    case IS_PART_TIME:
           return PART_TIME_HOURS;
     case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    default:
           return 0;
    }
}

function calcDailywage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailywageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs +=empHrs;
    empDailywageArr.push(calcDailywage(empHrs));
}

let empWage = calcDailywage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays +
            " Total  Hrs: " + totalEmpHrs + " EmpWage: " + empWage);

// Array Helper Functions 
// UC 7A - Calc total Wage using Array forEach traversal or reduce method 

let totEmpWage = 0 ; 
function sum ( dailyWage ) {
    totEmpWage += dailyWage ; 
}    
empDailywageArr.forEach ( sum ) ; 
 console.log ( " UC7A- Total Days : " + totalWorkingDays + 
             " Total Hrs : " + totalEmpHrs + " Emp Wage: " + totEmpWage );
                      
function totalWages ( totalWage , dailyWage ) { 
    return totalWage + dailyWage; 
}        
console.log ( " UC7A - Emp Wage with reduce : " + 
            empDailywageArr . reduce ( totalWages , 0 )); 

//UC 7B - Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0 ;
function mapDayWithWage ( dailyWage ) { 
    dailyCntr ++ ;
    return dailyCntr + " = " + dailyWage ; 
} 
let mapDayWithWageArr = empDailyWageArr.map ( mapDayWithWage ); 
console.log ( " UC7B - Daily Wage Map " ); 
console . Log ( mapDayWithWageArr );          

// UC 7C - Show Days when Full time wage of 160 were earned 

function fulltimeWage ( dailyWage ) { 
    return dailyWage.includes ( " 160 " ); 
} 
let fullDayWageArr = mapDayWithWageArr . filter ( fulltimeWage ); 
console.log ( " UC70 - Daily Wage Filter When Fulltime Wage Earned " ); 
console.log ( fullDayWageArr );