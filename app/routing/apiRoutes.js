// ===============================================================================
// LOAD DATA
// We are linking our routes to the friends.js file
// ===============================================================================
var path = require("path");
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the friends JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
    // Variable to grab scores from our req
    var newFriendScores = req.body.scores;
    
    // Initialize empty array to hold data from score comparisons
    var scoresArray = [];

    // For Loop to loop through our friends array. 
    for (var i = 0; i < friends.length; i++) {
      // Temp Variable
      var scratchPaper = 0;
      // For Loop that looks at just submitted Friend data and compares those values with values of the friend at our current position in the for loop
      for (var j = 0; j < newFriendScores.length; j++) {
        // Running total of our difference between our scores
        scratchPaper += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
      }
      // Push our difference between our new submission's scores and this loop's scores
      scoresArray.push(scratchPaper);
    };

    for (var i = 0; i < scoresArray.length; i++) {
      if(scoresArray[i] <= scoresArray[matchMade]) {
        matchMade = scoresArray[i];
      }
    }
    //Logic to determine which friend best fits our match



    // Response to the webpage with JSON data to populate FriendMatch
    res.json();

    // Add Current User to our Friends Data
    friends.push(req.body);

  
  });
