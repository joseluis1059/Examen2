import React, { Component } from "react";

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
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
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class ProjectCodeName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
        console.log(this.props.match.params.nombre);
    }
  

  generate = () => {
    if(this.props.match.params.nombre=="March" )
    return ( this.props.items.map(item => (<h1>Max: {item.max}</h1>)));
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