const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = 4000;
const questionRoutes = express.Router();

let Question = require('./questionmodel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

questionRoutes.route('/').get((req, res) => {
    Question.find((err, questions) => {
        if(err){
            console.log(err);
        } else{
            res.json(questions);
        }
    });
});

questionRoutes.route('/:id').get((req, res) => {
    Question.find((err, questions) => {
        if(err){
            console.log(err);
        } else{
            res.json(questions);
        }
    })
});

questionRoutes.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id, (err, question) => {
        if(!question){
            res.status(404).send("data not found");
        }
        else{
            question.category = req.body.category;
            question.question = req.body.question;
            question.image = req.body.image;
            question.answers = req.body.answers;
            question.correctAnswer = req.body.correctAnswer;

            question.save().then(question => {
                res.json('Question Updated');
            }).catch(err => {
                res.status(400).send('Update not possible');
            });

        }
    })
});

questionRoutes.route('/add').post((req, res) => {
    let question = new Question(req.body);
    question.save()
        .then(question => {
            res.status(200).json({'question' : 'qustion added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new question failed');
        });
});

app.use('/questions', questionRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
