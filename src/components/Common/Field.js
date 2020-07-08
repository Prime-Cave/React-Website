import React from 'react';

class Field extends React.Component{
    render(){
        return (
          <div>
            {this.props.elementName === "input" ? (
              <div className="form-group">
                <input
                  className="form-control"
                  id={this.props.name}
                  type={this.props.type}
                  placeholder={this.props.placeholder}
                  required="required"
                  data-validation-required-message={this.props.validMessage}
                  name={this.props.name}
                  onChange={this.props.onChange}
                  onBlur={this.props.onBlur}
                />
              </div>
            ) : (
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control "
                  id={this.props.name}
                  placeholder={this.props.placeholder}
                  required="required"
                  data-validation-required-message={this.props.validMessage}
                  name={this.props.name}
                  onChange={this.props.onChange}
                  onBlur={this.props.onBlur}
                />
              </div>
            )}

            <p className="help-block text-danger">
              {(this.props.touched && this.props.errors) &&
                <span> {this.props.errors}</span>
              }
            </p>
          </div>
        );
    }
}

export default Field;