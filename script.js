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