import React from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "Name",
        elementName: "input",
        type: "text",
        placeholder: "Name",
        validMessage: "Please enter your Name",
      },

      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Email",
        validMessage: "Please enter your Email",
      },

      {
        name: "phone",
        elementName: "input",
        type: "tel",
        placeholder: "Phone number",
        validMessage: "Please enter your Phone number",
      },
    ],
    [
      {
        name: "message",
        type: "text",
        placeholder: "Message",
        elementName: "textarea",
        validMessage: "Please enter your Message",
      },
    ],
  ],
};

class Contacts extends React.Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form
            id="contactForm"
            name="sentMessage"
            novalidate="novalidate"
            onSubmit={this.props.handleSubmit}
          >
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionIndex) => {
                console.log("rendering section", sectionIndex, "with", section);
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          values={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    Name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    Name: Yup.string()
      .min(3, "Come on bro your name is longer than that")
      .required("you must give us your name."),
    email: Yup.string()
      .email("You need to give us a valid emial")
      .required("we need your email"),
    phone: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .max(16, "Your phone number is too long")
      .required("pleasse provide your phone number"),
    message: Yup.string().min(100, "Please provide more details")
      .required('Please provide a message')
  }),

  handleSubmit: (values, { setSubmitting }) => {
    alert("You've submitted the form", JSON.stringify(values));
  },
})(Contacts);
