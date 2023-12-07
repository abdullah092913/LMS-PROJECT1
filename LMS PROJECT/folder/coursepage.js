var courses=[];

function signup(){
    courses =  [];
    var courseObj={
        course : document.getElementById("course").value,
        date : document.getElementById("date").value,
        class : document.getElementById("class").value,
    }

    if(courses.length >= 100000) {
        alert("students react maximum limit.");
    } else {
        courses.push(courseObj);
    }

    if(document.getElementById("course").value != ""){

        courses.push.apply(courses, JSON.parse(localStorage.getItem('course')));
        localStorage.setItem('course', JSON.stringify(courses));    
    }
    document.getElementById("course").value = "";
    document.getElementById("date").value = "";
    document.getElementById("class").value = "";

}

