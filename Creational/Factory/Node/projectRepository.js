var projectRepo = function() {
    var get = function(id) {
        console.log('Getting project ' + id);
        return {
            name: 'new user from db'
        }
    };

    return {
        get: get
    }
}

module.exports = projectRepo;
