function getCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    });

    document.getElementById('dateDisplay').innerHTML = `Today is ${dateString}.<br>The current time is ${timeString}.`;
}

document.getElementById('currentDateButton').addEventListener('click', getCurrentDate);

function findStudent() {
    let lfstudent_sNumber = parseInt(document.getElementById("searchStudent").value);                                                               // Gets the value sa ga pa input sng "searchStudent"
    let resultDiv = document.getElementById("searchResult");                                                                                        // Stores the div na may id "searchResult" para ma manipulate later

    if (isNaN(lfstudent_sNumber)) {                                                                                                                 // Check if number si input
        alert("Please enter a valid student number.");                                                                                              // Pop alert if di number
        return;
    }

    let lfstudent = null;                                                                                                                           // placeholder null value                                      
    
    for (let i = 0; i < students.length; i++) {                                                                                                     // Iterate through the students to check if ikapila sya na student
        if (students[i].studentNumber === lfstudent_sNumber) {                                                                                      // If nakita na
            lfstudent = students[i];                                                                                                                // store sa lfstudent
            break;
        }
    }

    if (lfstudent) {                                                                                                                                // manipulation of div in js not in html
        resultDiv.innerHTML = `
            <h4>Student Found:</h4>
            <p><strong>Student Number:</strong> ${lfstudent.studentNumber}</p>
            <p><strong>Name:</strong> ${lfstudent.name}</p>
            <p><strong>Age:</strong> ${lfstudent.age}</p>
            <p><strong>UP Mail:</strong> ${lfstudent.upmail}</p>
            <p><strong>Course:</strong> ${lfstudent.course}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p style='color:red;'>Student not found.</p>";
    }
}
const Student = {
    studentNumber: 0,
    name: "",
    age: 0,
    email: "",
    course: ""
}

function createStudent(studentNumber, name, age, email, course) {
    return {
        studentNumber, name, age, email, course
    };
}

studentArray = [];

function add_student() {
    let validName = false;
    let validAge = false;
    let validEmail = false;
    const upmail = "@up.edu.ph";
    function isValidName(name) {
        const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;
        return (
            onlyLettersAndSpaces.test(name) &&
            name.length >= 5 &&
            /\s/.test(name)
        );
    }

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("upmail").value;
    let course = document.getElementById("course").value;

    if(isValidName(name)) {
        validName = true;
    } else {
        alert("Please input a valid name.");
    }

    if(age > 18 && age < 99){
        validAge = true;
    } else {
        alert("Please input a valid age.");
    }

    if (email.includes(upmail)) {
        validEmail = true;
    } else {
        alert("Please input a valid email.")
    }

    if(validName == true && validAge == true && validEmail == true){
        Student.studentNumber = "2023" + Math.floor((Math.random() * 99999) + 10000);
        Student.name = name;
        Student.age = age;
        Student.email = email;
        Student.course = course;

        let newStudent = createStudent(Student.studentNumber, Student.name, Student.age, Student.email, Student.course);
        studentArray.push(newStudent);

        for(i = 0; i < studentArray.length; i++){
            console.log(studentArray[i]);
        }

        alert("The following student has been added:\nStudent Number: " + Student.studentNumber + 
            "\nName: " + Student.name + 
            "\nAge: " + Student.age + 
            "\nEmail: " + Student.email + 
            "\nCourse: " + Student.course);
    } 
}

document.getElementById("searchButton").addEventListener("click", findStudent);