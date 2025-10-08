function addTask() {
  console.log("hello");
  const inp = document.getElementById("task");
  const task = inp.value.trim();
  if (task === "") {
    alert("please enter your task");
  }
  const li = document.createElement("li");
  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.onclick = function () {
    editTask(li);
  };
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.onclick = function () {
    alert("Button clicked!");
    li.parentNode.removeChild(li);
  };
  li.appendChild(document.createTextNode(task));
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  const ul = document.getElementById("task_list");
  ul.appendChild(li);
}
function editTask(li) {
  const currentText = li.firstChild.nodeValue;
  const updatedText = prompt("Edit your task:", currentText);
  if (updatedText !== null && updatedText.trim() !== "") {
    li.firstChild.nodeValue = updatedText.trim();
  }
}
