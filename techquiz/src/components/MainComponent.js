import 'react';
import React, { Component } from 'react';
import HeaderComponent  from './HeaderComponent';
import QuestionsComponent from './QuestionComponent';

class MainComponent extends Component {

    render(){
        return(
            <div>
                <HeaderComponent/>
                <QuestionsComponent/>
            </div>
        );
        
    }
}

export default MainComponent;