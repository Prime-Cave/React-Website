import React from 'react';
import Portfolioitem from './Portfolioitem';

//Images
import img1 from '../assets/Image/portfolio/01-thumbnail.jpg';
import img2 from '../assets/Image/portfolio/02-thumbnail.jpg';
import img3 from '../assets/Image/portfolio/03-thumbnail.jpg';
import img4 from '../assets/Image/portfolio/04-thumbnail.jpg';
import img5 from '../assets/Image/portfolio/05-thumbnail.jpg';
import img6 from '../assets/Image/portfolio/06-thumbnail.jpg';


const portfolio = [
  {
    title: "Threads",
    subtitle: "Illustration",
    image: img1,
    id: "#portfolioModal1",
  },
  {
    title: "Explore",
    subtitle: "Graphics Design",
    image: img2,
    id: "#portfolioModal2",
  },
  {
    title: "Finish",
    subtitle: "Identity",
    image: img3,
    id: "#portfolioModal3",
  },
  { title: "Lines", subtitle: "Branding", image: img4, id: "#portfolioModal4" },
  {
    title: "Southwest",
    subtitle: "website Design",
    image: img5,
    id: "#portfolioModal5",
  },
  {
    title: "window",
    subtitle: "Photography",
    image: img6,
    id: "#portfolioModal6",
  },
];

class Portfolio extends React.Component {
    render(){
        return (
          <section className="page-section text-info bg-dark" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className="row">
                  {portfolio.map((item,index) =>{
                      return<Portfolioitem {...item} key={index}/>
                  })}
              
               
              </div>
            </div>
          </section>
        );
    }
}
export default Portfolio;
