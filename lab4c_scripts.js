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

document.getElementById("searchButton").addEventListener("click", findStudent);