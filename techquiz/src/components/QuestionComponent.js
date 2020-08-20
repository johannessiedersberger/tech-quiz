import React, { Component } from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  function ImageCard(){
    const classes = useStyles();
    return(
        <div>
            <CardMedia 
            className={classes.media}
            title="Tech Questions"
            image="https://easyhonestfinancial.com/wp-content/uploads/2019/01/TECH.jpg"
            />
        </div>
    );
  }
class QuestionsComponent extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <ImageCard/>
        )
    }
}

export default QuestionsComponent;