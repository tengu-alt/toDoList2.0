import _ from 'lodash';
window.addEventListener('load', toDoList);
arrayOfTasks = [];
function toDoList() {
    if(localStorage.getItem('tasks') != null){
    arrayOfTasks = localStorage.getItem('tasks').split(',')
    arrayOfTasks.sort()
    }
    
    console.log(localStorage)
    let form = document.createElement('input');
    form.type = 'text';
    document.body.append(form);
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'addNew'
    document.body.append(button)
    let buttonClr = document.createElement('button');
    buttonClr.type = 'button';
    buttonClr.innerHTML = 'clear'
    document.body.append(buttonClr)
    buttonClr.addEventListener('click', clear);
    let container = document.createElement('div');
    container.id = 'cont';
    document.body.append(container);
    let list = document.createElement('ul');
    list.id = 'ls';
    document.getElementById('cont').appendChild(list);
    console.log(arrayOfTasks)
    for (let i = 0; i < arrayOfTasks.length; i++) {
        let task = document.createElement('li');
        task.innerHTML = arrayOfTasks[i];
        document.getElementById('ls').appendChild(task);

    }
    button.addEventListener('click', adder);
    window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    adder()
    }})
}
function adder(){
    if(document.querySelector('input').value != '' && document.querySelector('input').value === document.querySelector('input').value.trim()){
    while (document.getElementById('ls').firstChild) {
        document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
    }
    arrayOfTasks.push(document.querySelector('input').value);
    arrayOfTasks.sort();
    localStorage.setItem('tasks', arrayOfTasks)
    document.querySelector('input').value = '';
    
    arrayOfTasks = localStorage.getItem('tasks').split(',')
    for (let i = 0; i < arrayOfTasks.length; i++) {
        let task = document.createElement('li');
        task.innerHTML = arrayOfTasks[i];
        document.getElementById('ls').appendChild(task);

    }
    console.log(arrayOfTasks)
    console.log(localStorage)
}
}  
function clear(){
    while (document.getElementById('ls').firstChild) {
        document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
    }
    localStorage.clear()
    document.location.reload()
    }  
