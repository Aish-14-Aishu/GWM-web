const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    // Add event listener to the delete button
    const deleteButton = taskItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });
}

// Event listener for the Add button
addButton.addEventListener("click", addTask);

// Event listener for Enter key to add a new task
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

