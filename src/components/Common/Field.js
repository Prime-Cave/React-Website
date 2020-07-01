import React from 'react';

class Field extends React.Component{
    render(){
        return (
          <div className="form-group">
            {this.props.elementName === "input" ? (
              <input
                className="form-control"
                id={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                required="required"
                data-validation-required-message="Please enter your name."
                name={this.props.name}
                onChange={this.props.onChange}
              />
            ) : (
              <textarea
                className="form-control"
                id={this.props.name}
                placeholder={this.props.placeholder}
                required="required"
                data-validation-required-message="Please enter a message."
                name={this.props.name}
                onChange={this.props.onChange}
              />
            )}

            <p className="help-block text-danger"></p>
          </div>
        );
    }
}

export default Field;