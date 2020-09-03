import React from 'react';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//styles
const useStyles = makeStyles((theme) => ({
  header : {
    backgroundColor : 'rgb(64, 64, 64)',
    height: '350px',
    
  },
  title : {
    color: 'rgb(242, 242, 242)',
    fontSize: '42px',
    textShadow: '6px 6px 4px rgba(0,0,0,0.5)',
  },
  subtitle: {
    color: '#0D0D0D',
    fontSize: '16px',
    marginTop: '20px',

  },
  typos :{
    margin: 'auto',
    maxWidth: '90vw',
  }
  
}));
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Container className={classes.typos}>
          <Typography className={classes.title}>익명의 철학가는</Typography>
          <Typography className={classes.title}>이렇게 말했다.</Typography>
          <Typography className={classes.subtitle}>
            <span style={{backgroundColor: "#F2F2F2",}}>
              시간은 예전의 우리를 앗아가는 무자비한 도둑이다. 우리는 죽음만큼이나 삶때문에 많은 것을 잃는다.
            </span>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}