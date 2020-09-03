import React from 'react';

//material-ui
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';

export default function History(props){
    const classes = useStyles();
    return(
        <Container className={classes.cover}>
            
            <Paper elevation={2} className={classes.sayingcover} >
                    <Profile name={props.name}/>
                    <Saying saying={props.saying}/>
            </Paper>
            
        </Container>
    )
}


function Profile(props){
    const classes = useStyles();
    return(
      <Container>
          <Typography>
            <PersonIcon className={classes.items}/>
            <span className={classes.items} ><b> {props.name} </b> 은(는) 이렇게 말했다.</span>
          </Typography>
      </Container>
    );
  }
function Saying(props){
    const classes = useStyles();
    return(
        <Container className={classes.center}>
            <Paper className={classes.saying}>
                <Typography>{props.saying}</Typography>
            </Paper>
        </Container>
    );
}

const useStyles = makeStyles(theme => ({
    cover: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    center: {
        margin: 'auto',
    },
    items: {
        verticalAlign:'middle',
    },
    sayingcover: {
      minHeight: '30px',
      maxWidth: '800px',
      marginTop:theme.spacing(1),
      marginBottom:theme.spacing(1),
      padding: theme.spacing(2),
      margin: 'auto',
      backgroundColor: 'rgba(242,242,242,0.90)'
    },
    saying : {
        backgroundColor: 'rgb(64, 64, 64)',
        color: 'rgb(242, 242, 242)',
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    }
    
}));
