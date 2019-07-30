require('dotenv').config();

// Make connection
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@mycluster-qaguq.mongodb.net/Tuyi?retryWrites=true&w=majority`, { useNewUrlParser: true});
const connection = mongoose.connection;

// Listeners on connection
connection.on('connected', () => console.log('Connected to DB'))
connection.on('disconnected', () => console.log('Lost DB connection'))
connection.on('error', (err) => console.log('DB error: ', err))

// Export
module.exports = connection;
