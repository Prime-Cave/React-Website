import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <header className="masthead" style={{backgroundImage:  `url(${this.props.Image})` }}>
                <div className="container">
                    {this.props.showtitle &&
                      <div className="masthead-subheading text-uppercase text-info " >{this.props.title}</div>
                    }

                    {this.props.showsubtitle ?
                        <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>

                    : <div className="masthead-heading text-uppercase text-info">{this.props.aboutTitle}</div>}

                    {this.props.showButton &&
                        <Link className="btn btn-info btn-xl text-uppercase js-scroll-trigger" to={this.props.Link}>{this.props.buttonText}</Link>
                    }
                   
                </div>
            </header>
        )
    }
}

export default Header;
