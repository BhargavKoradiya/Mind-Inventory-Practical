module.exports = (Sequelize, Schema) => {
    
    const Task = Schema.define('Task', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM,
            values: ['todo', 'in progress', 'done'],
            defaultValue: "todo"
        }
    },{
        underscored: false,
        timestamps: false,
        freezeTableName: true,
    })

    Task.sync({ force: false, alter: true });
    
    return Task;

}