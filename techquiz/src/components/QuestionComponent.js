import React, {Component } from 'react';
import QuestionCard from './QuestionCard';

class QuestionsComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(        
            <QuestionCard
                category="Cars"
                question="Which was the first company in California
                to be granted a permit to allow driverless vehicles on public roads?"
                image="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/yucp0bhylyfxnkacespt"
                answers={{one: "Cruise", two: "Tesla", three: "Zoox", four: "Waymo"}}
                correctAnswerIndex={3}
            />
        );
    }
}

export default QuestionsComponent;