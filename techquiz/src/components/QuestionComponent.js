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

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  
  });
  
  function MediaCard(props) {
    const classes = useStyles();
  
    return (
          <Grid
              alignItems="center"
              justify="center"
          >
              <Grid item xs={12}>
                  <Card className={classes.root}>
                      <CardActionArea>
                          <CardMedia
                              className={classes.media}
                              image={props.image}
                          />
                          <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.category}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.question}
                                </Typography>
                          </CardContent>
                      </CardActionArea>
                      <CardActions>
                            <Button variant="contained" size="small" color="primary">
                                {props.answers.one}
                            </Button>
                            <Button variant="contained" size="small" color="primary">
                                {props.answers.two}
                            </Button>
                            <Button variant="contained" size="small" color="primary">
                                {props.answers.three}
                            </Button>
                            <Button variant="contained" size="small" color="primary">
                                {props.answers.four}
                            </Button>
                      </CardActions>
                  </Card>
              </Grid>
          </Grid>
      );
  }

class QuestionsComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(        
            <MediaCard
                category="Cars"
                question="Which was the first company in California
                to be granted a permit to allow driverless vehicles on public roads?"
                image="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/yucp0bhylyfxnkacespt"
                answers={{one: "Cruise", two: "Tesla", three: "Zoox", four: "Waymo"}}
                />
        );
    }
}

export default QuestionsComponent;