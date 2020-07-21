import React from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../../store/actions/AdminActions";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import {withRouter} from 'react-router-dom';

const styles = (theme) => ({
  container: {
    margin: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "row wrap",
    width: "100%",
  },
  leftSide: {
    flex: 2,
    height: "100%",
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 3,
  },
  rightSide: {
    flex: 1,
    height: "100%",
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 3,
  },
});

class AddPost extends React.Component {
  componentDidUpdate(props,state){
    if(this.props.match.params.view === 'add' && this.props.admin.posts.filter(p => p.title === this.props.values.title).length >0){
      const post = this.props.admin.posts.filter(p => p.title === this.props.values.title)[0];
      this.props.history.push('/admin/posts/edit/'+ post.dispa);
    }
  }
  componentDidMount(props, state){
    console.log('The component did mount')
    if(this.props.match.params.view === 'edit' && this.props.match.params.id){
      this.props.getSinglePost(this.props.match.params.id, this.props.auth.token)
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Form className={classes.container}>
          <Paper className={classes.leftSide}>
            <FormikTextField
              name="title"
              label="Title"
              margin="normal"
              onChange={(e) =>
                this.props.setFieldValue(
                  "slug",
                  e.target.value.toLowerCase().replace(/ /g, "_")
                )
              }
              fullWidth
            />
            <FormikTextField name="slug" label="Slug" margin="normal" />

            <FormikTextField
              name="content"
              label="Content"
              margin="normal"
              fullWidth
            />
          </Paper>

          <Paper className={classes.rightSide}>
            <FormikSelectField
              name="status"
              label="Status"
              margin="normal"
              options={[
                { label: "unpoblished", value: false },
                { label: "Published", value: true },
              ]}
              fullWidth
            />
            <Button 
              variant="contained" 
              color="primary"
               onClick={e => {
                 this.props.handleSubmit();
               }}
              ><SaveIcon /> Save
            </Button>
          </Paper>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  admin: state.admin,
});

const mapDipatchToProps = (dispatch) => ({
  addPost: (post, token) =>{
    dispatch(AdminActions.addPost(post, token));
  },
  getSinglePost: (id,token) => {
    dispatch(AdminActions.getSinglePost(id, token));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDipatchToProps
)(
  withFormik({
    mapPropsToValues: (props) => ({
      title: props.match.admin.title || '',
      slug: "",
      createdAt: "",
      status: false,
      content: "",
    }),
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required for a Post"),
      slug: Yup.string().required(),
      content: Yup.string().required(),
    }),
    handleSubmit: (values, { setSubmitting, props}) => {
      console.log('Saving', props.addPost);
      props.addPost(values, props.auth.token);
    },
 })(withStyles(styles)(AddPost)))); 
