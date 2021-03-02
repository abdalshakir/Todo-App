var todoList = document.getElementById("todoList")

function addItem() {
    var input = document.getElementById("todoInput");
    var list = document.createElement("li");
    var listText = document.createTextNode(input.value);
    list.setAttribute("class", "lists")
    list.appendChild(listText);

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "btn btn-success");
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText);
    list.appendChild(editBtn);

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "btn btn-danger");
    delBtn.setAttribute("onclick", "delItem(this)")
    delBtn.appendChild(delText);
    list.appendChild(delBtn);

    todoList.appendChild(list);
    input.value = "";

}

function editItem(a) {
    var exValue = a.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", exValue);
    a.parentNode.firstChild.nodeValue = editValue;
}

function delItem(a) {
    a.parentNode.remove()
}

function delAll() {
    todoList.innerHTML = "";

}