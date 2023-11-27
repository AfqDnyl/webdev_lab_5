const fs = require('fs');

// Read the JSON file
fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Parse the JSON data
    const studentData = JSON.parse(data);

    // Access and print the information of all students
    studentData.Students.forEach(element => {
        console.log("Student:", element);
    });
});