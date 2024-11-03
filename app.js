function submit() {
    var input = document.getElementById("input-Task");
    var ul = document.getElementById("taskList");


    if (input.value === "") {
        alert("plz Enter Task")

    } else {

        ul.innerHTML += "<li> " + input.value + "<button onclick='complete(this)'> Complete </button>  <button onclick='edit(this)'> Edit </button>  <button onclick='Deletetext(this)'>Delete</button></li>";
    }
    input.value = "";

};



function complete(button) {
    var li = button.parentElement;

    if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none"
        button.textContent = "Complete";
    }

    else {
        li.style.textDecoration = "line-through"
        button.textContent = "Completed"
    }

}

function edit(button) {

    var li = button.parentElement;
    var current = li.firstChild.textContent.trim();//trim removes extra spaces
    var current1 = prompt("Edit your task:", current);

    if (current1 !== null && current1 !== "") {
        li.innerHTML = current1 + "<button onclick='complete(this)'> Complete </button>  <button onclick='edit(this)'> Edit </button>  <button onclick='Deletetext(this)'>Delete</button>"

    }

}

function Deletetext(button) {

    var li = button.parentElement;
    li.remove();


}