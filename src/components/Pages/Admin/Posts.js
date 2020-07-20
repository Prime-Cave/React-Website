import React from 'react';
import TableView from "../../Common/TableView";
import * as AdminActions from "../../../store/actions/AdminActions";
import { connect } from 'react-redux'


const columns = [
  { label: "ID", name: "id" },
  { label: "Title", name: "title" }
];

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }
  render() {
   const posts = this.props.admin.posts;
    return (
      <div>
        <h1>Posts</h1>

        <TableView columns={columns} rows={posts} />
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
)(Posts);
