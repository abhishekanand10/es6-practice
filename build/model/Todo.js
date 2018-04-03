"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function Todo(title) {
    _classCallCheck(this, Todo);

    Todo.id++;
    this.id = Todo.id;
    this.title = title;
    this.completed = false;
};

Todo.id = 0;

exports.default = Todo;