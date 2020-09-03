import React from 'react';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <div className={classes.center}>
          <Profile/>
          <Textarea/>
          <Saying/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

function Profile(){
  const classes = useStyles();
  return(
    <Container>
        <Typography>
          <PersonIcon className={classes.items}/>
          <span className={classes.items} ><b> 유튜버 김계란 </b> 은(는) </span>
          <Button variant="contained" size="small" className={classes.logout}>로그아웃</Button>
        </Typography>
    </Container>
  );
}

function Textarea(){
  const classes = useStyles();
  const classes2 = useStyles2();
  return(
    <Container className={classes.textarea}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Typography style={{textAlign:'right'}} variant="h4">"</Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField className={classes.typehere} 
            InputProps={{
              classes: {
                input:classes.typehereheight,
              }
            }} 
            label="이렇게 생각한다" 
            classes={classes2}/>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h4">"</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

function Saying(){
  const classes = useStyles();
  return(
    <Container className={classes.saying}>
       <Button variant="contained" size="small" className={classes.sayingbutton}>라고 말했다.</Button>
    </Container>
  );
}




//styles 나중에 분류해서 정리할 것
const useStyles = makeStyles((theme) => ({
  header : {
    backgroundColor : 'rgba(242, 242, 242)',
    height: '235px',
    boxShadow: '0px 11px 5px rgba(0, 0, 0, 0.1)',
    color: 'rgb(51, 51, 51)',
  },
  center: {
    margin: 'auto',
  },
  items: {
    verticalAlign:'middle',
  },
  logout: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(224, 224, 224)',
  },
  textarea: {
    minHeight: '30px',
    maxWidth: '800px',
    width:'90vw',
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(1),
  },

  typehere: {
    width: '100%',
  },
  typehereheight:{height: '30px',},

  sayingbutton: {
    backgroundColor:'rgb(115, 115, 115)',
    color:'rgb(242, 242, 242)',
    float:'right',
    marginRight:'7%',
  },
  saying:{
  }

}));

//textfield 색 적용 (언더바, 포커스된 라벨)
const useStyles2 = makeStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      color: "#737373"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#737373"
    }
  }
}));