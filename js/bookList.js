
function myFunction(){
    
    let tbl = document.getElementById("Mytable");
    let row = tbl.insertRow();
    let author = row.insertCell();
    let book = row.insertCell();
    let bookNumber = row.insertCell();
    author.innerHTML = document.getElementById("author_name").value;
    book.innerHTML = document.getElementById("book_name").value;
    bookNumber.innerHTML = document.getElementById("issue_no").value;

}

