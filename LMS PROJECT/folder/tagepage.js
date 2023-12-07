var tags=[];

function signup(){
    tags =  [];
    var tagObj={
        tag : document.getElementById("tags").value,
        date : document.getElementById("date").value,
        class : document.getElementById("class").value,
    }

    if(tags.length >= 100000) {
        alert("students react maximum limit.");
    } else {
        tags.push(tagObj);
    }

    if(document.getElementById("tags").value != ""){

        courses.push.apply(tags, JSON.parse(localStorage.getItem('tag')));
        localStorage.setItem('tag', JSON.stringify(tags));    
    }
    document.getElementById("tags").value = "";
    document.getElementById("date").value = "";
    document.getElementById("class").value = "";

}

