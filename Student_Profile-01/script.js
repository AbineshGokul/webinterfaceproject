function displayDetails() {

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let marks = Number(document.getElementById("marks").value);

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } 
    else if (marks >= 80) {
        grade = "A";
    } 
    else if (marks >= 70) {
        grade = "B";
    } 
    else if (marks >= 60) {
        grade = "C";
    } 
    else if (marks >= 50) {
        grade = "D";
    } 
    else {
        grade = "F";
    }

    document.getElementById("details").style.display = "block";

    document.getElementById("details").innerHTML =
        "<h2>Student Details</h2>" +

        "<div class='detail'>" +
        "<span class='label'>Name</span>" +
        "<span class='value'>" + name + "</span>" +
        "</div>" +

        "<div class='detail'>" +
        "<span class='label'>Roll No</span>" +
        "<span class='value'>" + rollno + "</span>" +
        "</div>" +

        "<div class='detail'>" +
        "<span class='label'>Marks</span>" +
        "<span class='value'>" + marks + "</span>" +
        "</div>" +

        "<div class='detail'>" +
        "<span class='label'>Grade</span>" +
        "<span class='value'>" + grade + "</span>" +
        "</div>";
}