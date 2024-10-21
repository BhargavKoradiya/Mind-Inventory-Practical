module.exports = (Sequelize, db) => {

    let module = {}

    module.task = require("./task")(Sequelize, db)

    return module;

}