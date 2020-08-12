//The array that will hold the todo list items
let todoItems = [];

//This function creates the todo object once someone types 
//out the todo task. This then pushes it to the todoItems array.
function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(todo);
    renderTodo(todo);
}


function renderTodo(todo) {
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

    //Select the list which will have all the tasks
    const list = document.querySelector('.js-todo-list')

    const item = document.querySelector(`[data-key='${todo.id}']`)

    if(todo.deleted){
        item.remove();
        return;
    }

    //ischecked is returned to done, which will be the name of the class
    //if a task is checked. 
    const isChecked = todo.checked ? 'done' : '';

    //A list element is created by using the createElement method and assigned
    //node
    const node = document.createElement("li");

    //The setAttribute is used to add a class to the 
    //node element
    node.setAttribute('class', `todo-item ${isChecked}`);

    //This attribute is added to the list element
    //so that the key can be extracted to get the element clicked.
    node.setAttribute('data-key', todo.id);


    //The innerHTML of the node is setup and then added to the
    //list
    node.innerHTML = `
        <input id = "${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class= "tick js-tick"></label>
        <span>${todo.text}</span>
        <button class = "delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
        </button>
    `;

    if(item){
        list.replaceChild(node,item);
    }
    else{
    list.append(node);
    }
}

function toggleDone(key){
    const index = todoItems.findIndex(item => item.id===Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
}

function deleteTodo(key){
    const index = todoItems.findIndex(item => item.id===Number(key));
    const todo = {
        deleted:true,
        ...todoItems[index]
    };

    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
}

// Access the form element from the html
const form = document.querySelector('.js-form');

//Add a submit event listener 
//This will take the text from the input and send it
//to the method addTodo.
form.addEventListener('submit', event => {
    
    //prevents the page from refreshing on submission
    event.preventDefault();

    //select the text input 
    const input = document.querySelector('.js-todo-input');
    

    //Get the value of the input and remove whitespace
    const text = input.value.trim();
    if(text!==''){
        addTodo(text)
        input.value = '';
        input.focus();
    }
})

//Get access to the entire list of the tasks
const list = document.querySelector('.js-todo-list');

list.addEventListener('click', event => {
    if(event.target.classList.contains('js-tick')){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if(event.target.classList.contains('js-delete-todo')){
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    const ref = localStorage.getItem('todoItemsRef')
    if(ref){
        todoItems = JSON.parse(ref);
        todoItems.forEach(t=>{
            renderTodo(t)
        })
    }
})






