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

    //POST route for burgers
    app.post("/api/burgers", function(req, res){
        db.burgers
        .create(req.body)
        .then(results => res.json(results));
    });

    //DELETE route for burgers
    app.delete("/api/burgers/:id", function(req, res){
        db.burgers
        .destroy({ where:{ id: req.params.id}})
        .then(results => res.json(results));
    });

    //PUT route for burgers
    app.put("/api/burgers", function(req, res){
        db.burgers
        .update({ title: req.body.title, body: req.body.body, category: req.body.category},
            {where: {id: req.body.id}})
        .then(results => res.json(results));
    });
};