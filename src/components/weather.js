import React, { Component } from "react";

import {
  withStyles,
  List
} from "@material-ui/core";

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
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    check:(mon,day)=>dispatch(ACTIONS.check(mon,day))
});

class ProjectCodeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
        
    }
  

  generate = () => {
    return ( this.props.items.map(item =>{
        if(this.props.match.params.dia===item.day){
            return  <div><h1>Max: {item.max}</h1><br/><h1>Min: {item.min}</h1></div> 
            
        }
        return  <div></div>    
    }
    
    )
    );
  };

 

  render() {
    const { classes } = this.props;

    return (
      <div>
            <div className={classes.demo}>
              <List dense={false}><h1></h1>{this.generate()}</List>
            </div>
        </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ProjectCodeName));