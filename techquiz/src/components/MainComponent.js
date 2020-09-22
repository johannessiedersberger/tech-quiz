import 'react';
import React, { Component } from 'react';
import HeaderComponent  from './HeaderComponent';
import QuestionsComponent from './QuestionComponent';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : null,
            currentQuestion: 0
        }
    }

    componentDidMount(){
       this.loadQuestions();
    }

    loadQuestions(){
        fetch("http://localhost:4000/questions")
        .then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ questions : data });
        });
    }

    chooseNextQuestion(){
        var numberOfQuestions = this.state.questions.length;
        var nextQuestion = this.getRandomInt(0, numberOfQuestions-1);
        this.setState({currentQuestion : nextQuestion});
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render(){

        if(this.state.questions === null)
            return <div></div>;
        else
            return(
                <div>
                    <HeaderComponent/>
                        <div className="container-fluid" >
                            <div className="row">
                                <div style={{float: "none", margin: "0 auto", paddingTop: 20 }} >
                                    <QuestionsComponent
                                     question={this.state.questions[this.state.currentQuestion]}
                                     nextQuestion={() => this.chooseNextQuestion()}
                                     />
                                </div>
                            </div>
                        </div>
                </div>
            );
    }
}

export default MainComponent;