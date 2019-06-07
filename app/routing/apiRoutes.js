var friends = require("../data/friends");

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        var newFriend = req.body;

        friends.push(newFriend);
    });
};