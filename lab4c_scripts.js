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

function display_list(){
    for(i = 0; i < studentArray.length; i++) {
        document.getElementById("displaylist").textContent = studentArray[i].value;
    }
}



