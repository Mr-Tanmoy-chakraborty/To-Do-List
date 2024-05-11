function addTask() {
    let taskInput = document.getElementById('taskInput');   //selecting the input placeholder part
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let addBtn = document.querySelector(".ADD-btn");         //selecting the add button
        let taskList = document.getElementById('taskList');
        let li = document.createElement('li');
        taskList.appendChild(li);                         //append the new part into list
        li.textContent = taskText;
        li.style.color = "white";
        li.style.fontSize = "bolder";
        li.style.fontWeight = "900";

        //The done Button part
        let doneBtn = document.createElement("button");
        li.appendChild(doneBtn);
        doneBtn.textContent = "DONE";
        doneBtn.style.height = "30px";
        doneBtn.style.width = "80px";
        doneBtn.style.color = "white";
        doneBtn.style.backgroundColor = "rgb(61, 206, 61)";
        doneBtn.style.borderRadius = "8px";
        doneBtn.style.border = "2px solid black";
        doneBtn.style.paddingRight = "5px";
        doneBtn.style.paddingleft = "2px";
        doneBtn.style.margin = "5px";

        doneBtn.onclick = () => {
            doneBtn.style.backgroundColor = "grey";
            li.style.textDecoration = " 4px line-through red ";


        }

        //The delete Button part
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "DELETE";
        deleteBtn.style.height = "30px";
        deleteBtn.style.width = "80px";
        deleteBtn.style.color = "white";
        deleteBtn.style.backgroundColor = "#D2122E";
        deleteBtn.style.borderRadius = "8px";
        deleteBtn.style.padding = "5px";
        deleteBtn.style.paddingleft = "15px";
        deleteBtn.style.margin = "5px";
        li.appendChild(deleteBtn);
        deleteBtn.onclick =() => {
            li.remove();
        }
        taskInput.value = "";
    }
    else {
        alert("You have to insert a text first in the input box");
    }
}
