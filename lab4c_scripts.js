// const Student = {
//     studentNumber: 0,
//     name: "",
//     age: 0,
//     email: "",
//     course: ""
// }

const studentNumbers = [];
class Student{
    constructor(name, age, email, course){
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
        let number = "2023" + Math.floor((Math.random() * 99999) + 10000);
        while(true){
            let stop = true;
            for(const x in studentNumbers){
                if(number == x){
                    stop = false;
                }
            }
            if(stop){
                break;
            }   
            number = "2023" + Math.floor((Math.random() * 99999) + 10000);
        }
        studentNumbers.push(number);
        this.studentNumber = number;
    }
}

// function Student(studentNumber, name, age, email, course) {
//     this.studentNumber = 
// }

let studentArray = [];

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function time_now() {
    const now = new Date();
    const dayString = weekday[now.getDay()]
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    });

    document.getElementById('dateDisplay').innerHTML = `Today is ${dateString}, ${dayString}.<br>The current time is ${timeString}.`;
}

document.getElementById('currentDateButton').addEventListener('click', time_now);

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
        // Student.studentNumber = "2023" + Math.floor((Math.random() * 99999) + 10000);
        // Student.name = name;
        // Student.age = age;
        // Student.email = email;
        // Student.course = course;

        // let newStudent = createStudent(Student.studentNumber, Student.name, Student.age, Student.email, Student.course);
        let newStudent = new Student(name, age, email, course);
        studentArray.push(newStudent);

        for(i = 0; i < studentArray.length; i++){
            console.log(studentArray[i]);
        }

        alert("The following student has been added:\nStudent Number: " + newStudent.studentNumber + 
            "\nName: " + newStudent.name + 
            "\nAge: " + newStudent.age + 
            "\nEmail: " + newStudent.email + 
            "\nCourse: " + newStudent.course);
    } 
}

function findStudent() {
    let lfstudent_sNumber = parseInt(document.getElementById("searchStudent").value);                                                               // Gets the value sa ga pa input sng "searchStudent"
    let resultDiv = document.getElementById("searchResult");                                                                                        // Stores the div na may id "searchResult" para ma manipulate later

    if (isNaN(lfstudent_sNumber)) {                                                                                                                 // Check if number si input
        alert("Please enter a valid student number.");                                                                                              // Pop alert if di number
        return;
    }

    let lfstudent = null;                                                                                                                           // placeholder null value                                      
    
    for (let i = 0; i < studentArray.length; i++) {                                                                                                     // Iterate through the students to check if ikapila sya na student
        if (studentArray[i].studentNumber == lfstudent_sNumber) {                                                                                      // If nakita na
            lfstudent = studentArray[i];                                                                                                                // store sa lfstudent
            break;
        }
    }

    if (lfstudent) {                                                                                                                                // manipulation of div in js not in html
       const tableSearch = document.getElementById("searchResult");
       let table = "<table>";

        studentArray.forEach(student => {
            table += `
            <tr>
                <th>Student Number</th>
                <td>${student.studentNumber}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>${student.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>${student.age}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${student.email}</td>
            </tr>
            <tr>
                <th>Course</th>
                <td>${student.course}</td>
            </tr>       
        `;
        });
        
        table += "</table>";
        tableSearch.innerHTML = table;

    } else {
        resultDiv.innerHTML = "<p style='color:red;'>Student not found.</p>";
    }
}

function display_list(){
    const container = document.getElementById("displaytablecontainer");

    let table = "<table>";
    table += `
        <tr>
            <th>Student Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
        </tr>
    `;

    studentArray.forEach(student => {
        table += `
            <tr>
                <td>${student.studentNumber}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
            </tr>
        `;
    });

    table += "</table>";
    container.innerHTML = table;
}

document.getElementById("searchButton").addEventListener("click", findStudent);