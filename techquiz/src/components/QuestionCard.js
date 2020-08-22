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
  
class QuestionCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            buttonColors: {
                one: "default",
                two: "default",
                three: "default",
                four: "default"
            }
        }
    }
    
    buttonClick(buttonName){
        console.log(this.props.correctAnswer + buttonName);
        if(this.props.correctAnswer === buttonName){
            this.setState({ buttonColors:{ [this.props.correctAnswer] : "primary"}})
        }
        else{
            this.setState({ buttonColors:{ [buttonName] : "secondary"}})
        }
        
    }

    render(){
        return (
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
                              <Button variant="contained" size="small" color={this.state.buttonColors.one} onClick={() => this.buttonClick("one") }>
                                  {this.props.answers.one}
                              </Button>
                              <Button variant="contained" size="small" color={this.state.buttonColors.two} onClick={() => this.buttonClick("two") }>
                                  {this.props.answers.two}
                              </Button>
                              <Button variant="contained" size="small" color={this.state.buttonColors.three} onClick={() => this.buttonClick("three") }>
                                  {this.props.answers.three}
                              </Button>
                              <Button variant="contained" size="small" color={this.state.buttonColors.four} onClick={() => this.buttonClick("four") }>
                                  {this.props.answers.four}
                              </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
    }
    

  export default QuestionCard;