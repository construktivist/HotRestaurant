//================================================================================================
//Global Varables
//================================================================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//================================================================================================
//APP START
//================================================================================================
var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));




//================================================================================================
//RESERVATIONS
//================================================================================================

var diners = [{
	name: "Keegan Kelley" ,
	phone: "620-331-5251",
	email: "keegan@email.com",
	uniqueId: 67890
},
{
	name: "Gabrielle Hardy",
	phone: "620-331-4822",
	email: "gabrielle@email.com",
	uniqueId: 74524
},
{
	name: "Shannon Green",
	phone: "316-636-1844",
	email: "shannon@email.com",
	uniqueId: 87312
},
{
	name: "Mason Posch",
	phone: "913-269-1115",
	email: "mason@email.com",
	uniqueId: 98231
},
{
	name: "",
	phone: "",
	email: "",
	uniqueId: "":
},
{
	name: "",
	phone: "",
	email: "",
	uniqueId: "":
},
{
	name: "",
	phone: "",
	email: "",
	uniqueId: "":
},
{
	name: "",
	phone: "",
	email: "",
	uniqueId: "":
},
{
	name: "",
	phone: "",
	email: "",
	uniqueId: "":
}];


//________________________________________________________________________________________________

//================================================================================================
//START GETTING/POSTING INFORMATION TO PUSH TO SERVER
//================================================================================================


require(".app/routing/api-routes.js")(app);
require(".app/routing/html-routes.js")(app);


app.get("/", function(request, response){
    res.sendFile(path.join(__dirname, "index.html")); //<------ Will need html filename.
});


app.get("/table", function(request, response){
    res.sendFile(path.join(__dirname, "tables.html")); //<------ Will need html filename.
});

app.get("/reserve", function(request, response){
    res.sendFile(path.join(__dirname, "reserve.html")); //<------ Will need html filename.
});



//________________________________________________________________________________________________


//================================================================================================
//APP START LISTENING TO PORT
//================================================================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});












