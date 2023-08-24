import checkboxBlank from "./checkbox-blank.svg";
import checkboxChecked from "./checkbox-checked.svg";

export default class task {
    constructor (project, task, priority) {
        this.project = project;
        this.task = task;
        this.priority = priority;
    }


    //trying to make this to make a sample task list item.
    //right now i think it doesnt have the correct id's for the task divs
    taskDomMaker() {
        const main = document.getElementById("tasks");
        const checkboxBlankAsset = new Image();
        checkboxBlankAsset.src = checkboxBlank;
        const checkboxCheckedAsset = new Image();
        checkboxCheckedAsset.src = checkboxChecked;

        let taskListItem = document.createElement("div");
        let priorityAsset = document.createElement("div");
        let checkboxDiv = document.createElement("div");
        let checkboxAsset = document.createElement("img");

        taskListItem.id = "task";
        priorityAsset.id = "priority-box";
        checkboxDiv.id = "checkbox";
        checkboxAsset.src = checkboxBlankAsset;
        checkboxAsset.alt = "blank checkbox";

        //just to test
        main.append(priorityAsset, checkboxDiv);
        checkboxDiv.appendChild(checkboxAsset);
        priorityAsset.textContent = "!";
        taskListItem.textContent = this.task;
    }

    printTask() {
    }
}