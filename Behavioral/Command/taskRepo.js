var repo = {
    tasks: {},
    commands: [],
    get: function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'new taskfrom db'
        }
    },
    save: function(task) {
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    },
    replay: function() {
        for (var i = 0; i < repo.commands.length; i++) {
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
}

repo.executeNoLog = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (repo[name]) {
        return repo[name].apply(repo, args);
    };

    return false;
};

repo.execute = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);

    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if (repo[name]) {
        return repo[name].apply(repo, args);
    };

    return false;
};

repo.execute('save', {
    id: 1,
    name: 'Taks 1',
    completed: false
});

repo.execute('save', {
    id: 2,
    name: 'Taks 2',
    completed: false
});

repo.execute('save', {
    id: 3,
    name: 'Taks 3',
    completed: false
});

repo.execute('save', {
    id: 4,
    name: 'Taks 4',
    completed: false
});

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);
