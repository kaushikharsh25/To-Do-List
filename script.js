const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// add function for add task
function addTask() {
    if(inputBox.value === "") {
        alert("Please enter a task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        // the li will be displayed in the list container
        listContainer.appendChild(li)
        // creating an cross button
        let span = document.createElement("span")
        span.innerHTML = "\u00d7" 
        li.appendChild(span)
    }
    inputBox.value = ""
    store()
}

// for click function

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        store();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        store();
    }
}, false)


 //  for store the tasks in local storage

function store() {
    localStorage.setItem("data",listContainer.innerHTML)
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showtask();