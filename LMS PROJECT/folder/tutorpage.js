var instructors=[];

function signup(){
    instructors =  [];
    var instructorObj={
        id : Math.floor(Math.random() * 10000),
        instructor : document.getElementById("instructor").value,
    }

    if(instructors.length >= 100000) {
        alert("students react maximum limit.");
    } else {
        instructors.push(instructorObj);
    }
    console.log(instructors)
    if(document.getElementById("instructor").value != ""){

        instructors.push.apply(instructors, JSON.parse(localStorage.getItem('instructor')));
        localStorage.setItem('instructor', JSON.stringify(instructors));    
    }

    document.getElementById("instructor").value = "";

}


