// Get main elements on DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Define preliminary list of todos, based on local storage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Render all todos, according to last updated list
function renderTodos() {
  // Delete all html inside listElement to avoid duplicated todos renderization
  listElement.innerHTML = "";

  for (todo of todos) {
    // Create list with texts
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    todoElement.appendChild(todoText);

    // Create list with hyperlink to remove todo element
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#')

    // integrate hyperlink and list
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

    // Delete todo based on its position. deleteTodo is a function that will be create
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
  }
}

// Always, when its the first time this file is called (when the html page is loaded), the todos must be rendered
renderTodos();

// Add a new todo to the list and render updated todos list
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText)
  inputElement.value = ""

  renderTodos();
  saveToStorage();
}

// Attribute the above function to  buttonElement
buttonElement.onclick = addTodo;

// Delete todo based on its position in vector
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

// When a todo is added ou removed, localStorage must be updated
function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}


/*
=> Condição binária:
if (sexo === 'M') {
  return 'Masculino';
} else {
  return 'Feminino';
}

=> Condição binária:
return (sexo === 'M') / 'Masculino' : 'Feminino';

=> Executa a função a cada 1 segundo
setInterval(exibeAlgo, 1000)

=> Executa a função depois de 1 segundo
setInterval(exibeAlgo, 1000)

*/
