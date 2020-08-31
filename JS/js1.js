console.log("welcome to javascript");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display() {

}

//Add method to display prottype

Display.prototype.add = function (book) {
    console.log("adding");
    table = document.getElementById("table");
    let uiString = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    table.innerHTML += uiString; 


}
Display.prototype.clear = function () {
    let lbf = document.getElementById("lbf");
    lbf.reset();
}



//Add submit event listener to form lbf
let lbf = document.getElementById("lbf");
lbf.addEventListener("submit", librarysubmit);

function librarysubmit(e) {
    console.log("welcome");
    let name = document.getElementById('bname').value;
    let author = document.getElementById('Author').value;
    let type;

    let Fiction = document.getElementById('Fiction');
    let programming = document.getElementById('programming');
    let Cooking = document.getElementById('Cooking');
    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (programming.checked) {
        type = programming.value();
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();




    e.preventDefault();
}

/*bname
Author
Fiction
programming
Cooking*/
