export default class task {
    constructor (project, task, priority) {
        this.project = project;
        this.task = task;
        this.priority = priority;
    }

    printOneLine() {
        const main = document.getElementById("tasks");
        
        const oneLine = document.createElement("div");
    
        const makeOneLine = this.project + this.task + this.priority;
        oneLine.textContent = makeOneLine;
        main.appendChild(oneLine);
    }
}