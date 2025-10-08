function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter your task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  // Edit Button Function
  editBtn.onclick = function () {
    if (editBtn.innerText === "Edit") {
      // Replace text with input
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.innerText;

      li.insertBefore(input, span);
      li.removeChild(span);

      editBtn.innerText = "Save";
    } else {
      // Save the edited value
      const inputBox = li.querySelector("input");
      const newText = inputBox.value.trim();

      if (newText === "") {
        alert("Task cannot be empty");
        return;
      }

      span.innerText = newText;
      li.insertBefore(span, inputBox);
      li.removeChild(inputBox);

      editBtn.innerText = "Edit";
    }
  };

  // Delete Button Function
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Add everything to <li>
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add <li> to <ul>
  document.getElementById("task_list").appendChild(li);

  // Clear input
  taskInput.value = "";
}
