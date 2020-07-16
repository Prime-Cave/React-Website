import React from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import * as AuthActions from "../../store/actions/authActions";

const fields = [
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Enter Your password",
  },
];

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <di className="row">
              <h1>Login</h1>
            </di>
            <div className="row">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.login(
                    this.props.values.email,
                    this.props.values.password
                  );
                }}
              >
                {fields.map((f, i) => {
                  return (
                    <div className="col-md-12">
                      <Field
                        key={i}
                        {...f}
                        value={this.props.values[f.name]}
                        name={f.name}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[f.name]}
                        errors={this.props.errors[f.name]}
                      />
                    </div>
                  );
                })}
                <div className="col-md-12">
                  <button className="btn btn-info "> Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => {
      dispatch(AuthActions.login(email, pass));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email address invalid")
        .required("The Email required"),
      password: Yup.string().required("The password is required"),
    }),
    handleSubmit: (values, { setSubmitting }, login) => {
      console.log("Login in attempt ", values);
      login(values.email, values.password);
    },
  })(Login)
);
