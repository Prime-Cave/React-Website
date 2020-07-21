import React from 'react';
import TableView from "../../Common/TableView";
import * as AdminActions from "../../../store/actions/AdminActions";
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles'
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
 


const columns = [
  { label: "ID", name: "id" },
  { label: "Title", name: "title" }
];

const styles = theme => ({
    fab: {
        position : 'fixed',
        bottom: '50px',
        right: '50px'
    }
})

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }
  render() {
   const posts = this.props.admin.posts;
   const {classes} = this.props;
    return (
      <div>
        <h1>Posts</h1>

        <TableView columns={columns} rows={posts} />
        <Fab component={RouterLink} to="/admin/posts/add" color="primary" arial-label="Add" className={classes.fab}>
            <EditIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (token) => {
            dispatch(AdminActions.getPosts(token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Posts));
