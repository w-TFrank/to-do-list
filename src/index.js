import "./style.css";
import task from "./task";
import checkboxBlank from "./checkbox-blank.svg";
import checkboxChecked from "./checkbox-checked.svg";

let sampleTask = new task("sample project", "this is a sample task", "high");

sampleTask.taskDomMaker();