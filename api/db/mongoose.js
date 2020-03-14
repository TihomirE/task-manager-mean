// for handling connection logic to MongoDB

const mongoose = require('mongoose');

// setting mongoose to use global JS promise (insted of default BlueBird one)
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaksManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// export mongoose object
module.exports = {
    mongoose
};