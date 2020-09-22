import React, {Component } from 'react';
import QuestionCard from './QuestionCard';

class QuestionsComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(        
            <QuestionCard
                category={this.props.question.category}
                question={this.props.question.question}
                image={this.props.question.image}
                answers={this.props.question.answers}
                correctAnswer={this.props.question.correctAnswer}
                nextQuestion={() => this.props.nextQuestion()}
            />
        );
    }
}

export default QuestionsComponent;