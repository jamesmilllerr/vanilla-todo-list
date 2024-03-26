//grab the unordered list
const taskList = document.getElementById("tasklist")

// creates a new item in the todo list
function handleSubmit(event) {
 event.preventDefault()
 let newTask = document.getElementById("newtask").value
 if (newTask === '') {
  alert("Enter a task")
  return
 }
 let listItem = document.createElement("li")
 let text = document.createTextNode(newTask)
 listItem.append(text)
 taskList.append(listItem);
 let span = document.createElement("span")
 span.className = "removeSpan"
 let remove = document.createElement("button")
 remove.className = "removeButton"
 remove.textContent = "\u00D7"
 remove.addEventListener("click", removeItem)
 span.append(remove)
 listItem.append(span)
 document.getElementById("newtask").value = ''
}
// delete items from todo list
function removeItem(event) {
  let task = event.target.parentElement.parentElement
  console.log(task)
  taskList.removeChild(task)
}

let newTaskForm = document.getElementById("taskform")
newTaskForm.addEventListener("submit", handleSubmit)
