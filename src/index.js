console.log('-index.js-');

import TodoService from './service/Todoservice';

let service = new TodoService();

//--------------------------------------------------------
//using DOM api

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',(e) => {
    service.addTodo('task');
});

let viewAllBtn = document.getElementById('viewAllBtn');
viewAllBtn.addEventListener((e) => {
    service.viewTodos('all');
});