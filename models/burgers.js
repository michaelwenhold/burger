module.exports = function(sequelize, Sequelize){
    var eatBurgers = sequelize.define("burgers", {
        burger_name: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        devoured: Sequelize.BOOLEAN
    });
    return eatBurgers;
};