var students=[];

function signup(){
    students =  [];
    var stdudentObj={
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        date : document.getElementById("date").value,
        class : document.getElementById("class").value,
    }

    if(students.length >= 100000) {
        alert("students react maximum limit.");
    } else {
        students.push(stdudentObj);
        students.sort(function (a, b) {
            return a.age - b.age;
        });
    }

    if(document.getElementById("firstname").value != "" || document.getElementById("lastname").value != "" ){

        students.push.apply(students, JSON.parse(localStorage.getItem('student')));
        localStorage.setItem('student', JSON.stringify(students));    
    }

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("class").value = "";
}
