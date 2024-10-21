module.exports = (model) => {

    let module = {}

    module.task = require("./task")(model)

    return module

}