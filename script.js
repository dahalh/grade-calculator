// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let grade1 = document.querySelector("#grade1").value;
    let grade2 = document.querySelector("#grade2").value;
    let grade3 = document.querySelector("#grade3").value;
    let grade4 = document.querySelector("#grade4").value;
    let grade5 = document.querySelector("#grade5").value;
    let weighing1 = document.querySelector("#weighing1").value;
    let weighing2 = document.querySelector("#weighing2").value;
    let weighing3 = document.querySelector("#weighing3").value;
    let weighing4 = document.querySelector("#weighing4").value;
    let weighing5 = document.querySelector("#weighing5").value;
    // let grades = "";
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalMark =
        
        Math.floor(((parseFloat(grade1)) * (parseFloat(weighing1)/100)) + ((parseFloat(grade2)) * (parseFloat(weighing2)/100)) + ((parseFloat(grade3)) * (parseFloat(weighing3)/100)) + ((parseFloat(grade4)) * (parseFloat(weighing4)/100)) + ((parseFloat(grade5)) * (parseFloat(weighing5)/100)));
    
    // Checking the condition for the providing the
    // grade to student based on percentage



    if (totalMark <= 100 && totalMark >= 85) {
        grades = "High Distinction";
    } else if (totalMark <= 85 && totalMark >= 75) {
        grades = "Distinction";
    } else if (totalMark <= 74 && totalMark >= 65) {
        grades = "Credit";
    } else if (totalMark <= 64 && totalMark >= 50 ) {
        grades = "Pass";
    } else {
        grades = "Fail";
    }

    // Checking if all values are filled
    if (grade1 == "" || grade2 == ""
                || grade3 == "" || grade4 == "" || grade5 == "" || weighing1 == "" || weighing2 == "" || weighing3 == "" || weighing4 == "" || weighing5 == "") {
        document.querySelector("#showdata").innerHTML
            = "Please fill all the fields";
    } else {
    
   

        if (totalMark >= 50.0) {
            document.querySelector(
                "#showdata"
            ).innerHTML = 
            `Your final mark is ${totalMark} and your grade is ${grades}.`
        } else {
            document.querySelector(
                "#showdata"
            ).innerHTML = 
            `Your final mark is ${totalMark} and your grade is ${grades}.`
        }
    }
    };
    