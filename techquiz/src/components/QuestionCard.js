import React, {Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
  
class QuestionCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            buttonColors: ["default","default","default","default"],
            questionAnswered: "hidden", 
            answerCorrect: false
        }
    }
    
    buttonClick(buttonName){
        if(this.state.questionAnswered === "visible"){ // already answered
            return;
        }
        
        if(this.props.correctAnswer === buttonName){ // true
            this.setState({ buttonColors:{ [this.props.correctAnswer] : "primary"}, questionAnswered: "visible", answerCorrect: true});
            
        }
        else{ // false
            this.setState({ buttonColors:{ [buttonName] : "secondary"},  questionAnswered: "visible", answerCorrect: false});
        }
        
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                        <Grid
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12}>
                            <Card style={{maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                        style={{height: 140}}
                                        image={this.props.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.props.category}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {this.props.question}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="contained" size="small" color={this.state.buttonColors.one} onClick={() => this.buttonClick(0) }>
                                        {this.props.answers[0]}
                                    </Button>
                                    <Button variant="contained" size="small" color={this.state.buttonColors.two} onClick={() => this.buttonClick(1) }>
                                        {this.props.answers[1]}
                                    </Button>
                                    <Button variant="contained" size="small" color={this.state.buttonColors.three} onClick={() => this.buttonClick(2)}>
                                        {this.props.answers[2]}
                                    </Button>
                                    <Button variant="contained" size="small" color={this.state.buttonColors.four} onClick={() => this.buttonClick(3) }>
                                        {this.props.answers[3]}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className="row justify-content-center" style={{padding: 10, visibility: this.state.questionAnswered}}>
                    <p class="text-center" style={{color: this.state.answerCorrect ? "green" : "red"}}>
                        Answer {this.state.answerCorrect.toString()}
                    </p>                   
                </div>
                <div className="row justify-content-center" style={{padding: 10}}>
                    <Button variant="contained" size="small" onClick={() => this.props.nextQuestion()}>
                        Next  
                    </Button>
                </div>
            </div>
           
        );
    }
}


    

  export default QuestionCard;