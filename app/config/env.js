const envObj = {
    "localhost" : {
        "port": 1111,
        "baseurl": "http://localhost:1111",
        "database": {
            "dbname": "TaskManagement",
            "username": "root",
            "password": "",
            "host": "localhost",
            "port": "",
        } 
    },
    // You can Add Live details also...
    // "live" : {
    //     "port": 1111,
    //     "baseurl": "http://localhost:1111",
    //     "database": {
    //         "dbname": "TaskManagement",
    //         "username": "root",
    //         "password": "",
    //         "host": "localhost",
    //         "port": "",
    //     } 
    // },
}

module.exports = () => {
    var env = process.env.Server || "live"
    return envObj[env]
}