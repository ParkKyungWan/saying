import React from 'react';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Main from '../../Main/Main';

//styles
const useStyles = makeStyles((theme) => ({
  header : {
    backgroundColor : 'rgb(64, 64, 64)',
    height: '350px',
    
  },
  profileCover: {
    margin: 'auto',
    textAlign: 'center',
  },
  profileIcon: {
    width: "50px",
    height: "50px",
    color: "rgb(242,242,242)",
    margin: theme.spacing(1),
  },
  username : {
    fontFamily: 'bold',
  },
  mainSayingCover:{
    minHeight: '30px',
    maxWidth: '800px',
    width:'90vw',
  }
  
}));
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <div className={classes.profileCover}>
          <AccountCircleIcon className={classes.profileIcon} />
          <Typography variant="h5" className={classes.username}>통치자 탕생 부인</Typography>
          <br/>
          <MainSaying/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

function MainSaying(){
  const classes = useStyles();
  return(
    <Container className={classes.mainsayingCover}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography style={{textAlign:'right'}} variant="h4">"</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6"> <i>우정이 깊어지는 것을 거부하지 말라. 열에 아홉이 아무것도 가져다 주지 않을 때, 나머지 하나가 되돌려 줄 수 있으니. </i></Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4">"</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}