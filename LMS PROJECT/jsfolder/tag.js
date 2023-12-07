var table = document.getElementById("table");

var tags = JSON.parse(localStorage.getItem('tag'));
if(tags!= null){
    tags.forEach(myFunction);
}

function myFunction(item, index) {
    if(item.date == ""){
        item.date = ""
    }
    table.innerHTML += "<tr><td>"+item.tag +" "+"</td><td>"+item.date+"</td><td><button>Edit</button></td></tr>";

}