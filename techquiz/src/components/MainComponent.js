import 'react';
import React, { Component } from 'react';
import HeaderComponent  from './HeaderComponent';
import QuestionsComponent from './QuestionComponent';

class MainComponent extends Component {

    render(){
        return(
            <div>
                <HeaderComponent/>
                    <div className="container-fluid" >
                        <div className="row">
                            <div style={{float: "none", margin: "0 auto", paddingTop: 20 }} >
                                <QuestionsComponent/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default MainComponent;