const express = require("express");
const port = process.env.PORT || 10000;

var app = express();

const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

var pF = path.resolve(__dirname, "public");

const server = require("http").createServer(app);
var io = require("socket.io")(server);

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

app.use(session({
	secret: "pepperoni",
	resave: true,
	saveUninitialized: true
}));
server.listen(port, function(err) {
	if(err) {
		console.log(err);
		return(false);
    }
	console.log(port + " is running");
});

