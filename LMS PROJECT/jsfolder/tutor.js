var box = document.getElementById("main-info");

var instructors = JSON.parse(localStorage.getItem('instructor'));
console.log(instructors)
if(instructors != null){
    instructors.forEach(myFunction);
}

function myFunction(item, index) {
    if(item.date == ""){
        item.date = ""
    }
    box.innerHTML += "<div class='client-info'> <div class='client-name'> <img src='images/logo-blue.png '> <P class='instructor-name'>"+item.instructor+" </P> </div> <div class='icons'> <a onclick='edit("+item.id+")'><img src='images/edit.svg'></a> <a onclick='delete_items("+item.id+")'><img src='images/delete.svg'></a> </div> </div>";
}

function remove(){
    localStorage.clear();
    box.innerHTML = "";
}

function delete_items(id){
    if(instructors != null){
        instructors.forEach(delete_item);
    }
    function delete_item(items, indexs) {
       if(items.instructor ==  id){

       }
    }

}
