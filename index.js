const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("Connected successfull to server");
    Dishes.create({
            name: "pizza",
            description: "This is new Pizza"
        })
        .then((dish) => {
            console.log(dish);
            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);
            return Dishes.remove({});
        })
    then(() => {
            mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        })
})