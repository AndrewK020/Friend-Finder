var friends = require("../data/friends");

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        // finds smallest number in array 
        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        var newFriend = req.body;

        // find the difference between the new friend and the friends list
        var matches = [];
        const count = friends.length;
        for(var i = 0; i < count; i++) {
            var totalDifference = 0;
            for(var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }
            matches.push(totalDifference);
        }
        var smallestDiff = Array.min(matches);
        
        var match = friends[matches.indexOf(smallestDiff)];

        friends.push(newFriend);
        res.json(match);
    });
};