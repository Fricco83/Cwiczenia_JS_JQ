/*
<li>
		<h1>Task 1</h1>
		<button>Delete</button>
		<button>Complete</button>
	</li>
	<li class="done">
		<h1>Task 1</h1>
		<button>Delete</button>
		<button>Complete</button>
	</li>
*/

document.addEventListener("DOMContentLoaded", function() {
	var addTaskButton = document.getElementById("addTaskButton");
	var taskList = document.getElementById("taskList");
	var taskInput = document.getElementById("taskInput");
	var removeTasks = document.getElementById("removeFinishedTaskButton");

	removeTasks.addEventListener("click", function(event) {
		 var allTasksToDelete = document.querySelectorAll("#taskList .done");
		 for (var i = 0; i < allTasksToDelete.length; i++) {
		 	taskList.removeChild(allTasksToDelete[i]);
		 }
	});

	addTaskButton.addEventListener("click", function(event) {
		var taskText = taskInput.value;
		if(taskText.length < 4) {
			return;
		}

		taskInput.value="";	

		var newHeader = document.createElement("H1");
		var newCompleteButton = document.createElement("BUTTON");
		var newDeleteButton = document.createElement("BUTTON");
		var newLi = document.createElement("LI");

		newLi.appendChild(newHeader);
		newLi.appendChild(newCompleteButton);
		newLi.appendChild(newDeleteButton);

		newHeader.innerHTML = taskText;
		newCompleteButton.innerHTML = "Complete";
		newDeleteButton.innerHTML = "Delete";

		newCompleteButton.addEventListener("click", function(event) {
			this.parentNode.classList.add("done");
		});

		newDeleteButton.addEventListener("click", function(event) {
			taskList.removeChild(this.parentNode);
		});

		taskList.appendChild(newLi);
	});
});