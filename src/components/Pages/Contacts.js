import React from 'react';
import Field from '../Common/Field'
import {withFormik} from 'formik';

const fields = {
  section:[
    [
      { name: "name", elementName: "Input", type: "text", placeholder: "Your Name" },
      { name: "email", elementName: "Input", type: "email", placeholder: "Your Email" },
      { name: "phone", elementName: "Input", type: "text", placeholder: "Your Phone Number" }
    ],
    [
      { name: "message", elementName: "textarea", type: "text", placeholder: "Your Message" }
    ]
  ]
}



class Contacts extends React.Component {

  submitForm = (e) => {
    alert("Submitted,Thank you.");
  };
  
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
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  {fields.section.map((section, sectionIndex) => {
                    console.log(
                      "Rendering section",
                      sectionIndex,
                      "with",
                      section
                    );
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              valus={this.props.values[field.name]}
                              name={field.name}
                              onchange={this.props.handleChange}
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
                    id="sendMessageButton"
                    type="submit"
                    onClick={(e) => this.submitForm(e)}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues:()=>({
    name:'',
    email:'',
    phone:'',
    message:'',
  }),
  validate: values =>{
    const errors ={};
    Object.keys(values).map(v =>{
      if(!values[v]){
        errors[v]="Required";
      }
    })
    return errors;
  },
  handleSubmit: (values,{setSubmitting}) => {
    alert("you've submitted the form");
  }
})(Contacts);