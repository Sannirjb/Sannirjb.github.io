
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    if (inputField.value==""||inputField.value.length<3){
        alert('Inputfield can not be empty or under 3 charecters')
        return false
    }
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    var a = document.createAttribute('onclick');
    a.value = "overline(this)";
    paragraph.setAttributeNode(a);
    var i = document.createAttribute('ondblclick');
    i.value = "del(this)";
    paragraph.setAttributeNode(i);
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    localStorage.setItem('to-dos', toDoContainer.innerHTML)
})


function overline(e){
    console.log(e)
    e.style.textDecoration = "line-through";
    localStorage.setItem('to-dos', toDoContainer.innerHTML)
}

function del(i){
    console.log(i)
    toDoContainer.removeChild(i);
    localStorage.setItem('to-dos', toDoContainer.innerHTML)
}

function loadtodos (){
    var list = localStorage.getItem('to-dos')
    toDoContainer.innerHTML = list
    console.log (list)
}

// Opettajalta saatu myös apua :)

// Tähän katsoin mallia useammasta eri paikasta, koska oli hieman hankala toteuttaa. Sivustot alla:
// https://dev.to/designyff/onoff-toggle-button-step-by-step-guide-3lal
// https://stackoverflow.com/questions/69904005/how-can-i-add-a-button-to-a-todo-list-to-mark-tasks-as-done-javascript
// https://www.w3schools.com/howto/howto_js_todolist.asp
// https://dev.to/walternascimentobarroso/creating-a-todo-with-javascript-275g
// https://forum.freecodecamp.org/t/how-to-make-delete-and-complete-buttons-work-on-todo-list-javascript/258709
// https://projects.raspberrypi.org/en/projects/cd-intermediate-javascript-sushi/2
// https://teamtreehouse.com/community/edit-button-deletes-contents-of-todo-list-item
