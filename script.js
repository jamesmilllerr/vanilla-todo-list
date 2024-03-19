//grab the unordered list
const taskList = document.getElementById("tasklist")

// creates a new item in the todo list
function handleSubmit(event) {
 event.preventDefault()
 let newTask = document.getElementById("newtask").value
 let listItem = document.createElement("li")
 let text = document.createTextNode(newTask)
 listItem.append(text)
 taskList.append(listItem);
 let span = document.createElement("span")
 let remove = document.createElement("button")
 remove.textContent = "Delete"
 remove.addEventListener("click", removeItem)
 span.append(remove)
 listItem.append(span)
}

function removeItem(event) {
  let task = event.target.parentElement.parentElement
  taskList.remove(task)
}

let newTaskForm = document.getElementById("taskform")
newTaskForm.addEventListener("submit", handleSubmit)
