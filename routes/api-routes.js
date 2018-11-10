//Dependencies
var db = require("../models")

//Routes
module.exports = function(app) {

    //GET route for burgers
    app.get("/api/burgers", function(req, res){
        db.burgers
        .findAll({})
        .then(results => res.json(results));
    });

    
}