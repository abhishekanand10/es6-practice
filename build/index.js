'use strict';

var _Todoservice = require('./service/Todoservice');

var _Todoservice2 = _interopRequireDefault(_Todoservice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('-index.js-');

var service = new _Todoservice2.default();

//--------------------------------------------------------
//using DOM api

var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    service.addTodo('task');
});

var viewAllBtn = document.getElementById('viewAllBtn');
viewAllBtn.addEventListener('click', function (e) {
    service.viewTodos('all');
});