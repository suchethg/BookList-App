
function myFunction(){
    
    let tbl = document.getElementById("Mytable");
    let row = tbl.insertRow();
    let author = row.insertCell();
    let book = row.insertCell();
    let bookNumber = row.insertCell();
    let removeTask = document.createElement('input');
    author.innerHTML = document.getElementById("author_name").value;
    book.innerHTML = document.getElementById("book_name").value;
    bookNumber.innerHTML = document.getElementById("issue_no").value;
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "x");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click',function(e){row.parentNode.removeChild(row);},false);
    row.appendChild(removeTask);

    

}

