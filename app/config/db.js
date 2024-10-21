module.exports = (database) => {

    let sequelize = new database({
        database: process.env.database.dbname,
        logging: false,
        dialect: "mysql",
        username: process.env.database.username,
        password: process.env.database.password,
        host: process.env.database.host
    })

    sequelize.authenticate().then(() => {
        console.log("Database is connected successfully...");
    }).catch((err) => {
        console.log("DATABASE CONNECTION ERROR : ", err);
    })

    return sequelize

}