let tasks = [];

// Add Task button
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, done: false });
        updateTaskList(taskList);
        taskInput.value = "";
    }
}

document.getElementById("taskList").addEventListener("click", function (event) {
    const target = event.target;
    
// Delete button
if (target.classList.contains("remove-button")) {
    const listItem = target.closest("li");
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);

    tasks.splice(index, 1);

    updateTaskList(document.getElementById("taskList"));
}

// Mark-Done button
if (target.classList.contains("mark-done-button")) {
    const listItem = target.closest("li");
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);

    tasks[index].done = !tasks[index].done;

    updateTaskList(document.getElementById("taskList"));
}
});

function updateTaskList(taskList) {
taskList.innerHTML = "";
tasks.forEach((task, index) => {
    const listItem = document.getElementById("taskItemTemplate").cloneNode(true);
    listItem.removeAttribute("id");
    listItem.style.display = "block";

    const taskTextSpan = listItem.querySelector(".task-text");
    taskTextSpan.textContent = task.text;

    const markDoneButton = listItem.querySelector(".mark-done-button");
    markDoneButton.textContent = task.done ? "Undo" : "Mark Done";

    // Add strikethrough and change the style of the button when the task is done
    if (task.done) {
        taskTextSpan.classList.add("text-decoration-line-through");
        listItem.classList.add("bg-success"); 
        markDoneButton.classList.remove("btn-success");
        markDoneButton.classList.add("btn-primary"); 
    // When clicking "undo" revert the previous style of the task and the button
    } else {
        listItem.classList.remove("bg-success");
        markDoneButton.classList.remove("btn-primary");
        markDoneButton.classList.add("btn-success"); 
    }

    taskList.appendChild(listItem);
});
}

function markTaskDone(index) {
tasks[index].done = !tasks[index].done;
const taskList = document.getElementById("taskList");
updateTaskList(taskList);
}
