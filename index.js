const express = require("express");
const path = require("path");
const app = express();
//middleware
const workingtime = require("./middleware/middleware");
app.use(workingtime);

//set the wiew engine for the app
app.use(express.static(path.join(__dirname, "public")));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// response.sendfile('index.html');

//listening port
const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
