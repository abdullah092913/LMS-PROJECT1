var table = document.getElementById("table");

var students = JSON.parse(localStorage.getItem('student'));


if(students != null){
    students.forEach(myFunction);
}

function myFunction(item, index) {
    if(item.date == ""){
        item.date = ""
    }
    table.innerHTML += "<tr><td>"+item.firstname +" "+item.lastname+"</td><td>"+item.date+"</td><td><button>Edit</button></td></tr>";

}