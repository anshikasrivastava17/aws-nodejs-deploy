const express = require("express");
const path = require("path"); 

const app = express();

//static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('index'); 
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});