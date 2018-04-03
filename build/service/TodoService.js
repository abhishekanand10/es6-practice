'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Todo = require('../model/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoService = function () {
    function TodoService() {
        _classCallCheck(this, TodoService);

        this.todos = [];
    }

    _createClass(TodoService, [{
        key: 'addTodo',
        value: function addTodo(title) {
            var newTodo = new _Todo2.default(title);
            this.todos = [].concat(_toConsumableArray(this.todos), [newTodo]);
        }
    }, {
        key: 'viewTodos',
        value: function viewTodos(status) {
            if (status === _constants.ALL) {
                this.todos.forEach(function (todo) {
                    return console.log(todo);
                });
            }
        }
    }]);

    return TodoService;
}();

exports.default = TodoService;