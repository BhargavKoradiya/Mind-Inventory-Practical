module.exports = (model) => {

    let module = {}

    module.createTask = async (req, res) => {
        try {
            
            let { title, description } = req.body

            let task = await model.task.create({ title, description })
            res.status(200).send(task);

        } catch (error) {
            console.log("CREATE TASK ERROR : ", error);
        }
    }

    module.moveTask = async (req, res) => {
        try {
            
            const { id, status } = req.body;

            const task = await model.task.findOne({
                where : {id: id},
                raw: true
            });

            if(!task){
                res.status(404).send("TASK NOT FOUND !");
            }

            await model.task.update({ status: status}, { where: {id}});
            res.status(200).send("TASK MOVED SUCCESSFULYY...")

        } catch (error) {
            console.log("MOVE TASK ERROR : ", error);
        }
    }

    module.getAllTasks = async (req, res) => {
        try {
            
            let allTask = await model.task.findAll();
            res.status(200).send(allTask);

        } catch (error) {
            console.log("GET ALL TASK ERROR : ", error);
        }
    }

    module.deleteTask = async (req, res) => {
        try {
            
            const { id } = req.params

            const task = await model.task.findOne({
                where : {id: id},
                raw: true
            });

            if(!task){
                res.status(404).send("TASK NOT FOUND !");
            }

            await model.task.destroy({ where : {id: id}});
            res.status(200).send("TASK DELETED SUCCESSFULLY.....")

        } catch (error) {
            console.log("DELETE TASK ERROR : ", error);
        }
    }

    return module

}