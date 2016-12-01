/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 11/20/16.
 */
/////EDITHHHHHHHH
var mysql = require("mysql");

function DataBaseHandler() {
    this.connection = null;
}

DataBaseHandler.prototype.createConnection = function () {

    this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "android123",
        database: "ERP_CHIRI"
    });

    this.connection.connect(function (err) {
        if (err) {
            console.error("error connecting " + err.stack);
            return null;
        }
        console.log("connected as id " + this.threadId);
    });
    return this.connection;
};

module.exports = DataBaseHandler;
