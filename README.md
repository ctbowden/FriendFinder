# Node & Express Servers Homework Assignment: FriendFinder
## UNC Coding Bootcamp
## Charles Bowden

### OverView

FriendFinder is an application that surveys users to determine compatibility between participants.  The application takes in survey results and compares the results with other users to determine the best overall match.  

### Node.js and JS files

- Requires NPM packages 'express', 'body-parser' and 'path'.

- server.js 
  - Launch point for our app.  Contains listener and all necessary requires to enable our routing.

- Public Folder
  - Contains our HTML documents:
  	-- home.html - Splash page for our app
  	-- survey.html - Contains survey questions and scripting to post data to our app using AJAX call

- Routing Folder
  -- apiRoutes.js - Contains routing data to our API
  -- htmlRoutes.js - Contains GET routes to direct users to our HTML files. 

- htmlRoutes.js
  	- Contains the following routing information: 
  		-- A GET Route to '/survey' that displays the survey page for our application
  		-- A default route '/' to 'home.html'

- apiRoutes.js
	- Contains the following routing information:
		-- A GET route with the url '/api/friends'. This route will provide a JSON of all possible friends.
		-- A POST route '/api/friends'.  This route handles incoming survey results, pushing those results to our friends variable and our logic to return our compatibility logic for our app.


