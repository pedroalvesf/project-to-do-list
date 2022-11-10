const btnEraseTask = document.querySelector("#remover-selecionado");
const btnUp = document.querySelector("#mover-cima");
const btnDown = document.querySelector("#mover-baixo");
const btnClearComplete = document.querySelector(".clear-complete");
const btnClearList = document.querySelector(".clear-list");
const btnSave = document.querySelector(".save");
const btnCreateTask = document.querySelector("#criar-tarefa");
let ListTasksContainer = document.querySelector("#lista-tarefas");
let inputTask = document.querySelector("#texto-tarefa");
const containerList = document.querySelector('ol');

function createTask() {
    let taskList = document.createElement("li");
    taskList.classList.add("task-list")
    taskList.innerText = inputTask.value
    ListTasksContainer.appendChild(taskList)
    inputTask.value = ''
}

function selectecTask(event) {
    let taskList = document.querySelectorAll(".task-list")
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].classList.remove('selected')
    }
    event.target.classList.toggle('selected')
}

function finishedTasks(event) {
    event.target.classList.toggle('completed')
}

function eraseFinishedTasks() {
    const finishedList = document.querySelectorAll(".completed");
    for (let index = 0; index < finishedList.length; index++) {
        finishedList[index].remove();
    }
}

function clearAll() {
    const taskList = document.querySelectorAll(".task-list");
    for (let index = 0; index < taskList.length; index++) {
        taskList[index].remove();
    }
}

function eraseTask(){
    const taskList = document.querySelector(".selected");
    taskList.remove()
}
const moveUp = () =>{
    const selectecTask = document.querySelector(".selected");
    if(selectecTask){
        const previousTask = selectecTask.previousElementSibling;
    if(previousTask){
        previousTask.before(selectecTask);
    }
    }
}

const moveDown = () => {
    const selectecTask = document.querySelector(".selected")
    if(selectecTask){
        const nextTask = selectecTask.nextElementSibling;
    if(nextTask){
        nextTask.after(selectecTask);  
    }
}
}
function saveList(){
    const containerList = document.querySelector('ol');
    localStorage.setItem('taskList', containerList.innerHTML);
}

window.onload = function() {
    if(localStorage.getItem('taskList') !== null){
        ListTasksContainer.innerHTML = localStorage.getItem('taskList');

    }
    const listTaskLi = document.querySelectorAll("li");
    for(let i = 0; i < listTaskLi.length; i++){
        ListTasksContainer.addEventListener('dblclick', finishedTasks);
        listTaskLi[i].addEventListener('click', selectecTask)
    }
}

btnSave.addEventListener('click', saveList);
btnUp.addEventListener('click', moveUp)
btnDown.addEventListener('click', moveDown)
btnEraseTask.addEventListener('click', eraseTask);
btnClearComplete.addEventListener('click', eraseFinishedTasks);
btnClearList.addEventListener('click', clearAll);
ListTasksContainer.addEventListener('dblclick', finishedTasks);
ListTasksContainer.addEventListener('click', selectecTask);
btnCreateTask.addEventListener('click', createTask);