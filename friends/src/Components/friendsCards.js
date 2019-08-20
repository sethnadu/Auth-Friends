import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FriendsCard = ({friend}) => {

     
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {friend.email}
            </Typography>
            <Typography variant="h5" component="h2">
              {friend.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {friend.age}
            </Typography>
            <Typography variant="body2" component="p">
            
            </Typography>
          </CardContent>
        
        </Card>
      );
}

export default FriendsCard;