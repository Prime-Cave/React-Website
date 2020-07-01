import React from 'react';

//logo import
import logo1 from '../assets/Image/logos/envato.jpg';
import logo2 from "../assets/Image/logos/designmodo.jpg";
import logo3 from "../assets/Image/logos/themeforest.jpg";
import logo4 from "../assets/Image/logos/creative-market.jpg";

class Clients extends React.Component{
    render(){
        return (
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      className="img-fluid d-block mx-auto"
                      src={logo1}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      className="img-fluid d-block mx-auto"
                      src={logo2}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      className="img-fluid d-block mx-auto"
                      src={logo3}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      className="img-fluid d-block mx-auto"
                      src={logo4}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Clients;