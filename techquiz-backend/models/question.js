const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question = new Schema({
    category: {
        type: String
    },
    question: {
        type: String
    },
    image: {
        type: String // Image URL
    },
    answers: {
        type: Array // Array with 4 elements
    },
    correctAnswer: {
        type: Number // Correct Answer number 0,1,2,3
    }
});

module.exports = mongoose.model('Question', Question);