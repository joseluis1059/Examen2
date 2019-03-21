import {
    withStyles,
    Button,
  } from "@material-ui/core";
  

import React, {Component} from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    }
  });


const mapStateToProps = state => ({
    homeTitles: state.homeTitle,
    titles:state.title
});

const mapDispatchToProps = dispatch => ({
    boom: title => dispatch(ACTIONS.boom(title))
});



class Home extends Component{

    constructor(){
        super();

        this.state = {
            homeTitle: "Bienvenido",
            title:"Weather App"
        }

    }

    titleChange = (event) => {
        console.log(this.props);
        this.props.boom(this.state.homeTitles);
    }

    render(){
        return(
            <div>
                <h1>{this.props.homeTitles}</h1>
                <h1>{this.props.titles}</h1>
                <Button onClick={this.titleChange}>Intercalar</Button>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Home));