module.exports = function(sequelize, Sequelize){
    var eatBurgers = sequelize.define("burgers", {
        text: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        complete: Sequelize.BOOLEAN
    });
    return eatBurgers;
};