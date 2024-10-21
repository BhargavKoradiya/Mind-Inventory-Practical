module.exports = (app, model, controllers) => {

    app.post("/createTask", controllers.task.createTask);
    app.put("/moveTask", controllers.task.moveTask);
    app.get("/getAllTasks", controllers.task.getAllTasks);
    app.delete("/deleteTask/:id", controllers.task.deleteTask);
}