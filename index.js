const express = require("express");
const port = process.env.PORT || 10000;

var app = express();

const path = require("path");
const bodyParser = require("body-parser");

var pF = path.resolve(__dirname, "public");

const server = require("http").createServer(app);

//data structure for generating work items. 
//2D array is used.
//If a link is not desired, use null instead. 

//data structure is as follows:
// 0 = string, title
// 1 = string, description or subtitle
// 2 = string, background image
// 3 = string, link for hosted website (if applicable)
// 4 = string, link for download (if applicable)
// 5 = string, link for github (if applicable)
// 6 = Project Report
works = [
	["Elite Dangerous Chatroom", "A room & session based chatsite", "one.jpg", "https://midterm-ed.herokuapp.com/", null, "https://github.com/kirbykibble/ed-midterm", null],
	["Java Blacklister Application", "A java based application that generates data from pcap files", "two.png", null, "https://github.com/kirbykibble/blacklister/archive/master.zip", "https://github.com/kirbykibble/blacklister", null],
	["This Website", "Built in less than 24 hours overall", "me.png", null, null, "https://github.com/kirbykibble/portfolio-Dylan", null],
	["Dagobah Diner", "A fictitious fast food ordering application", "five.png", "http://dagobahtech.herokuapp.com/", null, "https://github.com/kirbykibble/acit2910", null],
	["Task Ask", "A <a href='https://slack.com/'>Slack </a>application for project and task management", "six.png", null, "https://github.com/kirbykibble/TaskAsk/archive/master.zip", "https://github.com/kirbykibble/TaskAsk.git", null],
	["Procedural Cities Generation Project", "A study on Procedurally Generating Cities", "seven.png", null, "https://github.com/kirbykibble/ProceduralCitiesGenerationProject", "https://github.com/kirbykibble/ProceduralCitiesGenerationProject", "https://docs.google.com/document/d/1xpg9K37dKx7wC8DqGv8X6muKp-zy9O622QScu5eZHq4/edit?usp=sharing"]
]

app.use("/public", express.static("public"));
app.use("/scripts", express.static("build"));
app.use("/styling", express.static("styles"));
app.use("/img", express.static("images"));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function(req, resp) {
	resp.sendFile(pF + "/Index.html");
});
app.get("/mobile", function(req, resp) {
	resp.sendFile(pF + "/Mobile.html");
});

app.post("/getGenInfo", function(req, resp){
	resp.send(works);
});
server.listen(port, function(err) {
	if(err) {
		console.log(err);
		return(false);
    }
	console.log(port + " is running");
});

