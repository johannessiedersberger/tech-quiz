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

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  function MediaCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/yucp0bhylyfxnkacespt"
            title="TEchQuestion Title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cars
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Which was the first company in California
                to be granted a permit to allow driverless vehicles on public roads?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            Cruise
          </Button>
          <Button variant="contained" size="small" color="primary">
            Tesla
          </Button>
          <Button variant="contained" size="small" color="primary">
            Zoox
          </Button>
          <Button variant="contained" size="small" color="primary">
            Waymo
          </Button>
        </CardActions>
      </Card>
    );
  }

class QuestionsComponent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="container">
               <div className="">
                    <div className="col-sm">
                        <MediaCard/>
                    </div>
               </div>
            </div>
            
        )
    }
}

export default QuestionsComponent;