// var task = {};
// var task = Object.create(Object.prototype);
// var task = new Object();
var task = {
    title: 'My task',
    description: 'My description'
}

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

// task.title = 'My task';
// task.description = 'My Description';
// task.toString = function() {
//     return this.title + ' ' + this.description;
// }

//console.log(task.title);

task.toString = 'hi';

// console.log(task.toString());
console.log(task);
console.log(Object.keys(task));

// Object.defineProperty(task, 'toString', {
//     enumerable: true
// });

// console.log(task);
// console.log(Object.keys(task));

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());
