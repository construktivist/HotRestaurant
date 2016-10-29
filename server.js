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
}];


//________________________________________________________________________________________________

//================================================================================================
//START GETTING/POSTING INFORMATION TO PUSH TO SERVER
//================================================================================================


// require(".app/routing/api-routes.js")(app);
// require(".app/routing/html-routes.js")(app);


app.get("/food/:diners?", function (req, res){
	
	for(var i=0; i < diners.length; i++){

		var $table = $("<div>");
		$table.addClass("well");
		table.attr("id", "table#-" + i + 1)
		$("#fakeid").append($table)

	}

	var chosen = req.params.diners;

	console.log(res);

	if(chosen){
		for(var i=0; i < diners.length; i++){
			if(chosen === diners[i].uniqueId){
				res.json(diners[i]);
				return;
			}
		}

		res.json(false);

	} else{
		res.json(diners);
	}
});



app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});



//________________________________________________________________________________________________


//================================================================================================
//APP START LISTENING TO PORT
//================================================================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});












