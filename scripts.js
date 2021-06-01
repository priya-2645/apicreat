const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db = new Sequelize('customer', 'root', 'Sairam3@', {
    host: 'localhost',
    dialect: 'mysql'
});
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.post("/customers", function (req, res, next) {
    res.send({
        success: "true",
        message: "post method",
        data: req.body
    });

})
app.listen(3000, function () {
    console.log("started on port:3000");
})
const User = db.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },

},
);
db.sync({
    force: true
})
    .then(() => {
        const jane = User.bulkCreate([
            {
                firstName: "Priya",
                lastName: "Murugan",
                address: "Rjpm",
                age: 22,
            }, {
                firstName: "Priya",
                lastName: "Murugan",
                address: "Rjpm",
                age: 22,
            },
        ])
    })
    .catch((err) => console.log(err))



const User1 = db.define('User1', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },


});
// User.hasOne(User, { foreignKey: "firstName" });
// User1.belongsTo(User1);
db.sync()