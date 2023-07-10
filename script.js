var grades = [];

function addGrade() {
    var gradeInput = document.getElementById("gradeInput");
    var grade = parseInt(gradeInput.value);

    if (isNaN(grade)) {
        alert("Please enter a valid grade.");
        return;
    }

    grades.push(grade);
    gradeInput.value = "";
}

function calculateAverage() {
    var sum = grades.reduce(function(total, grade) {
        return total + grade;
    }, 0);

    var average = sum / grades.length;

    displayGradeReport("Total number of grades: " + grades.length + "<br>" +
                       "Average grade: " + average.toFixed(2));
}

function findHighestGrade() {
    var highestGrade = Math.max.apply(null, grades);

    displayGradeReport("Highest grade: " + highestGrade);
}

function findLowestGrade() {
    var lowestGrade = Math.min.apply(null, grades);

    displayGradeReport("Lowest grade: " + lowestGrade);
}

function displayGradeReport(report) {
    var gradeReportDiv = document.getElementById("gradeReport");
    gradeReportDiv.innerHTML = "Grade Report:<br>" + report;
}
