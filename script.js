// ---------- JOB 1 FUNCTION ----------
function showJob1Duties() {

    let num = document.getElementById("job1Input").value;

    let duties = [
        "Helped customers",
        "Handled cash register",
        "Stocked shelves",
        "Cleaned workspace",
        "Worked with team"
    ];

    let index = num - 1;

    let output = ""; // IMPORTANT (fixes undefined issue)

    while (index >= 0) {
        output = output + duties[index] + "<br>";
        index--;
    }

    document.getElementById("job1Output").innerHTML = output;
}


// ---------- JOB 2 FUNCTION ----------
function showJob2Duties() {

    let num = document.getElementById("job2Input").value;

    let duties = [
        "Answered phone calls",
        "Scheduled appointments",
        "Organized files",
        "Assisted manager",
        "Maintained records"
    ];

    let index = num - 1;

    let output = "";

    while (index >= 0) {
        output = output + duties[index] + "<br>";
        index--;
    }

    document.getElementById("job2Output").innerHTML = output;
}


// ---------- SALARY FUNCTION ----------
function checkSalary() {

    let wage = document.getElementById("wage").value;
    let hours = document.getElementById("hours").value;

    let salary = wage * hours * 52;

    let message; // undefined variable

    if (salary < 20000) {
        message = ". The salary is too little.";
    } 
    else if (salary > 20000 && salary < 25000) {
        message = ". The salary is almost enough. Let’s negotiate.";
    } 
    else {
        message = ". This is a great salary for me.";
    }

    document.getElementById("salaryOutput").innerHTML =
        "The salary is " + salary + message;
}