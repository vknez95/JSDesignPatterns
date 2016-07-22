// var repoFactory = require('./repoFactorywCache');
// var Repo = repoFactory.getRepo('task');

// var Repo = require('./taskRepository')();

var repos = require('./repoFactory2');


var Task = function(data) {
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    // Repo.save(this);
    repos.task.save(this);
}

module.exports = Task;
