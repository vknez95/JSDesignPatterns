(function() {
    var app = angular.module('taskManager', []);

    var taskController = function(Task, taskService, taskServiceFacade) {
        var ctrl = this;

        ctrl.tasks = [new Task({
            name: 'MyTask',
            priority: 1,
            project: 'Courses',
            user: 'Jon',
            completed: false
        })];

        ctrl.completeTask = function(i) {
            var myTask = ctrl.tasks[i];
            taskServiceFacade.completeAndNotify(myTask);
            // taskService.complete(myTask);
            // if (myTask.completed == true) {
            //     taskService.setCompleteDate(myTask);
            //     taskService.notifyCompletion(myTask, myTask.user);
            //     taskService.save(myTask);
            // }
            console.log(myTask);
        };
    }

    app.controller('taskCtrl', taskController);
}());
