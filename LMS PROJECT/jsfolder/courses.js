var table = document.getElementById("table");

var courses = JSON.parse(localStorage.getItem('course'));
if(courses != null){
    courses.forEach(myFunction);
}

function myFunction(item, index) {
    if(item.date == ""){
        item.date = ""
    }
    table.innerHTML += "<tr><td>"+item.course +" "+"</td><td>"+item.date+"</td><td><button>Edit</button></td></tr>";

}