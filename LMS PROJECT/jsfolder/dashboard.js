var totalcourses = document.getElementById("totalcourses");

var courses = JSON.parse(localStorage.getItem('course'));
totalcourses.innerText=courses.length


var totalstudents = document.getElementById("totalstudents");

var students = JSON.parse(localStorage.getItem('student'));
totalstudents.innerText=students.length


var totalinstructor = document.getElementById("totalinstructor");

var instructors = JSON.parse(localStorage.getItem('instructor'));
totalinstructor.innerText=instructors.length






