import React from 'react';
import SingleService from './SingleService'

const services = [
  {
    title: "E-Commeerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-laptop",
  },
  {
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-lock",
  },
];

class Services extends React.Component{
    render(){
        return (
          <section className="page-section bg-dark" id="services">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase text-info">Services</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className="row text-light text-center">
              {
                  services.map((service,index) => {
                      return <SingleService {...service} key={index}/>
                  })
              }
              
              </div>
            </div>
          </section>
        );
    }
}

export default Services;
